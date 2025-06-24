document.addEventListener("DOMContentLoaded", async () => {
  const { api: apiUrl, target: targetSelector } = document.currentScript.dataset;

  const target = document.querySelector(targetSelector);

  if (!target) {
    console.error("Target container not found:", targetSelector);
    return;
  }

  try {
    const response = await fetch(apiUrl);

    if (!response.ok)
      throw new Error(`Failed to fetch games JSON: ${response.statusText}`);

    const games = await response.json();

    target.innerHTML = games.map(game => `
      <div
        onclick="openGame('${apiUrl}', '${game.title}')"
        style="
          cursor: pointer;
          background: #ffffff;
          border-radius: 12px;
          padding: 12px;
          margin: 10px;
          display: inline-block;
          width: 200px;
          text-align: center;
        "
        onmouseenter="this.style.transform='scale(1.05)'"
        onmouseleave="this.style.transform='scale(1)'"
      >
        <img src="${apiUrl}/${game.title}.png" alt="${game.title} thumbnail" style="width:100%; border-radius:8px; height: 120px; object-fit: cover;" onerror="this.onerror=null;this.src='https://placehold.co/200x120/cccccc/333333?text=No+Image';" />
        <h3 style="margin-top:10px; font-size:18px; color: #333333;">${game.title}</h3>
      </div>
    `).join("");
  } catch (err) {$
    target.innerHTML = "<p style='color:red; text-align: center; font-family: sans-serif;'>Error loading games. Please try again later.</p>";
    console.error("Error loading games:", err);
  }
});

window.openGame = (apiUrl, title) => {
  const modal = document.getElementById("gameModal");
  const iframe = document.getElementById("gameFrame");
  iframe.src = `${apiUrl}/${title}`;
  modal.style.display = "block"; 
  document.body.style.overflow = 'hidden';
};


window.closeGame = () => {
  const modal = document.getElementById("gameModal");
  const iframe = document.getElementById("gameFrame");
  iframe.src = "";
  modal.style.display = "none";
  document.body.style.overflow = '';
};
