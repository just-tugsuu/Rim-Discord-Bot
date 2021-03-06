const fetch = require('node-fetch');

module.exports = {
    async fetchData(api) {
        const res = await fetch(api);
        if(!res.ok) {
            const message = `Error has occured during fetch ${res.status}`
            throw new Error(message);
        }
        const data = await res.json();
        return data;
    },
    
    thumbnail(arr) {
        switch(arr[0]) {
          case 'javascript': return 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png';
          case 'python': return 'https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png';
          case 'java': return 'https://1000logos.net/wp-content/uploads/2020/09/Java-Logo-500x313.png';
          case 'rust': return 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Rust_programming_language_black_logo.svg/2048px-Rust_programming_language_black_logo.svg.png';
          case 'sql': return 'https://cdn.icon-icons.com/icons2/1502/PNG/512/officedatabase_103574.png';
          case 'c': return 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png';
          case 'csharp': return 'https://cdn.icon-icons.com/icons2/2415/PNG/512/csharp_original_logo_icon_146578.png';
        }
    },

    rank(honor){
        if(honor >= 0 && honor < 20) {
            return `You need ${20 - honor} ` + "scores for level up to `7kyu`";
        }
        else if (honor >= 20 && honor < 76) {
            return `You need ${76 - honor} ` + "scores for level up to `6kyu`";
        }
        else if(honor >= 76 && honor < 229) {
            return `You need ${229 - honor} ` + "scores for level up to `5kyu`";
        }
        else if (honor >= 229 && honor < 643) {
            return `You need ${643 - honor} ` + "scores for level up to `4kyu`";
        }
        else if (honor >= 643 && honor < 1768) {
            return `You need ${1768 - honor} ` + "scores for level up to `3kyu`";
        }
        else if (honor >= 1768 && honor < 4829) {
            return `You need ${4829 - honor} ` + "scores for level up to `2kyu`";
        }
        else if (honor >= 4829 && honor < 13147) {
            return `You need ${13147 - honor} ` + "scores for level up to `1kyu`";
        }
        else if (honor >= 13147 && honor < 35759) {
            return `You need ${35759 - honor} ` + "scores for level up to `1dan`";
        }
    }
}
