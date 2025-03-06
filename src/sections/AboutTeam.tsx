import Image from "next/image";

const team = [
  {
    name: "Yehezkiel Lyzander",
    role: "CEO & Founder",
    image: "/team/yehezkiellyzander.jpeg"
  },
  {
    name: "Abi Fadli",
    role: "Head of Business Development",
    image: "/team/abifadli.jpeg"
  },
  {
    name: "Bintang Timurlangit",
    role: "Head of Product",
    image: "/team/bintangtimurlangit.png"
  },
  {
    name: "Christoper John",
    role: "Frontend Developer",
    image: "/team/christoperjohn.jpeg"
  },
  {
    name: "Richard Tandean",
    role: "Backend Developer",
    image: "/team/richardtandean.jpeg"
  }
];

export const AboutTeam = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="section-heading mb-16">
          <h2 className="section-title mb-6">
            Tim Kami
          </h2>
          <p className="section-description">
            Bertemu dengan orang-orang yang berdedikasi untuk memajukan UMKM Indonesia
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {team.map((member, index) => (
            <div key={index} className="card bg-white text-center p-6">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-100">
                <Image 
                  src={member.image} 
                  alt={member.name}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold mb-1">{member.name}</h3>
              <p className="text-black/60 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 