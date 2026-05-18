# My Browser Extension (Base Architecture)

A clean, minimalist skeleton built using **Manifest V3** to understand core extension mechanics, active tab data fetching, and UI/popup communication. 

This repository serves as the baseline architectural spike before moving towards client-side document parsing and backend integrations.

---

## 🛠️ Tech Stack & Compatibility

| Technology | Support | Browsers |
| :--- | :--- | :--- |
| • HTML5 / CSS3<br>• Vanilla JavaScript<br>• Chrome Extensions API<br>• **Manifest V3** | • Active Tab Reading<br>• Popup Architecture<br>• DOM-ready baseline | • Google Chrome<br>• Brave<br>• Microsoft Edge<br>• Opera |

---

## 📂 Project Structure

```txt
my-browser-extension/
├── manifest.json   # Extension configuration (MV3)
├── popup.html      # UI view
├── popup.js        # UI logic & browser API interaction
└── styles.css      # Custom styling