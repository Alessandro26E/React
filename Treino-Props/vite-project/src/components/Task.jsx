function Task({url}) {
  console.log(url)
  return (
    <iframe src={`https://open.spotify.com/embed/track/${url}?utm_source=generator`} width="300" height="352" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  );
}

export default Task;
