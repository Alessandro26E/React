"use client";
import downloadMp3 from "@/actions/downloader";
import { useEffect, useState } from "react";

export default function Home() {
  const [status, setStatus] = useState("Iniciando download...");
  const [downloadUrl, setDownloadUrl] = useState(null);
  const [url, setUrl] = useState("")

  async function startDownload() {
      try {
        setStatus("Processando vídeo...");
        
        const result = await downloadMp3({
          link: url
        });

        if (result.success) {
          setStatus("Download concluído!");
          setDownloadUrl(result.downloadUrl);
          
          const link = document.createElement('a');
          link.href = result.downloadUrl;
          link.download = result.filename;
          link.style.display = 'none';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          
          setStatus(`Arquivo baixado: ${result.title}`);
        } else {
          setStatus(`Erro: ${result.error}`);
        }
      } catch (error) {
        setStatus(`Erro: ${error.message}`);
      }
    }

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">YouTube MP3 Downloader</h1>
      <p className="text-gray-600 mb-4">{status}</p>

      <div className="flex gap-2">
        <input onChange={(event) => setUrl(event.target.value)} type="text" className="bg-gray-500 rounded-md h-10 text-center" />
        <button onClick={startDownload} className="bg-blue-600 p-2 rounded-md">Buscar</button>
      </div>
      
      {downloadUrl && (
        <div className="mt-4 flex flex-col gap-5">
          
          <a
            href={downloadUrl} 
            download 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 "
          >
            Baixar novamente
          </a>
        </div>
      )}
    </div>
  );
}