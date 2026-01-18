"use client"
import pageStyles from "./page.module.css";
import {useEffect} from "react"
import { useRouter } from "next/navigation";
import ThemeAndFont from "@/components/ThemeAndFont"
export default function AboutPage() {
  // useEffect(() => {
    
  
  //  ThemeAndFont()
  // }, [])
  
  const router=useRouter()
  const team = [
    {
      name: "Muhammad Mubashir",
      role: "Full Stack Web Developer",
      bio: "One Man Army",
    },
    {
      name: "Muhammad Mubashir",
      role: "Full Stack Web Developer",
      bio: "One Man Army",
    },
   
  ];

  return (
    <main className={pageStyles.main}>
       <button
      className={pageStyles.backButton}
      onClick={() => router.back()}
    >
      <span className={pageStyles.arrow}>←</span> Back
    </button>
      {/* HEADER */}
      <section className={pageStyles.header}>
        <h1 className={pageStyles.heading}>About Us</h1>
        <p className={pageStyles.subtitle}>
          We create modern, fast, and scalable CMS applications with a
          focus on clean design and great user experience.
        </p>
      </section>

      {/* MISSION / VISION */}
      <section className={pageStyles.mission}>
        <div className={pageStyles.missionCard}>
          <h2>Our Mission</h2>
          <p>
            To empower content creators with tools that make publishing,
            managing, and sharing content effortless and enjoyable.
          </p>
        </div>
        <div className={pageStyles.missionCard}>
          <h2>Our Vision</h2>
          <p>
            To be the leading platform for building modern web experiences
            with performance, flexibility, and style.
          </p>
        </div>
      </section>

      {/* TEAM */}
      <section className={pageStyles.teamSection}>
        <h2 className={pageStyles.sectionHeading}>Meet the Team</h2>
        <div className={pageStyles.teamGrid}>
          {team.map((member, idx) => (
            <div key={idx} className={pageStyles.teamCard}>
              <div className={pageStyles.teamAvatar} onClick={()=>router.push('/AdminLogin')}>
                {/* Optional avatar image */}
                <span>{member.name.charAt(0)}</span>
              </div>
              <h3 className={pageStyles.teamName} >{member.name}</h3>
              <p className={pageStyles.teamRole}>{member.role}</p>
              <p className={pageStyles.teamBio}>{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
