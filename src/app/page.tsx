import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  const handleShare = async () => {
    try {
      await navigator.share({
        title: 'Share Example',
        text: 'Check out this amazing website!',
        url: 'https://www.example.com',
      });
      console.log('Shared successfully');
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };
  return (
    <>
      <button onClick={handleShare}></button>
    </>
  )
}
