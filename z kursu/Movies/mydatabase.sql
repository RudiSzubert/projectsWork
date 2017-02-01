-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Czas generowania: 25 Sty 2017, 14:55
-- Wersja serwera: 10.1.19-MariaDB
-- Wersja PHP: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `mydatabase`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `groceries`
--

CREATE TABLE `groceries` (
  `id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `groceries2`
--

CREATE TABLE `groceries2` (
  `id` int(11) NOT NULL,
  `something` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `movies`
--

CREATE TABLE `movies` (
  `id` int(11) NOT NULL,
  `title` text,
  `year` int(11) DEFAULT NULL,
  `description` text,
  `type` text,
  `duration` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `movies`
--

INSERT INTO `movies` (`id`, `title`, `year`, `description`, `type`, `duration`) VALUES
(18, 'Adwokat Diabla', 1997, 'Kevin Lomax - wybitny adwokat, skuszony intratnÄ… propozycjÄ… pracy, przeprowadza siÄ™ do Nowego Jorku. Nie zdaje sobie jednak sprawy z tego, kim jest jego chlebodawca.', 'full movie', 144),
(19, 'Zielona Mila', 1999, 'Emerytowany straÅ¼nik wiÄ™zienny opowiada przyjaciÃ³Å‚ce o niezwykÅ‚ym mÄ™Å¼czyÅºnie, ktÃ³rego skazano na Å›mierÄ‡ za zabÃ³jstwo dwÃ³ch 9-letnich dziewczynek.', 'full movie', 188),
(20, 'Forrest Gump', 1994, 'Historia Å¼ycia Forresta, chÅ‚opca o niskim ilorazie inteligencji z niedowÅ‚adem koÅ„czyn, ktÃ³ry staje siÄ™ miliarderem i bohaterem wojny w Wietnamie.', 'full movie', 142),
(21, 'Skazani na Shawshank', 1994, 'Adaptacja opowiadania Stephena Kinga. Historia niesÅ‚usznie skazanego na doÅ¼ywocie bankiera, ktÃ³ry musi przeÅ¼yÄ‡ w brutalnym Å›wiecie rzÄ…dzonym przez straÅ¼nikÃ³w i wspÃ³Å‚wiÄ™ÅºniÃ³w.', 'full movie', 142),
(22, 'Matrix', 1999, 'Haker komputerowy Neo dowiaduje siÄ™ od tajemniczych rebeliantÃ³w, Å¼e Å›wiat, w ktÃ³rym Å¼yje, jest tylko obrazem przesyÅ‚anym do jego mÃ³zgu przez roboty.', 'full movie', 136),
(23, 'Leon Zawodowiec', 1994, 'PÅ‚atny morderca ratuje dwunastoletniÄ… dziewczynkÄ™, ktÃ³rej rodzina zostaÅ‚a zabita przez skorumpowanych policjantÃ³w.', 'full movie', 110),
(24, 'Shrek', 2001, 'By odzyskaÄ‡ swÃ³j dom, brzydki ogr z gadatliwym osÅ‚em wyruszajÄ… uwolniÄ‡ piÄ™knÄ… ksiÄ™Å¼niczkÄ™.', 'full movie', 90),
(25, 'Titanic', 1997, 'Rok 1912, brytyjski statek Titanic wyrusza w swÃ³j dziewiczy rejs do USA. Na pokÅ‚adzie emigrant Jack przypadkowo spotyka arystokratkÄ™ Rose. ', 'full movie', 194),
(26, 'Avatar', 2009, 'Jake, sparaliÅ¼owany byÅ‚y komandos, zostaje wysÅ‚any na planetÄ™ Pandora, gdzie zaprzyjaÅºnia siÄ™ z lokalnÄ… spoÅ‚ecznoÅ›ciÄ… i postanawia jej pomÃ³c. ', 'full movie', 164),
(27, 'Gladiator', 2000, 'GeneraÅ‚ Maximus - prawa rÄ™ka cesarza, szczÄ™Å›liwy mÄ…Å¼ i ojciec - w jednej chwili traci wszystko. Jako niewolnik-gladiator musi walczyÄ‡ na arenie o przeÅ¼ycie.', 'full movie', 155),
(28, 'Requiem dla snu', 2000, 'Historia czwÃ³rki bohaterÃ³w, dla ktÃ³rych uÅ¼ywki sÄ… ucieczkÄ… przed otaczajÄ…cÄ… ich rzeczywistoÅ›ciÄ….', 'full movie', 102),
(29, 'American Beauty', 1999, 'Oto film nieprzeciÄ™tny: smutny i zarazem wesoÅ‚y, ironiczny, peÅ‚en symboli majÄ…cych zobrazowaÄ‡ proste, pozbawione wiÄ™kszych emocji Å¼ycie. PeÅ‚en uczuÄ‡. Film o braku wolnoÅ›ci i o zaleÅ¼noÅ›ciach, w jakie uwikÅ‚any jest kaÅ¼dy z nas. Obraz miejscami ostry i dobitny, miejscami sielankowy. ArcydzieÅ‚o, ktÃ³rego tematem jest codzienne Å¼ycie. Å»ycie i Å›mierÄ‡.   JuÅ¼ pierwsze minuty zdradzajÄ… widzowi zakoÅ„czenie: GÅ‚Ã³wny bohater, narrator opowieÅ›ci przekazujÄ…cy nam historiÄ™ swojego Å¼ycia - umrze. Taki zabieg kaÅ¼e nam do koÅ„ca Å›ledziÄ‡ wydarzenia, ktÃ³re zmierzajÄ… do nieuchronnego koÅ„ca. 42-letni Lester (Kevin Spacey), ojciec i mÄ…Å¼, jest zmÄ™czony swojÄ… bezbarwnÄ… i nudnÄ… egzystencjÄ…. Jego Å¼ona Caroline (Annette Bening) to typ bizneswoman, dla ktÃ³rej liczy siÄ™ tylko kariera i pieniÄ…dze i ktÃ³ra swojego mÄ™Å¼a traktuje jak niezbyt przydatny dodatek do domu, ktÃ³rym moÅ¼na siÄ™ czasami pochwaliÄ‡ na bankiecie. CÃ³rka Jenny (Thora Birch) to typowa nastolatka z typowymi problemami swojego wieku, zagubiona, niedoceniona i otwarcie gardzÄ…ca swoim ojcem. Wszystko zmienia siÄ™, gdy Lester poznaje najbliÅ¼szÄ… przyjaciÃ³Å‚kÄ™ Jenny - AngelÄ™ (Mena Suvari) - i zakochuje siÄ™ w niej. To dziwne uczucie stanie siÄ™ dla niego nowym wyzwaniem i przywrÃ³ci chÄ™Ä‡ do Å¼ycia. ', 'full movie', 122);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `questions`
--

CREATE TABLE `questions` (
  `id` int(11) NOT NULL,
  `level` int(11) DEFAULT NULL,
  `qval` text,
  `ans1` text,
  `ans2` text,
  `ans3` text,
  `ans4` text,
  `correct` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `questions`
--

INSERT INTO `questions` (`id`, `level`, `qval`, `ans1`, `ans2`, `ans3`, `ans4`, `correct`) VALUES
(0, 3, 'afddaf', 'fdafdadf', 'adfadfadfdaf', 'adfdaf', 'dafadf', 4),
(1, 1, 'Kogo pochowano w grobie Napoleona', 'Saurona', 'Napoleona', 'Browara', 'Nelsona', 2),
(3, 3, 'Something', 'To', 'aewawe', 'Base', 'unreadable', 2),
(4, 2, 'Nother', 'Why', 'awewaewa', 'Me ', 'bitch', 3),
(5, 2, 'BowieKROL', 'ATAKZE', 'FREDIE', 'MERCURY', 'RZADZA', 2),
(6, 2, 'Another', 'One', 'Just', 'For ', 'Test', 4),
(7, 3, 'afddaf', 'fdafdadf', 'adfadfadfdaf', 'adfdaf', 'dafadf', 4),
(8, 2, 'Some', 'question', 'to ', 'add ', 'just to check', 4);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indexes for table `groceries2`
--
ALTER TABLE `groceries2`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
