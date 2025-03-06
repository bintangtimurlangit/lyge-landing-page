const values = [
  {
    title: "Inovasi",
    description: "Kami terus berinovasi untuk menghadirkan solusi digital terbaik bagi UMKM Indonesia."
  },
  {
    title: "Kemudahan",
    description: "Produk kami dirancang agar mudah digunakan oleh siapa saja, tanpa perlu keahlian teknis khusus."
  },
  {
    title: "Keterjangkauan",
    description: "Kami menyediakan solusi dengan harga yang terjangkau untuk membantu UMKM berkembang."
  },
  {
    title: "Kepercayaan",
    description: "Kami membangun hubungan yang transparan dan terpercaya dengan setiap klien kami."
  }
];

export const AboutValues = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="section-heading mb-16">
          <h2 className="section-title mb-6">
            Nilai-Nilai Yang Kami Pegang
          </h2>
          <p className="section-description">
            Prinsip yang mendasari setiap langkah kami dalam membantu UMKM
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="card bg-white text-center">
              <h3 className="text-xl font-bold mb-4">{value.title}</h3>
              <p className="text-black/60">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 