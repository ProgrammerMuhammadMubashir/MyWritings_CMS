
"use client"
const ThemeAndFont =async () => {
 
const BASE_URL =process.env.NEXT_PUBLIC_API_URL || ""

   const res=await fetch(`${BASE_URL}/api/settingManager`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({msg:"Send data"}),
            })
            const data=await res.json()
            console.log(data)
//Theme and Font Changer
if(data.theme==="Modern"){
  const root = document.documentElement.style;

  // Backgrounds
  root.setProperty('--maindarkbg', 'rgb(2, 6, 23)');
  root.setProperty('--mainlightbg', 'rgb(241, 245, 249)');
  root.setProperty('--bg-dark', 'rgb(2, 6, 23)');
  root.setProperty('--bg-light', 'rgb(241, 245, 249)');

  // Surfaces & Borders
  root.setProperty('--surface', '#020617');
  root.setProperty('--surface-2', '#0b1220');
  root.setProperty('--surface-3', '#0f172a');
  root.setProperty('--border', '#1e293b');

  // Text Colors
  root.setProperty('--text-on-dark', '#e5e7eb');
  root.setProperty('--text-primary', '#f8fafc');
  root.setProperty('--text-muted', '#94a3b8');
  root.setProperty('--text-muted-2', '#cbd5e1');
  root.setProperty('--text-muted-3', '#e2e8f0');
  root.setProperty('--text-on-primary', '#020617');
  root.setProperty('--muted-dark', '#64748b');
  root.setProperty('--muted-4', '#e5e7eb');

  // Primary & Accents
  root.setProperty('--primary', '#38bdf8');
  root.setProperty('--primary-variant', '#7dd3fc');
  root.setProperty('--primary-rgba', 'rgba(56, 189, 248, 0.3)');
  root.setProperty('--primary-shadow', 'rgba(56, 189, 248, 0.45)');
  root.setProperty('--primary-shadow-strong', 'rgba(56, 189, 248, 0.75)');
  root.setProperty('--primary-link', 'rgba(56, 189, 248, 0.9)');

  // Cyan
  root.setProperty('--cyan', '#22d3ee');
  root.setProperty('--cyan-variant', '#06b6d4');
  root.setProperty('--cyan-shadow', 'rgba(34, 211, 238, 0.4)');

  // Accent Blue
  root.setProperty('--accent-blue', '#38bdf8');
  root.setProperty('--accent-blue-15', 'rgba(56, 189, 248, 0.15)');
  root.setProperty('--accent-blue-40', 'rgba(56, 189, 248, 0.4)');
  root.setProperty('--accent-blue-70', 'rgba(56, 189, 248, 0.7)');

  // Categories (Using values to ensure stability)
  root.setProperty('--category-text', '#e5e7eb');
  root.setProperty('--category-border', '#38bdf8');
  root.setProperty('--category-shadow', 'rgba(56, 189, 248, 0.15)');

  // Gradients & Shadows
  root.setProperty('--header-grad', 'linear-gradient(45deg, #020617, #0f172a)');
  root.setProperty('--card-image-grad', 'linear-gradient(135deg, #020617 0%, #0b1f33 100%)');
  root.setProperty('--box-shadow-dark', 'rgba(2, 6, 23, 0.85)');
  root.setProperty('--box-shadow-dark-strong', 'rgba(2, 6, 23, 0.95)');


}
else if(data.theme==="Elegant"){
 
  const root = document.documentElement.style;

  // Backgrounds
  root.setProperty('--maindarkbg', 'rgb(16, 17, 20)');
  root.setProperty('--mainlightbg', 'rgb(238, 235, 228)');
  root.setProperty('--bg-dark', 'rgb(16, 17, 20)');
  root.setProperty('--bg-light', 'rgb(238, 235, 228)');

  // Surfaces & Borders
  root.setProperty('--surface', '#131417');
  root.setProperty('--surface-2', '#1a1c21');
  root.setProperty('--surface-3', '#22252b');
  root.setProperty('--border', '#2f323a');

  // Text Colors
  root.setProperty('--text-on-dark', '#f8f7f4');
  root.setProperty('--text-primary', '#fcfcfa');
  root.setProperty('--text-muted', '#a6a6af');
  root.setProperty('--text-muted-2', '#c2c2c9');
  root.setProperty('--text-muted-3', '#dddddf');
  root.setProperty('--text-on-primary', '#121212');
  root.setProperty('--muted-dark', '#757985');
  root.setProperty('--muted-4', '#eceae4');

  // Primary (Gold Tone) & Accents
  root.setProperty('--primary', '#d4b062');
  root.setProperty('--primary-variant', '#efd48a');
  root.setProperty('--primary-rgba', 'rgba(212, 176, 98, 0.32)');
  root.setProperty('--primary-shadow', 'rgba(212, 176, 98, 0.45)');
  root.setProperty('--primary-shadow-strong', 'rgba(212, 176, 98, 0.7)');
  root.setProperty('--primary-link', 'rgba(212, 176, 98, 0.9)');

  // Cyan (Mapped to Gold for this theme)
  root.setProperty('--cyan', '#d4b062');
  root.setProperty('--cyan-variant', '#b89a52');
  root.setProperty('--cyan-shadow', 'rgba(212, 176, 98, 0.35)');

  // Accent Blue (Mapped to Gold for consistency)
  root.setProperty('--accent-blue', '#d4b062');
  root.setProperty('--accent-blue-15', 'rgba(212, 176, 98, 0.15)');
  root.setProperty('--accent-blue-40', 'rgba(212, 176, 98, 0.4)');
  root.setProperty('--accent-blue-70', 'rgba(212, 176, 98, 0.7)');

  // Categories
  root.setProperty('--category-text', '#f8f7f4');
  root.setProperty('--category-border', '#d4b062');
  root.setProperty('--category-shadow', 'rgba(212, 176, 98, 0.15)');

  // Gradients & Shadows
  root.setProperty('--header-grad', 'linear-gradient(45deg, #101114, #2b2f36)');
  root.setProperty('--card-image-grad', 'linear-gradient(135deg, #1b1e23 0%, #343842 100%)');
  root.setProperty('--box-shadow-dark', 'rgba(0, 0, 0, 0.45)');
  root.setProperty('--box-shadow-dark-strong', 'rgba(0, 0, 0, 0.7)');

}
else if(data.theme==="Default"){
  
  const root = document.documentElement.style;

  // Backgrounds
  root.setProperty('--maindarkbg', 'rgb(34, 34, 34)');
  root.setProperty('--mainlightbg', 'rgb(204, 204, 204)');
  root.setProperty('--bg-dark', 'rgb(34, 34, 34)');
  root.setProperty('--bg-light', 'rgb(204, 204, 204)');

  // Surfaces & Borders
  root.setProperty('--surface', '#000000');
  root.setProperty('--surface-2', '#111111');
  root.setProperty('--surface-3', '#0d0d0d');
  root.setProperty('--border', '#1a1a1a');

  // Text Colors
  root.setProperty('--text-on-dark', 'whitesmoke');
  root.setProperty('--text-primary', '#ffffff');
  root.setProperty('--text-muted', '#aaaaaa');
  root.setProperty('--text-muted-2', '#cccccc');
  root.setProperty('--text-muted-3', '#dddddd');
  root.setProperty('--text-on-primary', '#000000');
  root.setProperty('--muted-dark', '#555555');
  root.setProperty('--muted-4', '#e5e7eb');

  // Primary (Deep Blue)
  root.setProperty('--primary', '#007bff');
  root.setProperty('--primary-variant', '#5bb3ff');
  root.setProperty('--primary-rgba', 'rgba(0, 123, 255, 0.4)');
  root.setProperty('--primary-shadow', 'rgba(0, 123, 255, 0.5)');
  root.setProperty('--primary-shadow-strong', 'rgba(0, 123, 255, 0.7)');
  root.setProperty('--primary-link', 'rgba(0, 123, 255, 0.7)');

  // Cyan & Accent Blue
  root.setProperty('--cyan', '#00bfff');
  root.setProperty('--cyan-variant', '#009acd');
  root.setProperty('--cyan-shadow', 'rgba(0, 191, 255, 0.4)');
  root.setProperty('--accent-blue', '#00bfff');
  root.setProperty('--accent-blue-15', 'rgba(0, 191, 255, 0.15)');
  root.setProperty('--accent-blue-40', 'rgba(0, 191, 255, 0.4)');
  root.setProperty('--accent-blue-70', 'rgba(0, 191, 255, 0.7)');

  // Category Logic
  root.setProperty('--category-text', 'whitesmoke'); // points to text-on-dark
  root.setProperty('--category-border', '#00bfff'); // points to accent-blue
  root.setProperty('--category-shadow', 'rgba(0, 191, 255, 0.15)'); // points to accent-blue-15

  // Gradients & Shadows
  root.setProperty('--header-grad', 'linear-gradient(45deg, #1a1a1a, #4d4d4d)');
  root.setProperty('--card-image-grad', 'linear-gradient(135deg, #0f2027 0%, #203a43 100%)');
  root.setProperty('--box-shadow-dark', 'rgba(0, 0, 0, 0.5)');
  root.setProperty('--box-shadow-dark-strong', 'rgba(0, 0, 0, 0.7)');

}

      
}

export default ThemeAndFont