import './style.css'
import { Cards } from './ts/card'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
 <main>
  
 <div id="card--container">
 
 </div>
 
 </main>
`

// setupCounter(document.querySelector<HTMLButtonElement>('#card')!)
Cards(document.getElementById("card--container") as HTMLElement);
