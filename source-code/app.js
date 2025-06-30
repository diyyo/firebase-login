// change config.js to make this project work!
// ganti config.js agar kode bekerja!
// google
document.getElementById('login-google').addEventListener('click', function (e) {
    e.preventDefault();
    var provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
        .then((result) => {
            alert('Login Google berhasil!\nSelamat datang, ' + result.user.displayName);
        })
        .catch((error) => {
            alert('Login gagal: ' + error.message);
        });
});

// github
document.getElementById('login-github').addEventListener('click', function (e) {
    e.preventDefault();
    var provider = new firebase.auth.GithubAuthProvider();
    auth.signInWithPopup(provider)
        .then((result) => {
            alert('Login Github berhasil!\nSelamat datang, ' + result.user.displayName);
        })
        .catch((error) => {
            alert('Login gagal: ' + error.message);
        });
});

// logout
document.getElementById('logout').addEventListener('click', function (e) {
    e.preventDefault();
    auth.signOut()
        .then(() => {
            alert('Logout berhasil!');
            // handle by onAuthStateChanged
        })
        .catch((error) => {
            alert('Logout gagal: ' + error.message);
        });
});

function updateAuthUI(user) {
    const loginList = document.getElementById('list-login-btn');
    const logoutList = document.getElementById('list-logout-btn');
    // login-detail
    const username = document.getElementById('username');
    const userEmail = document.getElementById('user-email');
    const sessionId = document.getElementById('session-id');
    const userPhoto = document.getElementById('user-photo');
    const userProvider = document.getElementById('user-provider');
    const userUid = document.getElementById('user-uid');

    if (user) {
        // if-user-login
        if (loginList) loginList.style.display = 'none';
        if (logoutList) logoutList.style.display = 'block';
        if (username) username.textContent = user.displayName || '-';
        if (userEmail) userEmail.textContent = user.email || '-';
        if (sessionId) sessionId.textContent = user.uid || '-';
        if (userPhoto) userPhoto.src = user.photoURL || '';
        if (userProvider) userProvider.textContent = user.providerData && user.providerData[0] ? user.providerData[0].providerId : '-';
        if (userUid) userUid.textContent = user.uid || '-';
    } else {
        // if-user-logout
        if (loginList) loginList.style.display = 'block';
        if (logoutList) logoutList.style.display = 'none';
        if (username) username.textContent = 'null';
        if (userEmail) userEmail.textContent = 'null';
        if (sessionId) sessionId.textContent = 'null';
        if (userPhoto) userPhoto.src = '';
        if (userProvider) userProvider.textContent = 'null';
        if (userUid) userUid.textContent = 'null';
    }
}

auth.onAuthStateChanged(function(user) {
    updateAuthUI(user);
    if (user) {
        // if-user-login
        console.log('User login:', user.displayName);
    } else {
        // if-user-logout
        console.log('Belum login');
    }
});

// Creative Commons License 2025 diyyo White CC0 1.0 Universal