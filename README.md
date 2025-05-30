<img src ="https://docs.losant.com/images/guides/how-to-build-an-experience/log-in-page/workflow.png">
---

### 💻 STRUKTUR PROYEK

```
login-project/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## ✅ 1. Penjelasan Fungsionalitas

Login ini menggunakan **JavaScript (client-side)** untuk mencocokkan **username dan password yang disimpan secara lokal di dalam script**. Cocok digunakan untuk pembelajaran atau prototipe UI/UX, bukan untuk aplikasi produksi.

---

## 📄 2. `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Login Menu</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="login-container">
    <h2>Login Menu</h2>
    <form id="loginForm">
      <input type="text" id="username" placeholder="Username" required />
      <input type="password" id="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
    <p id="message"></p>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

---

## 🎨 3. `style.css`

```css
body {
  font-family: Arial, sans-serif;
  background-color: #f0f2f5;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.login-container {
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
}

input {
  width: 100%;
  padding: 0.75rem;
  margin: 0.5rem 0;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 0.75rem;
  background-color: #4CAF50;
  border: none;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 4px;
}

button:hover {
  background-color: #45a049;
}

#message {
  margin-top: 1rem;
  color: red;
}
```

---

## ⚙️ 4. `script.js`

```javascript
// Username dan password hardcoded
const validCredentials = {
  username: "admin",
  password: "123456"
};

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const usernameInput = document.getElementById("username").value;
  const passwordInput = document.getElementById("password").value;
  const message = document.getElementById("message");

  if (
    usernameInput === validCredentials.username &&
    passwordInput === validCredentials.password
  ) {
    message.style.color = "green";
    message.textContent = "Login berhasil!";
    // Redirect jika perlu
    // window.location.href = "dashboard.html";
  } else {
    message.style.color = "red";
    message.textContent = "Username atau password salah!";
  }
});
```

---

## 📘 5. `README.md`


# Login Menu (Tanpa PHPMyAdmin dan Server)

Login sederhana menggunakan HTML, CSS, dan JavaScript tanpa database dan tanpa backend seperti PHP atau MySQL.

## 🔧 Teknologi yang Digunakan

- HTML5
- CSS3
- JavaScript (Client-side)

## 📂 Struktur File

```

login-project/
│
├── index.html       # Tampilan login utama
├── style.css        # Style untuk halaman login
├── script.js        # Logika autentikasi menggunakan JavaScript
└── README.md        # Dokumentasi proyek

```

## ✅ Fitur

- Validasi form input
- Menampilkan pesan error jika login gagal
- Autentikasi sederhana menggunakan data hardcoded
- Bisa dikembangkan ke login dinamis atau menggunakan LocalStorage

## 🚫 Keterbatasan

- Tidak aman untuk penggunaan nyata/produksi karena tidak menggunakan backend atau database
- Password tidak dienkripsi dan hanya disimpan di script
- Tidak mendukung banyak pengguna

## 🚀 Cara Menjalankan

1. Unduh atau clone repository ini.
2. Buka file `index.html` menggunakan browser.
3. Masukkan:
   - **Email:** `admin@gmail.com`
   - **Password:** `123456`
4. Klik tombol "Login".

## 📌 Catatan Tambahan

Untuk versi yang lebih aman dan kompleks, disarankan menggunakan:
- Backend seperti Node.js, PHP, Python Flask/Django
- Database seperti MySQL, MongoDB
- Autentikasi JWT dan pengamanan HTTPS

---

## 🧑‍💻 Dibuat oleh

Dwi Bakti N Dev

<img src = "https://images.ctfassets.net/tldhjvq55hjd/73G7StXzh4d2prcNmYWEXQ/239dfa3c7b176c786003be5fa8fba77b/curity-blog-design-oauth-login-workflow-4.webp?fm=webp">

