# AI Hello World with Different Personalities

An experiment: what happens when you ask an AI to write "Hello World" in JavaScript as 500 different fictional, historical, and celebrity personalities?

## The Experiment

500 personalities — from anime characters to scientists, villains to children's TV icons, Greek gods to sitcom characters — each "wrote" a Hello World JS program. Every file is valid Node.js. The analysis script compares them statistically.

## Project Structure

```
personalities/           # 500 Hello World programs + 1 baseline
  000_baseline.js        # No-personality baseline
  anime/                 # 60 files (Naruto, Goku, Saitama, ...)
  action-film/           # 20 files (Jackie Chan, John Wick, ...)
  artists/               # 6 files (Frida Kahlo, Picasso, ...)
  celebrities/           # 10 files (Oprah, Gordon Ramsay, ...)
  childrens-characters/  # 10 files (Winnie the Pooh, Kermit, ...)
  doctor-who-bbc/        # 9 files (The Doctor, Dalek, ...)
  filmmakers-comedians/  # 20 files (Kubrick, Tarantino, ...)
  game-of-thrones/       # 10 files (Tyrion, Arya, Hodor, ...)
  historical-figures/    # 30 files (Cleopatra, Napoleon, ...)
  literary-authors/      # 23 files (Shakespeare, Poe, ...)
  literary-characters/   # 39 files (Gatsby, Dracula, ...)
  lotr-tolkien/          # 20 files (Gandalf, Sauron, ...)
  musicians/             # 24 files (Freddie Mercury, ...)
  mythology/             # 10 files (Zeus, Loki, Medusa, ...)
  scientists/            # 15 files (Einstein, Tesla, ...)
  sports/                # 10 files (Jordan, Ali, Messi, ...)
  star-trek/             # 13 files (Spock, Picard, Data, ...)
  star-wars/             # 25 files (Yoda, Vader, Grogu, ...)
  superheroes/           # 15 files (Batman, Spider-Man, ...)
  tech-ceos/             # 5 files (Elon Musk, Steve Jobs, ...)
  tv-drama/              # 19 files (Walter White, BoJack, ...)
  tv-sitcoms/            # 46 files (Michael Scott, Homer, ...)
  video-games/           # 59 files (Mario, Link, GLaDOS, ...)
  villains/              # 2 files (Hannibal Lecter, ...)
scripts/                 # Analysis scripts
  analyze.js             # Statistical analysis across all files
  compare_baseline.js    # Baseline comparison & dev fitness scoring
results/                 # Pre-generated analysis output
  ANALYSIS_RESULTS.md    # Full statistical report
  BASELINE_COMPARISON.md # Baseline comparison & recommendations
data/                    # Personality lists
```

## Run

```bash
# Run any personality's Hello World
node personalities/anime/079_groot.js

# Run the full statistical analysis
node scripts/analyze.js

# Run baseline comparison & development fitness scoring
node scripts/compare_baseline.js
```

## Key Findings

- **All 500 files are valid Node.js** — 500/500 produce output
- Code length ranges from **7 lines** (Saitama, Kurt Cobain, Gandalf the White) to **57 lines** (Rocket Raccoon)
- Character count ranges from **106** (Hodor) to **1,521** (Rocket Raccoon)
- Complexity score ranges from **0** (Saitama, Hemingway, Iron Man, Joker) to **7** (Ethan Hunt, Aloy)

### Most "Different" Personalities (by composite z-score)

| Rank | Personality | Z-Score | Why |
|------|------------|---------|-----|
| 1 | Dalek | 22.57 | 84 ALL-CAPS words, 25 exclamation marks — "EXTERMINATE" style |
| 2 | Kevin Hart | 20.16 | 87 ALL-CAPS words, 24 exclamations — screaming energy |
| 3 | Megumin (Konosuba) | 18.19 | 14 console.logs, low comments — EXPLOSION chanting |
| 4 | Donkey (Shrek) | 14.60 | Never shuts up — caps, exclamations, low vocab diversity |
| 5 | Aqua (Konosuba) | 13.50 | 11 console.logs, high complexity — useless goddess crying |

### Category Averages

