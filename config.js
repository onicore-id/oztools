const CONFIG = {
  company: "OZTOOLS",
  tagline: "PREDIKSI",
  copyright: "OZTOOLS",
  rtpUrl: "https://rtp.example.com",

  credentials: [
    { username: "admin", password: "admin123" }
  ],

  sites: [
    { id: "oz1", name: "OZ1", color: "#3B82F6", gradient: "linear-gradient(135deg,#1e3a5f,#0d1f3c)", logo: "https://i.ibb.co/sJy4CtMm/17-JSlf-Pp.png" },
    { id: "oz2", name: "OZ2", color: "#10B981", gradient: "linear-gradient(135deg,#1a3d2e,#0a2018)", logo: null },
    { id: "oz3", name: "OZ3", color: "#8B5CF6", gradient: "linear-gradient(135deg,#2d1b4e,#16092a)", logo: null },
    { id: "oz4", name: "OZ4", color: "#F59E0B", gradient: "linear-gradient(135deg,#3d2d0a,#1e1605)", logo: null },
    { id: "oz5", name: "OZ5", color: "#F43F5E", gradient: "linear-gradient(135deg,#3d0f1a,#1e070d)", logo: null }
  ],

  pasaran: [
    "ALASKA","ARIZONA LOTTO","ATLANTIC","BEIJING","BILBAO LOTTO",
    "BULLSEYE","CALIFORNIA","CAMBODIA","CAROLINADAY","CAROLINAEVE",
    "CHINA","DUBAI","FLORIDAEVE","HANOI","HAWAILOTTERY",
    "HONGKONG LOTTO","JEPANG","KANSAS","KENTUCKYEVE",
    "KINGKONG 4D P1","KINGKONG 4D P2","LYONLOTTERY","MANILA",
    "MOSCOW","NEWYORKEVE","OREGON03","OREGON06","OREGON09",
    "PCSO","PHUKET","PORTO4D","SEOUL","SEVILLA","SHANGHAI",
    "SINGAPORE","SOUTHAMPTON","SYDNEY LOTTO","TAINAN","TAIWAN",
    "TOKYO","TORONTO LOTTO","Toto Macau P1","Toto Macau P2",
    "Toto Macau P3","Toto Macau P4","Toto Macau P5","Toto Macau P6"
  ],

  shio: [
    { name: "Tikus",   img: "https://i.ibb.co/KpdbkkL2/Tikus.png" },
    { name: "Kerbau",  img: "https://i.ibb.co/0j9pgx2b/Kerbau.png" },
    { name: "Harimau", img: "https://i.ibb.co/qFRVqMy7/Harimau.png" },
    { name: "Kelinci", img: "https://i.ibb.co/Hw7hrNQ/Kelinci.png" },
    { name: "Naga",    img: "https://i.ibb.co/tM2DKkQL/Naga.png" },
    { name: "Ular",    img: "https://i.ibb.co/LzcTsQNP/Ular.png" },
    { name: "Kuda",    img: "https://i.ibb.co/Y43MPgqp/Kuda.png" },
    { name: "Kambing", img: "https://i.ibb.co/qMBwCpNX/Kambing.png" },
    { name: "Monyet",  img: "https://i.ibb.co/3yMh1mhG/Monyet.png" },
    { name: "Ayam",    img: "https://i.ibb.co/C3PzH8vw/Ayam.png" },
    { name: "Anjing",  img: "https://i.ibb.co/4ZGYBBrd/Anjing.png" },
    { name: "Babi",    img: "https://i.ibb.co/Hp4GV9Qx/Babi.png" }
  ],

  pasaranFlag: {
    "ALASKA": "🇺🇸", "ARIZONA LOTTO": "🇺🇸", "ATLANTIC": "🇺🇸",
    "BEIJING": "🇨🇳", "BILBAO LOTTO": "🇪🇸", "BULLSEYE": "🇬🇧",
    "CALIFORNIA": "🇺🇸", "CAMBODIA": "🇰🇭", "CAROLINADAY": "🇺🇸",
    "CAROLINAEVE": "🇺🇸", "CHINA": "🇨🇳", "DUBAI": "🇦🇪",
    "FLORIDAEVE": "🇺🇸", "HANOI": "🇻🇳", "HAWAILOTTERY": "🇺🇸",
    "HONGKONG LOTTO": "🇭🇰", "JEPANG": "🇯🇵", "KANSAS": "🇺🇸",
    "KENTUCKYEVE": "🇺🇸", "KINGKONG 4D P1": "🇭🇰", "KINGKONG 4D P2": "🇭🇰",
    "LYONLOTTERY": "🇫🇷", "MANILA": "🇵🇭", "MOSCOW": "🇷🇺",
    "NEWYORKEVE": "🇺🇸", "OREGON03": "🇺🇸", "OREGON06": "🇺🇸",
    "OREGON09": "🇺🇸", "PCSO": "🇵🇭", "PHUKET": "🇹🇭",
    "PORTO4D": "🇵🇹", "SEOUL": "🇰🇷", "SEVILLA": "🇪🇸",
    "SHANGHAI": "🇨🇳", "SINGAPORE": "🇸🇬", "SOUTHAMPTON": "🇬🇧",
    "SYDNEY LOTTO": "🇦🇺", "TAINAN": "🇹🇼", "TAIWAN": "🇹🇼",
    "TOKYO": "🇯🇵", "TORONTO LOTTO": "🇨🇦",
    "Toto Macau P1": "🇲🇴", "Toto Macau P2": "🇲🇴", "Toto Macau P3": "🇲🇴",
    "Toto Macau P4": "🇲🇴", "Toto Macau P5": "🇲🇴", "Toto Macau P6": "🇲🇴"
  },

  hastag: {
    "CAMBODIA": {
      prediksi: "#prediksikamboja #prediksitogelcambodia #togelhariinikamboja #totojitukamboja #prediksicambodiahariini #totojitucambodia #masterprediksicambodiahariini #prediksikambojahariini #kambojahariinitogel #prediksicambodia #prediksiangkakeluarkambojahariini #prediksikambojaterbaik #prediksijitucambodia",
      keluaran: "#angkakeluarcambodia #pengeluarancambodia #togelkamboja #pengeluarankambojahariini #keluarankambojahariini #angkakeluarkambojahariini #togelkambojahariini #resultkambojahariini #keluarankamboja #keluarancambodia"
    },
    "SYDNEY": {
      prediksi: "#prediksisydney #prediksitogelsdysney #togelsydneyhariini #totojitusydney #prediksisydneyhariini #masterprediksisydney #prediksiangkasydney #prediksisydneyterbaik",
      keluaran: "#angkakeluarsydney #pengeluaransydney #togelsydney #keluaransydneyhariini #resultsydneyhariini #angkakeluarsydneyhariini #togelsydneyhariini"
    },
    "SINGAPORE": {
      prediksi: "#prediksisingapura #prediksitogelsgp #togelsgphariini #totojitusgp #prediksisgphariini #masterprediksitogel #prediksisgp #prediksitogelhariinisgp",
      keluaran: "#angkakeluarsgp #pengeluaransgp #togelsgp #keluaransgphariini #resultsgphariini #angkakeluarsgphariini #togelsingapurahariini"
    },
    "TAIWAN": {
      prediksi: "#prediksitaiwan #prediksitogeltwn #togeltaiwanhariini #totojitutaiwan #prediksitaiwanhariini #masterprediksitaiwan #prediksiangkataiwanterbaik",
      keluaran: "#angkakeluartaiwan #pengeluarantaiwan #togeltaiwan #keluarantaiwanhariini #resulttaiwanhariini #togeltaiwanhariini"
    },
    "HONGKONG": {
      prediksi: "#prediksihongkong #prediksitogelkong #togelhkhariini #totojituhk #prediksihkhariini #masterprediksihk #prediksiangkakeluarhkhariini #prediksihkterbaik",
      keluaran: "#angkakeluarhk #pengeluaranhk #togelhk #keluaranhkhariini #resulthkhariini #angkakeluarhkhariini #togelhongkonghariini"
    },
    "MACAU": {
      prediksi: "#prediksimacau #prediksitogelkong #togelmacauhariini #totojitumacau #prediksimacauhariini #masterprediksimacau #prediksiangkakeluarmacauhariini #prediksimacauterbaik",
      keluaran: "#angkakeluarmacau #pengeluaranmacau #togelmacau #keluaranmacauhariini #resultmacauhariini #togelmacauhariini"
    },
    "SLOT": {
      prediksi: "#rtpslot #slotgacor #slotgacorhari #bocoran #bocoranjamgacor #slothariini #jamgacorslot #polaslotonline #slotonline",
      keluaran: "#rtpslotgacor #slotgacormalam #slotgacorpagi #bocoranbocoran #prediksipolaslot #jamdingdonggacor"
    }
  }
};
