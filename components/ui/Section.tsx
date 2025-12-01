import React from "react";
interface SectionProps {
  children: React.ReactNode;
}

const Section = ({ children }: SectionProps) => {
  return (
    <section className="max-w-[95%] lg:max-w-[85%] xl:max-w-[70%] mx-auto lg:px-4 pt-20 lg:pt-30 pb-10 lg:pb-0">
      {children}
    </section>
  );
};

export default Section;
