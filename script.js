const firstNames = ["Amaterasu", "Sora", "Emperor", "Hiroshi", "Amethyst", "Playada", "Adaptive", "Rebellious", "Yamato", "Dagon", "Katsu", "Saint", "Chrome", "Manera", "Arata", "Phantom", "Mamora", "Shirou", "Infused", "Jeffrey", "Shadow", "Neri"];
const lastNames = ["Edge", "Tatsuki", "Cartier", "Explorer", "Blacksimens", "Cult", "Castle", "Bennett", "Cho", "Northside", "Eternal", "Devilside", "Destruction", "Murasaki", "Violence", "Recovery", "Armano", "Takeda", "Soyama", "Hellwalker"];

const generateBtn = document.getElementById('generate-btn');
const copyBtn = document.getElementById('copy-btn');
const nicknameElement = document.getElementById('nickname');

function generateNickname() {
    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    return `${randomFirstName}_${randomLastName}`;
}

document.getElementById('generate-btn').addEventListener('click', () => {
    const nickname = generateNickname();
    document.getElementById('nickname').innerText = nickname;
});
    copyBtn.style.display = 'inline-block';
    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(nickname).then(() => {
            alert('Nickname copied to clipboard!');
        }).catch(err => {
            alert('Failed to copy nickname!');
        });
    });