"use server";
import ytdl from "@distube/ytdl-core";
import ffmpeg from "fluent-ffmpeg";
import path from "path";
import fs from "fs";
import { SearchParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";

ffmpeg.setFfmpegPath("C:\\Users\\mariz\\Downloads\\ydlp\\ffmpeg-2025-06-26-git-09cd38e9d5-essentials_build\\ffmpeg-2025-06-26-git-09cd38e9d5-essentials_build\\bin\\ffmpeg.exe");
ffmpeg.setFfprobePath("C:\\Users\\mariz\\Downloads\\ydlp\\ffmpeg-2025-06-26-git-09cd38e9d5-essentials_build\\ffmpeg-2025-06-26-git-09cd38e9d5-essentials_build\\bin\\ffprobe.exe");


async function downloadMp3({ link }) {
  try {
    console.log("Validando URL:", link);

    if (!ytdl.validateURL(link)) {
      throw new Error("URL do YouTube inválida");
    }

    console.log("Obtendo informações do vídeo...");
    const info = await ytdl.getInfo(link);
    const title = info.videoDetails.title.replace(/[\/\\?%*:|"<>]/g, "-");

    console.log("Título do vídeo:", title);

    return new Promise((resolve, reject) => {
      const timestamp = Date.now();
      const filename = `${title}-${timestamp}.mp3`;
      const outputPath = path.join(process.cwd(), "public", "temp", filename);
      const tempDir = path.dirname(outputPath);
      
      if (!fs.existsSync(tempDir)) {
        fs.mkdirSync(tempDir, { recursive: true });
      }

      console.log("Iniciando download...");
      const stream = ytdl(link, {
        quality: "highestaudio",
        filter: "audioonly",
      });

      ffmpeg(stream)
        .audioBitrate(128)
        .audioCodec("libmp3lame")
        .format("mp3")
        .save(outputPath)
        .on("start", (cmd) => {
          console.log("Comando ffmpeg:", cmd);
          console.log("Download iniciado");
        })
        .on("progress", (progress) => {
          console.log("Progresso:", progress.percent + "%");
        })
        .on("end", () => {
          console.log("Conversão concluída");
          
          const publicUrl = `/temp/${filename}`;
          
          setTimeout(() => {
            try {
              if (fs.existsSync(outputPath)) {
                fs.unlinkSync(outputPath);
                console.log("Arquivo temporário removido:", filename);
              }
            } catch (error) {
              console.error("Erro ao remover arquivo:", error);
            }
          }, 10 * 60 * 1000);
          
          resolve({
            success: true,
            downloadUrl: publicUrl,
            filename: `${title}.mp3`,
            title: title
          });
        })

        .on("error", (err) => {
          console.log("Erro ffmpeg:", err);
          reject(new Error(`Erro na conversão: ${err.message}`));
        });
    });

  } catch (error) {
    console.error("Erro geral:", error);
    return {
      success: false,
      error: error.message
    };
  }
}

export default downloadMp3;