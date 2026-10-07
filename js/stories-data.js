/* ============================================================
   Little Lights Bible Stories — story data + artwork icons
   Used by index.html and story.html
   ============================================================ */

const ICONS = {
  sun: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" aria-hidden="true">
    <circle cx="32" cy="34" r="12"/><path d="M32 8v6M32 54v4M8 34h6M50 34h6M15 17l4 4M45 47l4 4M49 17l-4 4M19 47l-4 4"/>
    <path d="M6 56h52"/></svg>`,

  boat: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M8 40h48l-6 12H14L8 40z"/><path d="M18 40V26l22 6V14l10 6v14"/><path d="M6 58c4-3 8-3 12 0s8 3 12 0 8-3 12 0 8 3 12 0"/></svg>`,

  coat: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M22 10l-12 8 5 10 5-3v25h24V35l5 3 5-10-12-8-6 5h-8l-6-5z"/>
    <path d="M32 15v35M24 30h5M35 30h5M24 40h5M35 40h5"/></svg>`,

  waves: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" aria-hidden="true">
    <path d="M6 24c5-5 10-5 15 0s10 5 15 0 10-5 15 0 4 4 7 4"/>
    <path d="M6 36c5-5 10-5 15 0s10 5 15 0 10-5 15 0 4 4 7 4"/>
    <path d="M6 48c5-5 10-5 15 0s10 5 15 0 10-5 15 0 4 4 7 4"/></svg>`,

  sling: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M26 56L34 30"/><path d="M34 30L18 12"/><path d="M34 30L48 10"/>
    <path d="M18 12l-6-4M48 10l6-5"/>
    <circle cx="34" cy="38" r="5" fill="currentColor" stroke="none"/>
    <path d="M52 50l4 4M46 56l2 5"/></svg>`,

  fish: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M6 32c8-12 20-16 30-10 6 3.6 10 10 10 10s-4 6.4-10 10c-10 6-22 2-30-10z"/>
    <path d="M46 32l12-10v20L46 32z"/><circle cx="20" cy="28" r="2.4" fill="currentColor" stroke="none"/>
    <path d="M30 24c2 4 2 12 0 16"/></svg>`,

  lion: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <circle cx="32" cy="32" r="16"/><path d="M32 6v6M32 52v6M6 32h6M52 32h6M14 14l4 4M46 46l4 4M50 14l-4 4M18 46l-4 4"/>
    <circle cx="26" cy="29" r="2" fill="currentColor" stroke="none"/><circle cx="38" cy="29" r="2" fill="currentColor" stroke="none"/>
    <path d="M28 38c2.5 2.5 5.5 2.5 8 0"/></svg>`,

  wheat: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M32 58V24"/><path d="M32 24c0-6 5-11 11-11 0 6-5 11-11 11zM32 24c0-6-5-11-11-11 0 6 5 11 11 11z"/>
    <path d="M32 36c0-6 5-11 11-11 0 6-5 11-11 11zM32 36c0-6-5-11-11-11 0 6 5 11 11 11z"/>
    <path d="M32 48c0-6 5-11 11-11 0 6-5 11-11 11zM32 48c0-6-5-11-11-11 0 6 5 11 11 11z"/></svg>`,

  star: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M32 6l7.5 15.5L56 24l-12 11.5L46.5 52 32 44l-14.5 8L20 35.5 8 24l16.5-2.5L32 6z"/>
    <path d="M32 16v14M32 38v4M24 30h16"/></svg>`,

  storm: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M18 40a9 9 0 0 1 1-17.9A13 13 0 0 1 44 24a8 8 0 0 1 2 15.9"/>
    <path d="M34 36l-8 12h8l-4 10"/><path d="M8 56c4-3 8-3 12 0s8 3 12 0 8-3 12 0 8 3 12 0"/></svg>`,

  heart: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M32 54S8 40 8 24a12 12 0 0 1 24-4 12 12 0 0 1 24 4c0 16-24 30-24 30z"/>
    <path d="M24 30h6l2-5 4 10 2-5h6"/></svg>`,

  sheep: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M18 40a8 8 0 0 1-2-15.6A9 9 0 0 1 34 20a8 8 0 0 1 14 4 8 8 0 0 1-2 15.6"/>
    <path d="M18 40h28a6 6 0 0 1 0 12H24l-6-4-4-4a5 5 0 0 1 4-8z"/>
    <path d="M22 44v8M40 44v8"/><circle cx="46" cy="30" r="2" fill="currentColor" stroke="none"/></svg>`,

  bread: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M10 44c0-12 10-22 22-22s22 10 22 22c0 4-3 6-7 6H17c-4 0-7-2-7-6z"/>
    <path d="M24 26c0 6-2 10-6 14M34 24c0 6-2 10-6 14M44 28c0 6-2 10-6 14"/>
    <path d="M14 34h36"/></svg>`,

  tree: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M32 58V36"/><path d="M32 40l-8-8M32 46l8-8"/>
    <path d="M32 6c8 0 14 6 14 13s-6 12-12 12c1 6-3 11-9 11-7 0-12-5-12-12S13 19 20 15c1-5 6-9 12-9z"/></svg>`,

  palm: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M32 58V30"/>
    <path d="M32 30C24 22 14 22 8 26c8 0 16 2 24 8zM32 30c8-8 18-8 24-4-8 0-16 2-24 8zM32 30c-4-10-2-20 4-26-2 8-2 18-4 26zM32 30c6-6 16-8 24-6-8 2-16 4-24 6z"/></svg>`,

  tomb: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M10 56V30a22 22 0 0 1 44 0v26"/><path d="M10 56h44"/>
    <path d="M40 56V40a8 8 0 0 1 16 0v16"/><path d="M18 56V42a8 8 0 0 1 16 0v14"/>
    <circle cx="52" cy="20" r="5"/></svg>`
};

