# AI Hello World with Different Personalities

An experiment: what happens when you ask an AI to write "Hello World" in JavaScript as 652 different personalities — fictional characters, historical figures, celebrities, real-world professionals, and software engineer archetypes?

## The Experiment

652 personalities — from anime characters to NASA engineers, villains to bomb disposal technicians, Greek gods to forensic accountants, 10x developers to pair programmers — each "wrote" a Hello World JS program. Every file is valid Node.js. The analysis scripts compare them statistically.

## Project Structure

```
personalities/           # 651 Hello World programs + 1 baseline
  000_baseline.js        # No-personality baseline
  professionals/         # 101 files (NASA Engineer, Brain Surgeon, ...)
  software-engineers/    # 50 files (10x Developer, Senior Engineer, ...)
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
  SOFTWARE_ENGINEERS.md  # 50 SWE archetype comparison & rankings
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

- **All 652 files are valid Node.js** — 652/652 produce output
- Code length ranges from **2 lines** (Baseline, Code Golfer, Pragmatic Developer) to **148 lines** (Database Developer)
- Character count ranges from **28** (Pragmatic Developer) to **5,649** (Forensic Accountant)
- Complexity score ranges from **0** (Saitama, Hemingway, Iron Man) to **8** (Machine Learning Engineer, Game Developer)

### Three-Way Comparison — Professionals vs SWE Types vs Fictional

| Metric | Professionals (101) | SWE Types (50) | Fictional (500) |
|--------|---------------------|----------------|-----------------|
| Avg Lines | 65.0 | 46.4 | 25.7 |
| Avg Characters | 2,342 | 1,198 | 646 |
| Signal-to-Noise | 88.1% | 60.5% | 42.2% |
| Comment % | 9.1% | 35.5% | 53.9% |
| Complexity | 3.4 | 2.6 | 1.5 |
| Exclamations | 0.5 | 1.2 | 3.2 |

**Professionals don't write "Hello World" — they build systems.** A NASA Engineer builds a pre-flight checklist. A Forensic Accountant builds an audit trail with Benford's Law. They write 2.5x more code, but 88% of it is signal (vs 60% for SWE types and 42% for fictional characters).

**SWE archetypes reveal the seniority U-curve.** The 10x Developer (score 79) and Senior Engineer (72) are the most efficient. But as seniority increases past senior, code gets *more verbose* — principals (53) and architects (43) add architectural commentary. Process-oriented types (Pair Programmer 37, Documentation Obsessed 38) produce the least useful code of any category.

### Most "Different" Personalities (by composite z-score)

| Rank | Personality | Z-Score | Why |
|------|------------|---------|-----|
| 1 | Forensic Accountant | 26.52 | 115 lines, 5,649 chars, 45 console.logs — full audit trail |
| 2 | Emergency Room Doctor | 22.81 | 58 ALL-CAPS (STAT orders), complex triage system |
| 3 | Anesthesiologist | 22.54 | 100 lines, 42 console.logs — complete drug protocol |
| 4 | Bomb Disposal Technician | 22.48 | 63 ALL-CAPS (safety warnings), wire-by-wire procedures |
| 5 | Air Crash Investigator | 21.47 | 46 console.logs — full NTSB-style investigation report |
| 6 | Machine Learning Engineer | 19.71 | Highest complexity (8), full training loop simulation |
| 7 | Tax Accountant | 18.47 | 97 lines of ledger entries and bracket calculations |
| 8 | Plasma Physicist | 17.78 | 103 lines of tokamak diagnostics and fusion conditions |
| 9 | Dalek | 17.33 | 84 ALL-CAPS, 25 exclamations — "EXTERMINATE" |
| 10 | Kevin Hart | 15.96 | 87 ALL-CAPS, 24 exclamations — screaming energy |

### Category Averages

| Category | Avg Lines | Avg Chars | Complexity | Exclamations | Comment % |
|----------|-----------|-----------|------------|-------------|-----------|
| **Professionals** | **65.0** | **2,342** | **5.1** | **0.5** | **9%** |
| **Software Engineers** | **46.4** | **1,198** | **3.7** | **1.2** | **36%** |
| Villains | 42.0 | 836 | 3.0 | 12.5 | 52% |
| Scientists/Thinkers | 35.8 | 1,086 | 3.2 | 1.6 | 64% |
| Video Game Characters | 33.1 | 692 | 2.9 | 3.0 | 39% |
| Tech CEOs | 30.6 | 878 | 2.6 | 1.4 | 69% |
| Anime | 22.9 | 565 | 2.0 | 6.4 | 59% |
| Superheroes | 19.4 | 540 | 1.3 | 3.2 | 74% |
| Children's Characters | 19.1 | 562 | 0.7 | 5.1 | 85% |
| Literary Authors | 17.4 | 543 | 1.0 | 2.0 | 77% |

## Professionals (501-600)

NASA Engineer, Nuclear Scientist, Brain Surgeon, Aerospace Engineer, Cryptographer, Compiler Engineer, Submarine Captain, Air Traffic Controller, Forensic Scientist, Structural Engineer, Database Administrator, Embedded Systems Engineer, Rocket Propulsion Engineer, Cybersecurity Analyst, Mechanical Engineer, Civil Engineer, Chemical Engineer, Biomedical Engineer, Data Scientist, Machine Learning Engineer, DevOps Engineer, Site Reliability Engineer, Kernel Developer, Robotics Engineer, Quantum Computing Researcher, Penetration Tester, Flight Test Engineer, Marine Biologist, Geologist, Meteorologist, Epidemiologist, Pharmacologist, Patent Attorney, Tax Accountant, Actuary, Air Crash Investigator, Bomb Disposal Technician, Emergency Room Doctor, Anesthesiologist, Forensic Accountant, Supply Chain Manager, Quality Assurance Engineer, Technical Writer, UX Researcher, Scrum Master, Product Manager, Solutions Architect, Network Engineer, FPGA Engineer, Signal Processing Engineer, Control Systems Engineer, Power Grid Operator, Nuclear Reactor Operator, Oil Rig Engineer, Mining Engineer, Environmental Engineer, Traffic Engineer, Sound Engineer, Broadcast Engineer, Optical Engineer, Materials Scientist, Nanotechnology Researcher, Bioinformatics Scientist, Climate Scientist, Seismologist, Volcanologist, Oceanographer, Astrophysicist, Particle Physicist, Plasma Physicist, Statistician, Economist, Quant Trader, Blockchain Developer, Game Engine Developer, Graphics Programmer, Operating System Developer, Firmware Engineer, Satellite Engineer, Avionics Engineer, Ship Engineer, Locomotive Engineer, Elevator Inspector, Building Code Inspector, Fire Protection Engineer, Forensic Engineer, Reliability Engineer, Safety Engineer, Industrial Engineer, Agricultural Engineer, Food Scientist, Textile Engineer, Packaging Engineer, Acoustics Engineer, Photonics Engineer, Cryogenics Engineer, Geotechnical Engineer, Hydrology Engineer, Corrosion Engineer, Chief Technology Officer

## Software Engineer Archetypes (602-651)

10x Developer, Clever Developer, Code Golfer, Functional Programmer, Pragmatic Developer, Senior Engineer, Staff Engineer, TDD Practitioner, Bootcamp Grad, Performance Engineer, Clean Code Evangelist, Frontend Developer, Type Safety Zealot, Anxious Developer, Config-Driven Developer, Backend Developer, ML Engineer, Enterprise Java Dev, Over-Engineering Dev, Deadline Developer, Mobile Developer, Self-Taught Developer, DevOps-Minded Dev, Security Engineer, Embedded Developer, Database Developer, OOP Purist, Platform Engineer, Game Developer, Legacy Code Maintainer, Refactoring Addict, Fullstack Developer, Vim User, Principal Engineer, Startup Developer, Data Engineer, Tech Lead, Junior Engineer, Intern, AI-Assisted Developer, Copy-Paste Developer, Solo Developer, Architect, Tech Debt Warrior, Open Source Maintainer, Agile Developer, Waterfall Developer, OSS Contributor, Documentation Obsessed, Pair Programmer

## Fictional Personalities (500)

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

Claude (Anthropic) via Claude Code — 75+ parallel subagents, each handling 10-20 personalities.