| Category | Avg Lines | Avg Chars | Complexity | Exclamations | Comment % |
|----------|-----------|-----------|------------|-------------|-----------|
| Villains | 42.0 | 836 | 3.0 | 12.5 | 52% |
| Scientists/Thinkers | 35.8 | 1,086 | 3.2 | 1.6 | 64% |
| Video Game Characters | 33.1 | 692 | 2.9 | 3.0 | 39% |
| Tech CEOs | 30.6 | 878 | 2.6 | 1.4 | 69% |
| Anime | 23.9 | 592 | 2.1 | 6.7 | 62% |
| Superheroes | 19.4 | 540 | 1.3 | 3.2 | 74% |
| Children's Characters | 19.1 | 562 | 0.7 | 5.1 | 85% |
| Literary Authors | 17.4 | 543 | 1.0 | 2.0 | 77% |

## Personalities (500)

### Anime (001-040, 201-240)
Naruto, Goku, Sasuke, Light Yagami, L, Luffy, Lelouch, Edward Elric, Spike Spiegel, Levi Ackerman, Gon, Killua, Saitama, Eren Jaeger, Rem, Sailor Moon, Pikachu, Vegeta, Itachi, Tanjiro, Zoro, Sanji, Genos, Todoroki, All Might, Deku, Kakashi, Jiraiya, Hinata, Mikasa, Zenitsu, Inosuke, Saber, Gintoki, Mob, Aang, Zuko, Iroh, Toph, Sokka, Mewtwo, Ash Ketchum, Ryuk, Griffith, Guts, Jotaro Kujo, Dio Brando, Shinji Ikari, Asuka, Rei Ayanami, Shigaraki, Dabi, Nezuko, Reigen, Hisoka, Kurapika, Senku, Kazuma, Aqua, Megumin

### Tech CEOs & Celebrities (021-030)
Elon Musk, Steve Jobs, Bill Gates, Mark Zuckerberg, Jeff Bezos, Oprah, Gordon Ramsay, Snoop Dogg, Morgan Freeman, Keanu Reeves

### Pop Culture Icons (031-040)
The Rock, Schwarzenegger, Samuel L. Jackson, Bob Ross, Mr. Rogers, David Attenborough, Neil deGrasse Tyson, Carl Sagan, Einstein, Tesla

### Literary Authors (041-045, 403-420)
Shakespeare, Poe, Hemingway, Mark Twain, Oscar Wilde, Arthur Conan Doyle, Agatha Christie, Stephen King, Tolkien, George R.R. Martin, Lovecraft, Asimov, Philip K. Dick, Jane Austen, Dickens, Kafka, Dostoevsky, Tolstoy, Virginia Woolf, Garcia Marquez, Murakami, Douglas Adams, Terry Pratchett

### Heroes & Villains (046-080)
Sherlock Holmes, James Bond, Batman, Superman, Spider-Man, Iron Man, Deadpool, Wolverine, Captain America, Thor, The Joker, Darth Vader, Yoda, Gandalf, Frodo, Gollum, Aragorn, Dumbledore, Voldemort, Hermione, Ron, Snape, Dobby, Jack Sparrow, Shrek, Donkey, Buzz Lightyear, Woody, Genie, Elsa, Thanos, Dr. Strange, Black Panther, Groot, Rocket Raccoon

### TV Characters (081-100, 327-360)
Walter White, Jesse Pinkman, Michael Scott, Dwight Schrute, Ron Swanson, Leslie Knope, Homer Simpson, Bart Simpson, Stewie Griffin, Peter Griffin, Rick Sanchez, Morty, Jake the Dog, BMO, SpongeBob, Patrick Star, Squidward, Mr. Krabs, Bugs Bunny, Daffy Duck, Tony Soprano, Omar Little, Dexter Morgan, Sheldon Cooper, Friends cast, Seinfeld cast, Breaking Bad cast, BoJack Horseman, Archer, Futurama cast, South Park cast, Cartoon Network classics

### Video Game Characters (101-120, 361-400)
Mario, Luigi, Link, Master Chief, Kratos, Lara Croft, Solid Snake, Cloud Strife, Geralt, Arthur Morgan, GLaDOS, Cortana, Sans, Steve, Pac-Man, Sonic, Mega Man, Kirby, Detective Pikachu, Ryu, Mass Effect crew, Bioshock characters, Last of Us cast, Nathan Drake, Aloy, Borderlands cast, Doom Slayer, Animal Crossing, Nintendo cast, Call of Duty characters

