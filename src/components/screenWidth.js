import { useState, useEffect } from 'react';
export default function ScreenWidth() {

  //1. useEffectを使って、画面の横幅のpx数を表示するアプリを作成しましょう。
  //ウィンドウサイズが変更されるたびに、メッセージが更新され、新しいウィンドウサイズを表示してください。

  const [width, setWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // コンポーネントのアンマウント時にイベントリスナーを削除
    return () => window.removeEventListener('resize', handleResize);
  }, []); // 空の依存配列を渡して、コンポーネントのマウント時にのみ実行されるようにする

    
  return (
    <div>
      <p>ウィンドウの横幅: {width}px</p>
    </div>
  );


}