import { CertificateCard } from "@/components/sub/certificate-card";
import { CERTIFICATES } from "@/constants";

export const Certificates = () => {
  return (
    <section
      id="certificates"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Certificates
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        {CERTIFICATES.map((certificate) => (
          <CertificateCard
            key={certificate.title}
            src={certificate.image}
            title={certificate.title}
            link={certificate.link}
          />
        ))}
      </div>
    </section>
  );
};
