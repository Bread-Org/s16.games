// document.addEventListener("DOMContentLoaded", 
  (async () => {
    const { api, api2, target: targetSelector } = document.currentScript.dataset;

    const targetElement = document.querySelector(targetSelector);

    if (!targetElement) {
        console.error("Target container not found:", targetSelector);
        return;
    }

    targetElement.innerHTML = "<p style='text-align: center; font-family: sans-serif; color: #555;'>Loading games...</p>";

    const createGameCards = (games, apiUrl) => {
        return games.map(game => `
            <div
                onclick="openGame('${apiUrl}', '${game.alt}')"
                style="
                    cursor: pointer;
                    background: #ffffff;
                    border-radius: 12px;
                    padding: 12px;
                    margin: 10px;
                    display: inline-block;
                    width: 200px;
                    text-align: center;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                    transition: transform 0.2s ease-in-out;
                "
                onmouseenter="this.style.transform='scale(1.05)'"
                onmouseleave="this.style.transform='scale(1)'"
            >
                <img src="${apiUrl}/images/${game.alt}.webp" alt="${game.title} thumbnail" style="width: clamp(50px, 120px, 240px); border-radius:8px; height: 120px; object-fit: cover;" onerror="this.onerror=null;this.src='https://placehold.co/200x120/cccccc/333333?text=No+Image';" />
                <h3 style="margin-top:10px; font-size:18px; color: #333333;">${game.title}</h3>
            </div>
        `).join("");
    };

    try {
        let allGamesHtml = "";

        const response1 = await fetch(`${api}/g.json`);
        if (!response1.ok) {
            throw new Error(`Failed to fetch games JSON from ${api}: ${response1.statusText}`);
        }
        const games1 = await response1.json();
        allGamesHtml += createGameCards(games1, api);

        const response2 = await fetch(`${api2}/g.json`);
        if (!response2.ok) {
            throw new Error(`Failed to fetch games JSON from ${api2}: ${response2.statusText}`);
        }
        const games2 = await response2.json();
        allGamesHtml += createGameCards(games2, api2);

        targetElement.innerHTML = `<div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; padding: 10px;">${allGamesHtml}</div>`;

        const modalHtml = `
            <div id="gameModal" style="
                display: none;
                position: fixed;
                z-index: 1000;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0,0,0,0.8);
                display: flex; /* Use flex for centering */
                justify-content: center;
                align-items: center;
            ">
                <div style="
                    background-color: #fefefe;
                    padding: 20px;
                    border-radius: 12px;
                    width: 90%;
                    max-width: 900px;
                    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    height: 90%;
                ">
                    <span onclick="closeGame()" style="
                        color: #aaa;
                        position: absolute;
                        top: 10px;
                        right: 20px;
                        font-size: 28px;
                        font-weight: bold;
                        cursor: pointer;
                    ">&times;</span>
                    <iframe id="gameFrame" style="
                        width: 100%;
                        flex-grow: 1;
                        border: none;
                        border-radius: 8px;
                    " allowfullscreen></iframe>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHtml);


    } catch (err) {
        targetElement.innerHTML = "<p style='color:red; text-align: center; font-family: sans-serif;'>Error loading games. Please try again later.</p>";
        console.error("Error loading games:", err);
    }
})();

window.openGame = (apiUrl, alt) => {
    const modal = document.getElementById("gameModal");
    const iframe = document.getElementById("gameFrame");
    iframe.src = `${apiUrl}/g/${alt}`;
    modal.style.display = "flex";
    document.body.style.overflow = 'hidden';
};

window.closeGame = () => {
    const modal = document.getElementById("gameModal");
    const iframe = document.getElementById("gameFrame");
    iframe.src = "";
    modal.style.display = "none";
    document.body.style.overflow = '';
};
