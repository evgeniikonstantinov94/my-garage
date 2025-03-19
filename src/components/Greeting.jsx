import { useState } from 'preact/hooks';
// Welcome to Astro! Wondering what to do next? Check out the Astro documentation at https://docs.astro.build
// Don't want to use any of this? Delete everything in this file, the `assets`, `components`, and `layouts` directories, and start fresh.

export default function Greeting({ messages }) {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];

  const [greering, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3>{greering}! Спасибо за ваш визит!</h3>
      <button onClick={() => setGreeting(randomMessage())}>
        Новое приветствие
      </button>
    </div>
  );
}
