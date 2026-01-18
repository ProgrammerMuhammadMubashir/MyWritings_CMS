"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import ThemeAndFont from "@/components/ThemeAndFont"
export default function Home() {
  const [urls, setUrls] = useState([]);

  const router = useRouter();
  useEffect(() => {
    const f = async () => {
      ThemeAndFont()
      // Array of 11 categories
      const categories = [
        "fashion",
        "news",
        "entertainment",
        "sports",
        "travel",
        "food",
        "nature",
        "technology",
        "art",
        "business",
        "health",
      ];

      
      
      // Map categories to fetch promises
      const fetchPromises = categories.map((category) =>
        fetch(
          `https://pixabay.com/api/?key=51295509-7ce4d49982ceccf7ea8a0bbf3&q=${encodeURIComponent(
            category
          )}&image_type=photo&per_page=25&color=black`
        ),{ next: { revalidate: 3600 }}
      );

      // Run all fetches in parallel
      const responses = await Promise.all(fetchPromises);

      // Parse all JSON responses in parallel
      const data = await Promise.all(responses.map((res) => res.json()));

      // Organize results in an object with category names as keys
      const result = {};
      categories.forEach((category, index) => {
        result[category] = data[index];
      });
      let random=Math.floor(Math.random()*25)
const sepUrls = [
    { 
        title: "Fashion", 
        url: result.fashion.hits[random].webformatURL
    },
    { 
        title: "News", 
        url: result.news.hits[random].webformatURL
    },
    { 
        title: "Entertainment", 
        url: result.entertainment.hits[random].webformatURL
    },
    { 
        title: "Sports", 
        url: result.sports.hits[random].webformatURL
    },
    { 
        title: "Travel", 
        url: result.travel.hits[random].webformatURL
    },
    { 
        title: "Food", 
        url: result.food.hits[random].webformatURL
    },
    { 
        title: "Nature", 
        url: result.nature.hits[random].webformatURL
    },
    { 
        title: "Technology", 
        url: result.technology.hits[random].webformatURL
    },
    { 
        title: "Art", 
        url: result.art.hits[random].webformatURL
    },
    { 
        title: "Business", 
        url: result.business.hits[random].webformatURL
    },
    { 
        title: "Health", 
        url: result.health.hits[random].webformatURL
    },
];
      console.log(result)
      console.log(sepUrls);
      setUrls(sepUrls)
      

    };
    f();
    
  }, []);

  return (
    <>
    <div className={styles.cataContainer}>
     {urls.map((cata, index) => (
  
       <div key={index}  onClick={()=>{router.push(`/blogpost/${cata.title.toLowerCase()}`)}}
       className={styles.cata} 
       style={{
         backgroundImage: `url(${cata.url})`,
         backgroundPosition: 'center',
         backgroundSize: 'cover'
        }}
        >
          <h1 className={styles.headingCard}>
           {cata.title}
          </h1>
        </div>
      ))}
    </div>
    
    </>
  );
}
