// document.addEventListener("DOMContentLoaded",
(async () => {
    const { api, api2, target: selectortarget } = document.currentScript.dataset;

    const target = document.querySelector(selectortarget);

    if (!target) {
        console.error("Target container not found:", selectortarget);
        return;
    }

    let wierdstuff = "";

    target.innerHTML = "<p style='text-align: center; font-family: sans-serif; color: #555;'>Loading games...</p>";

    const makecard = (games, apiUrl) => {
        return games.map(game => `
            <div
                onclick="opengame('${apiUrl}', '${game.alt}', '${game.title}')"
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
                <img src="${api}/images/${game.alt}.webp" alt="${game.title} thumbnail" style="width: clamp(50px, 120px, 240px); border-radius:8px; height: 120px; object-fit: cover;" onerror="this.onerror=null;this.src='https://placehold.co/200x120/cccccc/333333?text=No+Image';" />
                <h3 style="margin-top:10px; font-size:18px; color: #333333;">${game.title}</h3>
            </div>
        `).join("");
    };

    try {
        let allGamesHtml = "";

        const response1 = await fetch(`${api}/g.json`);
        const games1 = await response1.json();
        allGamesHtml += makecard(games1, api);

        const response2 = await fetch(`${api2}/g.json`);
        const games2 = await response2.json();
        allGamesHtml += makecard(games2, api2);

        wierdstuff = `<div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; padding: 10px;">${allGamesHtml}</div>`;
        target.innerHTML = wierdstuff;

        const gamePageContainerHtml = `
            <div id="gamePageContainer" style="
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: #fff;
                z-index: 999;
                flex-direction: column;
                align-items: center;
                justify-content: flex-start;
                padding: 20px;
                box-sizing: border-box;
            ">
                <button onclick="closegame()" style="
                    position: absolute;
                    top: 20px;
                    left: 20px;
                    padding: 10px 20px;
                    font-size: 16px;
                    cursor: pointer;
                    background-color: #007bff;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    z-index: 1001; /* Ensure button is above iframe */
                ">Back to Games</button>
                <h2 id="gamePageTitle" style="color: #333; margin-top: 60px; margin-bottom: 20px;"></h2>
                <iframe id="gamePageFrame" style="
                    width: 100%;
                    flex-grow: 1;
                    border: none;
                    border-radius: 8px;
                " allowfullscreen></iframe>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', gamePageContainerHtml);

    } catch (err) {
        target.innerHTML = "<p style='color:red; text-align: center; font-family: sans-serif;'>Error loading games. Please try again later.</p>";
        console.error("Error loading games:", err);
    }

    window.opengame = (apiUrl, alt, title) => {
        const gamePageContainer = document.getElementById("gamePageContainer");
        const gamePageFrame = document.getElementById("gamePageFrame");
        const gamePageTitle = document.getElementById("gamePageTitle");

        gamePageTitle.textContent = title;
        gamePageFrame.src = `${apiUrl}/g/${alt}`;
        gamePageContainer.style.display = "flex";
        document.body.style.overflow = 'hidden';
    };

    window.closegame = () => {
        const gamePageContainer = document.getElementById("gamePageContainer");
        const gamePageFrame = document.getElementById("gamePageFrame");

        gamePageFrame.src = ""; 
        gamePageContainer.style.display = "none";
        document.body.style.overflow = '';
    };

})();