### Literary Characters (121-130, 461-480)
Gatsby, Atticus Finch, Elizabeth Bennet, Holden Caulfield, Don Quixote, Dracula, Frankenstein's Monster, Captain Ahab, Scarlett O'Hara, Scrooge, Shakespeare characters (Hamlet, Macbeth, Romeo, Juliet, Prospero, Puck), Les Mis, Phantom of the Opera, Monte Cristo, Tolkien book characters

### Historical Figures (131-150, 281-300)
Robin Hood, King Arthur, Odysseus, Achilles, Cleopatra, Julius Caesar, Napoleon, Genghis Khan, Marie Curie, Ada Lovelace, Alan Turing, Leonardo da Vinci, Michelangelo, Mozart, Beethoven, Socrates, Confucius, Sun Tzu, Machiavelli, Nietzsche, Hannibal Barca, Alexander the Great, Spartacus, Vlad the Impaler, Queen Elizabeth I, Musashi, Rasputin, Marco Polo, Magellan, Columbus

### Sports Legends (241-250)
Michael Jordan, Kobe Bryant, LeBron James, Muhammad Ali, Mike Tyson, Usain Bolt, Serena Williams, Messi, Ronaldo, Tom Brady

### Scientists (251-260)
Stephen Hawking, Richard Feynman, Isaac Newton, Charles Darwin, Galileo, Archimedes, Pythagoras, Hippocrates, Sigmund Freud, Carl Jung

### Artists & Musicians (151-160, 261-280)
Bob Marley, Freddie Mercury, David Bowie, Elvis, Jimi Hendrix, Beyonce, Taylor Swift, Kanye West, Eminem, Drake, Frida Kahlo, Picasso, Van Gogh, Dali, Warhol, Banksy, Bob Dylan, John Lennon, Kurt Cobain, Prince, Frank Sinatra, Louis Armstrong, Johnny Cash, Billie Eilish, Lady Gaga, Rihanna, Adele, Ed Sheeran, Bruno Mars, Kendrick Lamar

### Action & Film (161-180, 421-440)
Jackie Chan, Bruce Lee, Chuck Norris, Clint Eastwood, John Wick, Hannibal Lecter, Terminator, Forrest Gump, Rocky, Indiana Jones, Ethan Hunt, Jason Bourne, Neo, Agent Smith, The Dude, Tony Montana, Tyler Durden, Katniss Everdeen, Lisbeth Salander, Mulan, Hitchcock, Kubrick, Tarantino, Wes Anderson, Nolan, Scorsese, Spielberg, Miyazaki, Kurosawa, Tim Burton, Chaplin, Robin Williams, Jim Carrey, comedians

### Mythology (291-300)
Zeus, Poseidon, Hades, Athena, Hermes, Loki, Odin, Thor (Norse), Anubis, Medusa

### Game of Thrones (301-310)
Tyrion, Daenerys, Jon Snow, Cersei, Arya, Hodor, Littlefinger, The Hound, Tormund, Samwell

### Star Wars Extended (311-326, 489-500)
Mandalorian, Grogu, Ahsoka, Obi-Wan, Anakin, Palpatine, Han Solo, Chewbacca, C-3PO, R2-D2, Princess Leia, Boba Fett, Jar Jar Binks, Jabba, Dooku, Mace Windu, Kylo Ren, Rey, Finn, Poe, BB-8, K-2SO, HK-47

### Lord of the Rings Extended (441-450)
Gandalf the White, Sauron, Samwise, Gimli, Legolas, Saruman, Eowyn, Treebeard, Tom Bombadil, Wormtongue

### Sci-Fi TV (181-190, 451-460, 481-488)
Rapunzel, Moana, Wall-E, HAL 9000, Data, Spock, Captain Kirk, Captain Picard, The Doctor (Who), Dalek, Doctor Who characters, BBC Sherlock cast, Peaky Blinders, Vikings, Star Trek extended crew

### Classic & Children's (191-200)
Wednesday Addams, Morticia Addams, Willy Wonka, Cat in the Hat, The Lorax, Winnie the Pooh, Eeyore, Tigger, Cookie Monster, Kermit the Frog

## Generated by

Claude (Anthropic) via Claude Code — 50+ parallel subagents, each handling 10-20 personalities.
