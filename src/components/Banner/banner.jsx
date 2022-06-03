export default function Banner(props){
    return <div className="hero">
    <section className="hero-content">
      <h2 className="sr-only">{props.title}</h2>
      <p className="subtitle">{props.text1}</p>
      <p className="subtitle">{props.text2}</p>
      <p className="subtitle">{props.text3}</p>
      <p className="text">{props.text4}</p>
    </section>
  </div>
} 