const STORIES = [
  /* ---------------- OLD TESTAMENT ---------------- */
  {
    id: "creation",
    title: "The Story of Creation",
    testament: "Old Testament",
    category: "Beginning",
    icon: "sun",
    colors: ["#F6B93B", "#F97316"],
    minutes: 4,
    age: "4–8",
    ref: "Genesis 1:1–2:3",
    verse: "In the beginning God created the heavens and the earth.",
    verseRef: "Genesis 1:1",
    summary: "God made everything — the light, the land, the animals, and people — and it was very good.",
    body: [
      "Long, long ago, before there were any mountains or oceans or little children running around, there was only God. And God had a wonderful plan in His heart.",
      "God spoke, and light appeared! “Let there be light,” He said, and the darkness ran away. Then God made the sky, the seas, and the dry land. He planted trees with sweet fruit and flowers in every color you can imagine.",
      "Next, God filled the sky with twinkling stars and made the sun to shine in the day and the moon to glow at night. He made fish to splash in the sea and birds to sing in the trees.",
      "Then God made animals — big, stomping elephants, fast, hopping rabbits, and silly, wiggly puppies. Finally, God made people. He made Adam and Eve in His very own image, so they could love Him and take care of the world.",
      "God looked at everything He had made, and He was so happy. “It is very good,” He said. And on the seventh day, God rested."
    ],
    lesson: "Everything we see was made by God on purpose, and He made you on purpose too. We can take care of His beautiful world and say thank you every day.",
    questions: ["What did God make on the very first day?", "Can you name three animals God made?", "Why do you think God said making people was “very good”?"],
    activity: "Go outside and find five things God made. Thank Him out loud for each one!"
  },
  {
    id: "noahs-ark",
    title: "Noah and the Giant Ark",
    testament: "Old Testament",
    category: "Adventure",
    icon: "boat",
    colors: ["#4AA3DF", "#2B7CB8"],
    minutes: 5,
    age: "4–8",
    ref: "Genesis 6–9",
    verse: "I have set my rainbow in the clouds.",
    verseRef: "Genesis 9:13",
    summary: "God asked Noah to build a huge boat, saved his family and the animals, and promised with a rainbow never to flood the whole earth again.",
    body: [
      "Noah was a kind man who loved God very much, even when nobody else did. So when God had a big plan, He chose Noah for the job.",
      "“Build a boat,” God told Noah, “even though there is no sea nearby!” It sounded silly, but Noah trusted God. With his family helping, he hammered and worked for years and years until the giant ark was finished.",
      "Then the animals came — two by two! Lions, giraffes, zebras, tiny mice, and every bird you can name. Noah welcomed them all aboard, along with his family. Then God shut the door.",
      "The rain came down, and down, and down. It poured for forty days and forty nights! But inside the ark, everyone and every animal was safe and dry.",
      "Finally, the rain stopped. Noah sent out a dove, and it came back with a fresh green leaf. Soon everyone walked out into a brand-new, sparkly world. God set a beautiful rainbow across the sky as His promise."
    ],
    lesson: "When we trust and obey God, even when it doesn't make sense, He takes care of us. His promises are always true.",
    questions: ["How long did it rain?", "What bird brought back the green leaf?", "What did God paint in the sky as a promise?"],
    activity: "Draw a big rainbow with all the colors, and write God's promise on it: “I am with you.”"
  },
  {
    id: "josephs-coat",
    title: "Joseph and His Colorful Coat",
    testament: "Old Testament",
    category: "Family",
    icon: "coat",
    colors: ["#F472B6", "#DB2777"],
    minutes: 5,
    age: "4–8",
    ref: "Genesis 37–45",
    verse: "You intended to harm me, but God intended it for good.",
    verseRef: "Genesis 50:20",
    summary: "Joseph's brothers were jealous of his beautiful coat, but God turned a very sad story into a very happy ending.",
    body: [
      "Jacob loved his son Joseph very much and gave him a beautiful coat sewn with every color of the rainbow. Joseph's ten brothers saw the coat and felt jealous. “Father loves Joseph more than us!” they grumbled.",
      "One day the brothers were so angry that they sold Joseph to traders traveling to Egypt. They dipped his coat in animal blood and told their father a wild animal had hurt him. Oh, how Jacob cried!",
      "In Egypt, Joseph was put in prison even though he had done nothing wrong. But God never forgot Joseph. God helped Joseph understand dreams, and soon the king of Egypt heard about him.",
      "The king made Joseph a leader over all of Egypt! When a giant drought came, Joseph stored up plenty of grain so everyone had food — including his own brothers.",
      "When Joseph's brothers came to Egypt for food, they discovered that the great leader was their very own brother. Joseph forgave them with tears in his eyes and said, “God made everything right.”"
    ],
    lesson: "Even when life feels unfair and sad, God is still working behind the scenes. He can turn hard things into good things.",
    questions: ["Why were Joseph's brothers jealous?", "Who helped Joseph understand dreams?", "What did Joseph say to his brothers at the end?"],
    activity: "Make your own “coat of many colors” by gluing scraps of colored paper onto a paper shirt shape."
  },
  {
    id: "red-sea",
    title: "Moses and the Parted Sea",
    testament: "Old Testament",
    category: "Miracles",
    icon: "waves",
    colors: ["#38BDF8", "#0369A1"],
    minutes: 5,
    age: "4–8",
    ref: "Exodus 14",
    verse: "The LORD is my strength and my defense.",
    verseRef: "Exodus 15:2",
    summary: "With a mighty miracle, God split the sea so His people could walk through on dry ground.",
    body: [
      "God's people were free from Egypt, but Pharaoh changed his mind and chased them with fast chariots. Ahead of them was a huge sea. They were trapped!",
      "The people were frightened. “Why did you bring us here?” they cried to Moses. But Moses said, “Watch what God will do!”",
      "God said to Moses, “Stretch out your hand over the sea.” When he did, a strong wind blew all night — and the sea split into two great walls of water! In between was a dry, safe path.",
      "The people walked through with walls of water on their left and right, like a hallway made by God Himself. When the last person was safe on the other side, the waters rushed back — and Pharaoh's chariots could not follow.",
      "Everyone cheered and sang happy songs to God. He had saved them with a miracle!"
    ],
    lesson: "When you feel stuck with a big problem in front of you, remember: God can make a way where there is no way.",
    questions: ["What was in front of the people when they were scared?", "What did God use to split the sea?", "How do you think they felt on the other side?"],
    activity: "Fill a clear bowl with water, drop in food coloring, then use a piece of cardboard to “part” the water while you retell the story."
  },
  {
    id: "david-goliath",
    title: "David and the Giant Goliath",
    testament: "Old Testament",
    category: "Courage",
    icon: "sling",
    colors: ["#34D399", "#059669"],
    minutes: 5,
    age: "4–8",
    ref: "1 Samuel 17",
    verse: "The battle is the LORD's.",
    verseRef: "1 Samuel 17:47",
    summary: "A small shepherd boy trusted God and defeated a huge giant with nothing but a sling and five stones.",
    body: [
      "For forty days a giant named Goliath roared at the army of Israel. He was huge — taller than three grown-ups stacked together! He wore heavy armor and carried a giant spear. Every soldier was afraid.",
      "Then came David, a young shepherd boy who had come to bring food to his brothers. He heard the giant shouting and could not believe it. “Why is everyone afraid?” he asked. “Our God is bigger than any giant!”",
      "David refused to wear the king's heavy armor. Instead he chose five smooth stones from the stream and took his sling.",
      "Goliath laughed at the boy. But David ran toward him and swung his sling. Whoosh! The stone flew true and struck the giant's forehead. Down went Goliath — boom! — and the whole army cheered.",
      "David did not win because he was strong. He won because he trusted that God was with him."
    ],
    lesson: "You never have to be the biggest or the strongest to be brave. With God on your side, you can face any giant.",
    questions: ["What did David refuse to wear?", "How many stones did David pick up?", "Why wasn't David afraid of Goliath?"],
    activity: "Play a gentle game of target practice with cotton balls and a cup. Say “God is with me!” before each throw."
  },
  {
    id: "jonah-fish",
    title: "Jonah and the Big Fish",
    testament: "Old Testament",
    category: "Adventure",
    icon: "fish",
    colors: ["#60A5FA", "#2563EB"],
    minutes: 4,
    age: "4–8",
    ref: "Jonah 1–4",
    verse: "From inside the fish Jonah prayed to the LORD his God.",
    verseRef: "Jonah 2:1",
    summary: "Jonah ran away from God, got swallowed by a great fish, learned to pray, and was given a second chance.",
    body: [
      "God said to Jonah, “Go to the city of Nineveh and tell them I love them!” But Jonah did not want to go, so he bought a ticket on a ship sailing the other way.",
      "Soon a furious storm rocked the boat. Jonah knew the storm was his fault, so he told the sailors, “Throw me into the sea, and it will grow calm.” They did — and immediately the waves went still.",
      "God sent a great fish to swallow Jonah. Inside the big, dark belly of the fish, Jonah was not hurt — but he was certainly stuck! For three days he prayed and said, “I'm sorry, God. I will do what You say.”",
      "Then the fish did something surprising: it spat Jonah out onto the sandy beach — right where he was supposed to go!",
      "Jonah hurried to Nineveh and preached God's message. And guess what? The whole city listened and changed their ways. God smiled and showed them kindness."
    ],
    lesson: "We can run, but we can't hide from God's love. When He asks us to do something, it's always best to say “yes” right away.",
    questions: ["Where did Jonah try to go instead of Nineveh?", "What did God send to rescue Jonah in the sea?", "What happened when Jonah finally obeyed?"],
    activity: "Color a big fish and glue a tiny paper Jonah inside. Squeeze the fish gently — out pops Jonah!"
  },
  {
    id: "daniel-lions",
    title: "Daniel in the Lions' Den",
    testament: "Old Testament",
    category: "Courage",
    icon: "lion",
    colors: ["#FBBF24", "#D97706"],
    minutes: 4,
    age: "4–8",
    ref: "Daniel 6",
    verse: "My God sent his angel, and he shut the mouths of the lions.",
    verseRef: "Daniel 6:22",
    summary: "Daniel kept praying to God even when it was forbidden, and God protected him from the lions.",
    body: [
      "Daniel served the king and was honest, wise, and hardworking. Some officials were jealous and made a rule: everyone must pray only to the king. “If Daniel breaks the rule, the lions will get him!” they said.",
      "But Daniel knew he must pray only to God. So three times a day he opened his window toward Jerusalem, knelt down, and prayed — right where everyone could see.",
      "The officials caught him and dragged him before the king. The king liked Daniel and tried hard to save him, but the rule had to be kept. With a heavy heart, the king said, “May your God save you!”",
      "Daniel was thrown into the den of lions. All night the king could not sleep. At first light he ran to the den and called, “Daniel! Was your God able to save you?”",
      "“O king, live forever!” Daniel called back. “God's angel shut the lions' mouths, and they did not hurt me at all!” The king was overjoyed and lifted Daniel out."
    ],
    lesson: "Daniel kept doing what was right even when it was scary. When we put God first, He keeps us safe in His hands.",
    questions: ["How many times a day did Daniel pray?", "Why did the officials want Daniel to be thrown to the lions?", "Who shut the lions' mouths?"],
    activity: "Act it out: kneel by a window and pretend to pray, then roar like (very gentle!) lions — nothing scares a praying Daniel!"
  },
  {
    id: "ruth-barley",
    title: "Ruth and the Harvest Field",
    testament: "Old Testament",
    category: "Kindness",
    icon: "wheat",
    colors: ["#FACC15", "#CA8A04"],
    minutes: 4,
    age: "4–8",
    ref: "Ruth 1–4",
    verse: "Where you go I will go, and where you stay I will stay.",
    verseRef: "Ruth 1:16",
    summary: "Ruth stayed loyal to her mother-in-law, gathered grain in a kind man's field, and became part of God's big family story.",
    body: [
      "Ruth lived far from Israel, but she married a man whose family had moved there. When her husband and father-in-law died, Ruth was left with her mother-in-law, Naomi, who was very sad.",
      "Naomi decided to go back to her hometown. “I will go with you!” said Ruth. “Your people will be my people, and your God will be my God.” What a loyal friend!",
      "When they arrived, Ruth went to gather leftover grain in the fields so they would have food to eat. The field belonged to a kind, wealthy man named Boaz.",
      "Boaz noticed Ruth working hard and being respectful. He told his workers, “Leave extra grain for her,” and even invited her to lunch with them. Ruth went home with her arms full of grain and a heart full of thanks.",
      "Later, Boaz married Ruth, and their great-grandson was King David — and many years after that, Jesus Himself came from their family!"
    ],
    lesson: "Being loyal, humble, and hardworking pleases God. Small acts of kindness can become part of a very big story.",
    questions: ["What did Ruth say to Naomi?", "Who owned the field where Ruth gathered grain?", "What surprising family came from Ruth and Boaz?"],
    activity: "Play “glean the grain”: scatter pom-poms or dried pasta on the floor and pick them up in a basket without leaving any behind."
  },

  /* ---------------- NEW TESTAMENT ---------------- */
  {
    id: "birth-of-jesus",
    title: "The Night Jesus Was Born",
    testament: "New Testament",
    category: "Jesus",
    icon: "star",
    colors: ["#818CF8", "#4F46E5"],
    minutes: 5,
    age: "4–8",
    ref: "Luke 2:1–20",
    verse: "For unto you is born this day in the city of David a Savior.",
    verseRef: "Luke 2:11",
    summary: "In a humble stable under a bright star, God's own Son was born — and shepherds were the first to hear the good news.",
    body: [
      "A long time ago, Mary and Joseph traveled to a town called Bethlehem. When they arrived, every inn was full. “Sorry, no room!” everyone said.",
      "At last, the innkeeper offered them his stable — a barn where the animals ate. And there, in the soft hay, Mary gave birth to baby Jesus. She wrapped Him in little strips of cloth and laid Him in the manger.",
      "Outside, in the fields, shepherds were watching over their sheep when suddenly the sky exploded with light! An angel appeared and said, “Don't be afraid! I have good news of great joy — tonight a Savior is born!”",
      "Then the whole sky filled with angels singing, “Glory to God in the highest, and on earth peace!” When the singing stopped, the shepherds ran as fast as they could to see the baby.",
      "They found Jesus just as the angel had said. Then they went away praising God, telling everyone the wonderful thing they had seen."
    ],
    lesson: "Jesus came to earth not in a palace, but in a barn — close to ordinary people like us. The best gift God gave was His Son.",
    questions: ["Where was Jesus born?", "Who were the first people to visit Jesus?", "What did the angels sing?"],
    activity: "Build a little stable with blocks or a shoebox, and place a doll in the “manger.” Add a shiny star on top."
  },
  {
    id: "calming-storm",
    title: "Jesus Calms the Storm",
    testament: "New Testament",
    category: "Miracles",
    icon: "storm",
    colors: ["#94A3B8", "#475569"],
    minutes: 4,
    age: "4–8",
    ref: "Mark 4:35–41",
    verse: "Peace! Be still!",
    verseRef: "Mark 4:39",
    summary: "While waves crashed and the boat rocked, Jesus slept — then He spoke, and the storm obeyed.",
    body: [
      "One evening Jesus said to His disciples, “Let's go to the other side of the lake.” So they climbed into a boat, and Jesus fell asleep on a pillow in the back.",
      "Suddenly a fierce wind whistled across the water. Waves grew tall and sloshed over the sides. The boat tipped and rocked — oh my!",
      "The disciples were terrified. They shook Jesus awake and cried, “Teacher, don't you care that we're drowning?”",
      "Jesus stood up and said to the wind and waves, “Peace! Be still!” And just like that — the wind stopped flapping, the waves went flat, and everything was quiet as a whisper.",
      "Jesus looked at His friends and asked, “Why were you so afraid? Do you still have no faith?” The disciples looked at each other in amazement. “Who is this,” they said, “that even the wind and waves obey Him?”"
    ],
    lesson: "Jesus has power over everything — even storms. When life feels stormy, we can talk to Him and find peace in our hearts.",
    questions: ["What was Jesus doing while the storm raged?", "What two words did Jesus say to the storm?", "How do you calm down when you feel afraid?"],
    activity: "Fill a jar with water, seal the lid tight, and tilt it to make waves. Whisper “Peace, be still” and hold it steady."
  },
  {
    id: "good-samaritan",
    title: "The Good Samaritan",
    testament: "New Testament",
    category: "Kindness",
    icon: "heart",
    colors: ["#FB7185", "#E11D48"],
    minutes: 4,
    age: "4–8",
    ref: "Luke 10:25–37",
    verse: "Love your neighbor as yourself.",
    verseRef: "Luke 10:27",
    summary: "A man was hurt on the road, and the person who stopped to help was the last one anyone expected.",
    body: [
      "A teacher once asked Jesus, “Who is my neighbor?” Jesus answered with a story.",
      "“A man was walking down a lonely road when robbers attacked him. They took his things, hurt him badly, and left him lying half-dead.”",
      "A priest came down the road — but he walked right past. Then a helper of the temple came — and he walked right past too.",
      "Then came a Samaritan. People from Samaria were not usually liked by the man's crowd. But when the Samaritan saw the hurt man, his heart filled with compassion.",
      "He bandaged the man's wounds, lifted him onto his donkey, took him to an inn, and paid the innkeeper to look after him. “Whatever more you spend,” he said, “I will pay you back.” Jesus asked, “Which of these three was a neighbor?” The teacher answered, “The one who showed mercy.” “Go and do the same,” said Jesus."
    ],
    lesson: "A neighbor is anyone who needs our help — even someone who looks or lives differently than we do. Kindness crosses every road.",
    questions: ["Who walked past the hurt man first?", "How did the Samaritan help?", "Who did Jesus say was the real neighbor?"],
    activity: "Do one surprise kind thing today for someone in your family, without being asked — then share what happened."
  },
  {
    id: "lost-sheep",
    title: "The Lost Sheep",
    testament: "New Testament",
    category: "Jesus' Teachings",
    icon: "sheep",
    colors: ["#A3E635", "#65A30D"],
    minutes: 3,
    age: "4–8",
    ref: "Luke 15:1–7",
    verse: "I have found my lost sheep.",
    verseRef: "Luke 15:6",
    summary: "Jesus told a story about a shepherd who left ninety-nine sheep to find the one that wandered away.",
    body: [
      "Jesus was sitting with people who often made mistakes, and some religious leaders grumbled, “Why does He spend time with them?”",
      "So Jesus told them a story. “If a man has one hundred sheep and one of them wanders away, won't he leave the ninety-nine on the hills and go look for the one that wandered off?”",
      "And when he finds it, he is happier about that one sheep than about the ninety-nine that did not wander. He puts it on his shoulders, cheering, and calls his friends, “Rejoice with me! I found my lost sheep!”",
      "Then Jesus said, “It is the same in heaven. There is more joy in heaven over one person who says ‘I'm sorry’ than over ninety-nine who never needed to.”",
      "He was telling everyone: every single person matters to God. You — yes, you — are worth searching for."
    ],
    lesson: "Nobody is ever too lost for God to find. If you ever wander away, He will come looking for you with joy.",
    questions: ["How many sheep did the shepherd have?", "Which sheep did he go looking for?", "How did the shepherd carry the sheep home?"],
    activity: "Hide a toy sheep around the room. Let your family search for it — cheer loudly when they find it!"
  },
  {
    id: "feeding-5000",
    title: "Jesus Feeds Five Thousand",
    testament: "New Testament",
    category: "Miracles",
    icon: "bread",
    colors: ["#FDBA74", "#EA580C"],
    minutes: 4,
    age: "4–8",
    ref: "John 6:1–14",
    verse: "They all ate and were satisfied.",
    verseRef: "John 6:11",
    summary: "Five small loaves and two little fish became a feast for thousands — with twelve baskets left over!",
    body: [
      "Jesus had been teaching all day on a grassy hill, and the crowd grew and grew — five thousand people! Everyone was getting hungry.",
      "The disciples checked their pockets: “All we have is a boy's lunch — five little barley loaves and two small fish.” Andrew said, “But how far will that go among so many?”",
      "Jesus smiled. “Have everyone sit down.” There were so many people that they numbered them like flowers in rows — five thousand!",
      "Jesus took the loaves, thanked His Father in heaven, and began handing them out — and handing them out — and handing them out. Then the fish! Everybody ate as much as they wanted.",
      "When everyone was full, Jesus said, “Gather the leftovers.” The disciples filled twelve baskets with bread still remaining. Another wonderful sign showed who Jesus truly was."
    ],
    lesson: "Jesus cares about our needs, big and small. When we give Him what little we have, He can do more with it than we ever could.",
    questions: ["Where did the boy's lunch come from?", "How many people ate that day?", "How many baskets of leftovers were collected?"],
    activity: "At snack time, break one small treat into many pieces and share it with everyone — then retell the miracle."
  },
  {
    id: "zacchaeus-tree",
    title: "Zacchaeus and the Sycamore Tree",
    testament: "New Testament",
    category: "Jesus",
    icon: "tree",
    colors: ["#4ADE80", "#16A34A"],
    minutes: 3,
    age: "4–8",
    ref: "Luke 19:1–10",
    verse: "Today salvation has come to this house.",
    verseRef: "Luke 19:9",
    summary: "A short tax collector climbed a tree to see Jesus — and Jesus climbed right into his heart.",
    body: [
      "Zacchaeus was a tax collector, and he did not have many friends. People did not trust him because he sometimes kept extra money for himself.",
      "Zacchaeus really wanted to see Jesus, but he was very short and the crowd was very tall. He could not see a thing over all those grown-ups.",
      "So he ran ahead, found a sycamore tree, and scrambled up the branches like a squirrel. From up there he had the perfect view!",
      "When Jesus passed by, He stopped right under the tree and looked up. “Zacchaeus, come down immediately! I must stay at your house today.” Zacchaeus climbed down quickly and welcomed Jesus gladly.",
      "That day Zacchaeus' heart changed. “I will give half of everything I have to the poor,” he said, “and if I cheated anyone, I will pay them back four times!” Jesus smiled: “Today salvation has come to this house.”"
    ],
    lesson: "Jesus looks for people, not just houses. He loves us no matter who we are — and being with Him changes our hearts.",
    questions: ["Why did Zacchaeus climb the tree?", "What did Jesus say to him from below?", "How did Zacchaeus change his ways?"],
    activity: "Go on a “tree climb” — use a step stool or playground tree (with a grown-up!) and look for people you can be kind to today."
  },
  {
    id: "palm-sunday",
    title: "Palm Sunday: The King Arrives",
    testament: "New Testament",
    category: "Jesus",
    icon: "palm",
    colors: ["#2DD4BF", "#0D9488"],
    minutes: 4,
    age: "4–8",
    ref: "Mark 11:1–11",
    verse: "Blessed is he who comes in the name of the Lord!",
    verseRef: "Mark 11:9",
    summary: "Jesus rode into Jerusalem on a donkey while crowds waved palm branches and shouted “Hosanna!”",
    body: [
      "Jesus and His disciples were walking toward Jerusalem when Jesus told two of them, “Go into the village ahead. You will find a young donkey tied there. Bring it to me.” Everything happened exactly as He said.",
      "Jesus sat on the donkey's coat and rode down the hill. Crowds spread their cloaks and palm branches on the road like a soft, green carpet.",
      "People waved the branches and shouted at the top of their lungs, “Hosanna! Blessed is He who comes in the name of the Lord! Blessed is the coming kingdom of our father David!”",
      "Hosanna means “Save us now!” They were welcoming Jesus like a king — because He truly was the King they had waited for.",
      "Jesus rode right into the temple courtyard. He looked around at everything, and because it was already evening, He went back out to Bethany with His friends."
    ],
    lesson: "Jesus is the King — but He came humbly, riding a donkey, not a shiny chariot. We can welcome Him into our hearts with praise.",
    questions: ["What animal did Jesus ride?", "What did people lay on the road?", "What does “Hosanna” mean?"],
    activity: "Wave homemade “palm branches” (green paper cut into strips on a stick) and shout “Hosanna!” together."
  },
  {
    id: "easter-story",
    title: "The Easter Story: An Empty Tomb",
    testament: "New Testament",
    category: "Jesus",
    icon: "tomb",
    colors: ["#C084FC", "#7E22CE"],
    minutes: 5,
    age: "4–8",
    ref: "Matthew 28:1–10",
    verse: "He is not here; he has risen!",
    verseRef: "Matthew 28:6",
    summary: "Three days after Jesus was laid in a tomb, the stone rolled away — and the tomb was empty!",
    body: [
      "After Jesus died on the cross, a kind man named Joseph placed His body in a tomb cut out of rock. A huge, heavy stone was rolled across the door, and soldiers were set to guard it.",
      "On the third day, very early in the morning, some women who loved Jesus came to visit the tomb. They brought sweet spices to care for His body. “Who will roll away the stone for us?” they wondered.",
      "When they arrived, the stone was already moved! The tomb was empty — and an angel sat there, shining like lightning. “Don't be afraid,” he said. “You are looking for Jesus, who was crucified. He is not here — He has risen, just as He said!”",
      "The women ran to tell Jesus' friends. On the way, Jesus Himself met them and said, “Don't be afraid. Go and tell my brothers.” They fell at His feet and held on tight — so happy they could hardly stand it.",
      "Jesus is alive! And that is the very best news in the whole Bible."
    ],
    lesson: "Because Jesus lives, we never need to be afraid of anything — not even forever. He is alive, and He loves us!",
    questions: ["Who came to the tomb first that morning?", "What did the angel say when they arrived?", "How do you think the women felt when they saw Jesus?"],
    activity: "Roll a painted rock over a small “tomb” (a cup on its side) on Easter morning and shout, “He is risen!”"
  }
];

/* helpful lookups used by both pages */
const STORY_MAP = Object.fromEntries(STORIES.map((s) => [s.id, s]));
const TAGS = [...new Set(STORIES.flatMap((s) => [s.testament, s.category]))];

if (typeof module !== "undefined") {
  module.exports = { STORIES, STORY_MAP, TAGS, ICONS };
}
