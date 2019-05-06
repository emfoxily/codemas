const sayings = [
  "Ahhh... we meet again.",
  "AND... THAT HAPPENED.",
  "At night the sporks pick on me.",
  "At night, Sporks use me as a pillow.",
  "Be gentle.",
  "BEST WINGMAN EVER.",
  "Bike tires scare me.",
  "Can I drive?",
  "Can I ride shotgun?",
  "Chalupacabra: Legendary Beast",
  "Consider yourself warned.",
  "Dibs on the taco.",
  "Do you add sauce left to right, or right to left?",
  "Does the Spork go on the right or left?",
  "DON'T WAIT UP",
  "Friend request accepted.",
  "Have you people call my people.",
  "Hello.",
  "Help! I can't tell where I am. It's dark and I can hear laughing.",
  "Help! I'm a genie trapped in a sauce packet.",
  "How many of these do you already have in your glove compartment? I collect straws.",
  "I GOT THIS.",
  "I had so much fun!",
  "I love you, I'm just not in love with you.",
  "I M A HOT T R U 2?",
  "I saw the way you looked at Mild. It's ok, I forgive you.",
  "I see how you look at other sauces.",
  "I spontaneously bust out in Ninja moves.",
  "I WILL IF YOU WILL...",
  "If you never do, you'll never know.",
  "If you throw this, would it be a flying saucer?",
  "I'm a people packet.",
  "I'm in good hands now.",
  "I'm just doing this between films.",
  "I'm not just another pretty face.",
  "I'm taking the day off. See next packet.",
  "I'm up for it if you are.",
  "I'm with the band.",
  "Is it me, or is it hot in here?",
  "It only gets hotter from here.",
  "It was Fire's idea...",
  "It's okay, you can say it. I love you too.",
  "I've been through fire for you!",
  "Ketchup? Puh-leese.",
  "Live life one sauce packet at a time.",
  "Make a wish.",
  "Meet me tomorrow: same time, same place.",
  "Mild sauce...the new ketchup.",
  "Mmmm...sauce.",
  "My other taco is a Chalupa.",
  "My sauce is an honor student at Taco State.",
  "Nice palm. I read a great deal of pleasure in your future.",
  "Not it!",
  "Not to be used as a floatation device.",
  "Open quickly...I'm burning up in here.",
  "Pick me! Pick me!",
  "Please turn me over so I can finish tanning my back.",
  "Polly want a taco?",
  "Promise you'll text me in the morning.",
  "Roadtrip?",
  "Save a bun. Eat a taco.",
  "Scratch & Sniff: Gotcha!",
  "Single hot sauce seeking friendship, maybe more.",
  "Tah Dah!",
  "Thanks for rescuing me, Mild was getting on my nerves.",
  "The feeling is mutual.",
  "The official sauce of Taco Bell.",
  "The road to mediocrity is littered with empty ketchup packets.",
  "This is gonna end with you eating me, isn't it?",
  "This space for rent. Inquire within.",
  "Use your stomach, not your mind.",
  "Warning! You're about to make a taco very happy.",
  "What are your other two wishes?",
  "When I grow up, I want to be a waterbed.",
  "Where are you taking me?",
  "Where have you been all my life?",
  "Why order a taco when you can ask it politely?",
  "Will you marry me?",
  "Will you scratch my back?",
  "Willing to relocate.",
  "You gonna finish that?",
  "You had me at taco.",
  "You have chosen wisely!",
  "YOU'RE BUYING!"
];

class Saying extends React.Component {
  render() {
    return (
      <div className="saying">
        {this.props.saying}
      </div>
    )
  }
}

class HotSauce extends React.Component {
  constructor(props) {
    super(props);
    this.randomSaying = this.randomSaying.bind(this);
    this.state = {
      saying: sayings[Math.floor(Math.random() * sayings.length)],
      clicked: false
    }
  }
  randomSaying = () => {
    console.log(this.state.random);
    this.setState({
      random: sayings[Math.floor(Math.random() * sayings.length)],
      clicked: true
    })
  }
  render() {
    return (
      <div className="generator">
        <img src="./public/images/hotsauce.png" alt=""/>
        <div className="textBox">
          {this.state.clicked ? this.state.random : this.state.saying}
        </div>
          <br/>
        <button onClick={this.randomSaying}>
          random
        </button>
        <br />
        <button>
          <a href="/">back to emfoxily</a>
        </button>
      </div>
    )
  }
}

ReactDOM.render(
  <section>
    <HotSauce></HotSauce>
  </section>,
  document.querySelector('main')
);
