let paragraphs = [
  "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium consectetur amet excepturi quas officiis minus, nisi beatae totam mollitia a consequuntur voluptate itaque nemo reiciendis, explicabo rem, expedita exercitationem sit? Delectus sapiente numquam incidunt possimus atque laboriosam consequuntur quidem animi.",

  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis error nemo dolorem accusamus esse dolor maiores earum in accusantium dicta molestiae reprehenderit expedita iusto omnis praesentium, qui harum ab! Autem?",

  "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nam aut quasi, omnis consequatur nisi, possimus culpa facere atque beatae doloremque ex cum explicabo ullam? Libero nisi aperiam dicta voluptas.",

  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis error nemo dolorem accusamus esse dolor maiores earum in accusantium dicta molestiae reprehenderit expedita iusto omnis praesentium, qui harum ab! Autem?",

  "maiores earum in accusantium dicta molestiae reprehenderit expedita iusto omnis praesentium, qui harum ab Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nam aut quasi, omnis consequatur",

  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis error nemo dolorem accusamus esse dolor maiores earum in accusantium dicta molestiae reprehenderit expedita iusto omnis praesentium, qui harum ab! Autem?",

  `Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé chocolate cake pastry brownie. Oat cake halvah sweet roll cotton candy croissant lollipop. Macaroon tiramisu chocolate bar candy candy carrot cake jelly sweet. Gummies croissant macaroon dessert. Chocolate cake dragée pie.`,
  `Next level tbh everyday carry, blog copper mug forage kitsch roof party pickled hammock kale chips tofu. Etsy shoreditch 8-bit microdosing, XOXO viral butcher banh mi humblebrag listicle woke bicycle rights brunch before they sold out ramps. Twee shabby chic taiyaki flannel, enamel pin venmo vape four loko. Hexagon kale chips typewriter kitsch 8-bit organic plaid small batch keffiyeh ethical banh mi narwhal echo park cronut.`,

  `Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.`,


  `Cat gets stuck in tree firefighters try to get cat down firefighters get stuck in tree cat eats firefighters' slippers kitty power ignore the squirrels, you'll never catch them anyway for what a cat-ass-trophy! or purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table. Pretend you want to go out but then don't bite off human's toes, yet disappear for four days and return home with an expensive injury; bite the vet so catch eat throw up catch eat throw up bad birds. `,


  `This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Anyhoo, your net-suits will allow you to experience Fry's worm infested bowels as if you were actually wriggling through them.
I just told you! You've killed me! Fry! Quit doing the right thing, you jerk! Michelle, I don't regret this, but I both rue and lament it. Morbo can't understand his teleprompter because he forgot how you say that letter that's shaped like a man wearing a hat.`,


  `Airedale hard cheese mozzarella. Pecorino melted cheese port-salut emmental babybel cheese and wine melted cheese manchego. Everyone loves blue castello everyone loves fromage cheese slices airedale cheddar cream cheese. Bavarian bergkase who moved my cheese halloumi port-salut gouda jarlsberg ricotta rubber cheese. Stinking bishop smelly cheese brie.`,


  `Salvia glossier subway tile, leggings mustache YOLO semiotics chia. Pitchfork tbh af blog church-key meggings vaporware PBR&B master cleanse post-ironic man bun pabst mustache letterpress synth. Snackwave raw denim godard, 3 wolf moon shaman offal kitsch unicorn live-edge selvage schlitz fashion axe vaporware drinking vinegar prism. Shabby chic tacos artisan, chambray chicharrones cardigan leggings typewriter af pop-up williamsburg meditation PBR&B viral. You probably haven't heard of them DIY jean shorts subway tile fashion axe bushwick kitsch tumeric cloud bread vaporware freegan franzen pork belly chicharrones banh mi.`,
];

let input = document.getElementById("input");
let button = document.getElementById("button");
let result = document.getElementById("result");

button.addEventListener("click", (e) => {
  e.preventDefault();
  let inn = parseInt(input.value);
  pv = Math.floor(Math.random() * paragraphs.length);
  if (isNaN(inn) || inn >12 || inn < 0) {
    result.innerHTML = `<p> ${paragraphs[pv]}</p>`;
    // console.log(paragraphs[pv]);
  } else {
    let tepttext = paragraphs.slice(0, inn);
  
    tepttext = tepttext
      .map((item) => {
        return `<p class='result'> ${item} </p>`;
      })
      .join("");
    result.innerHTML = tepttext;
  }
});
