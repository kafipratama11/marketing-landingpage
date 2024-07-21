const imageUrls = [
      'assets/img/shopee-logo-removebg.png',
      'assets/img/amazon-logo-removebg-preview.png',
      'assets/img/creative-logo-removebg-preview.png',
      'assets/img/deloitte.png',
      'assets/img/pwc.png',
      'assets/img/bca.png',
];

const slides = document.querySelectorAll('.logos-slide');

// Looping melalui setiap elemen 'logos-slide'
slides.forEach(slide => {
    // Looping untuk menambahkan setiap gambar
      imageUrls.forEach(url => {
        // Buat elemen gambar
      const img = document.createElement('img');
      img.src = url;
      img.alt = '';

        // Tambahkan gambar ke dalam container
      slide.appendChild(img);
      });
});