'use strict';

/* ---------- Englannin perusrakenteet ---------- */

// Monivalintarivit: lause (___ = aukko) | vaihtoehdot, oikea ensin | suomennos | selitys
// Sanajärjestysrivit: oikeat järjestykset, ensimmäinen ensisijainen | suomennos | selitys

const ENG_PRESENT_POS = `
She ___ to school by bus. | goes / go / gos | Hän menee kouluun bussilla. | He/she/it-muodossa verbiin tulee -s. Go päättyy o-kirjaimeen, joten pääte on -es: goes.
My dad ___ at a bank. | works / work / working | Isäni työskentelee pankissa. | Toistuva asia → present simple. My dad (= he) → verbiin tulee -s.
They ___ football on Sundays. | play / plays / playing | He pelaavat jalkapalloa sunnuntaisin. | Subjektina on they, joten verbi on perusmuodossa ilman -s:ää.
The baby ___ a lot. | cries / crys / cry | Vauva itkee paljon. | The baby (= it) → -s. Kun y-kirjainta edeltää konsonantti, y vaihtuu muotoon -ies: cry → cries.
He ___ English very well. | speaks / speak / speaking | Hän puhuu englantia todella hyvin. | He/she/it → verbiin tulee -s.
I ___ in Helsinki. | live / lives / am live | Asun Helsingissä. | I-muodossa verbi on perusmuodossa ilman -s:ää.
We ___ breakfast at seven. | have / has / haves | Syömme aamiaisen seitsemältä. | Subjektina on we, joten verbi on perusmuodossa: have.
She ___ a new bike. | has / have / haves | Hänellä on uusi pyörä. | Epäsäännöllinen verbi: have → has, kun subjektina on he/she/it.
My cat ___ milk. | likes / like / liking | Kissani pitää maidosta. | My cat (= it) → verbiin tulee -s.
Anna ___ her teeth twice a day. | brushes / brushs / brush | Anna pesee hampaansa kahdesti päivässä. | Kun verbi päättyy -sh, -ch, -s, -x tai -o, he/she/it-päätteenä on -es: brushes.
He ___ his homework after school. | does / do / dos | Hän tekee läksynsä koulun jälkeen. | Do → does, kun subjektina on he/she/it.
The bus ___ at eight. | leaves / leave / leavs | Bussi lähtee kahdeksalta. | The bus (= it) → verbiin tulee -s.
You ___ very kind. | are / is / am | Olet erittäin ystävällinen. | Be-verbi: I am, you are, he/she/it is, we/you/they are.
My sister ___ twelve years old. | is / are / am | Siskoni on kaksitoista vuotta vanha. | Be-verbi: my sister (= she) → is.
I ___ a student. | am / is / are | Olen opiskelija. | Be-verbi: I → am.
We ___ good friends. | are / is / am | Olemme hyviä ystäviä. | Be-verbi: we → are.
It ___ cold today. | is / are / am | Tänään on kylmä. | Be-verbi: it → is.
Tom and Ben ___ brothers. | are / is / am | Tom ja Ben ovat veljeksiä. | Tom and Ben = they (monikko) → are.
The children ___ in the garden. | play / plays / playing | Lapset leikkivät puutarhassa. | The children = they (monikko), joten verbi on perusmuodossa ilman -s:ää.
My mum ___ the car on Mondays. | washes / washs / wash | Äitini pesee auton maanantaisin. | Wash päättyy -sh, joten he/she/it-pääte on -es: washes.
Birds ___ in trees. | live / lives / living | Linnut asuvat puissa. | Birds = they (monikko) → perusmuoto ilman -s:ää.
The teacher ___ us a lot of homework. | gives / give / gaves | Opettaja antaa meille paljon läksyjä. | The teacher (= she/he) → verbiin tulee -s.
She ___ TV every evening. | watches / watchs / watch | Hän katsoo televisiota joka ilta. | Watch päättyy -ch, joten pääte on -es: watches.
A week ___ seven days. | has / have / is | Viikossa on seitsemän päivää. | A week (= it) → have muuttuu muotoon has.
Sam ___ to music when he runs. | listens / listen / listening | Sam kuuntelee musiikkia juostessaan. | Sam (= he) → verbiin tulee -s.
My parents ___ coffee in the morning. | drink / drinks / drinking | Vanhempani juovat kahvia aamulla. | My parents = they (monikko) → perusmuoto ilman -s:ää.
The shop ___ at nine. | opens / open / opening | Kauppa aukeaa yhdeksältä. | The shop (= it) → verbiin tulee -s.
Fish ___ in water. | swim / swims / swimming | Kalat uivat vedessä. | Fish tarkoittaa tässä monikkoa (they) → perusmuoto ilman -s:ää.
A bird ___ over the lake. | flies / flys / fly | Lintu lentää järven yli. | A bird (= it) → -s. Konsonanttia edeltävä y vaihtuu muotoon -ies: fly → flies.
He ___ his friends every week. | visits / visit / visiting | Hän vierailee ystäviensä luona joka viikko. | He → verbiin tulee -s.
`;

const ENG_PRESENT_NEG = `
I ___ like spinach. | don't / doesn't / not | En pidä pinaatista. | Present simplen kielto: I/you/we/they → don't + verbin perusmuoto.
She ___ play the piano. | doesn't / don't / isn't | Hän ei soita pianoa. | He/she/it → doesn't + verbin perusmuoto.
We ___ have a car. | don't / doesn't / aren't | Meillä ei ole autoa. | Subjektina on we → don't + perusmuoto.
He doesn't ___ meat. | eat / eats / eating | Hän ei syö lihaa. | Doesn't-sanan jälkeen verbi on perusmuodossa. -s siirtyy apuverbiin (does), ei pääverbiin.
They ___ live in Turku. | don't / doesn't / aren't | He eivät asu Turussa. | Subjektina on they → don't + perusmuoto.
My brother ___ like football. | doesn't / don't / not | Veljeni ei pidä jalkapallosta. | My brother (= he) → doesn't + perusmuoto.
It ___ rain much in summer here. | doesn't / don't / isn't | Täällä ei sada kesällä paljon. | It → doesn't + perusmuoto.
I ___ tired today. | am not / do not / is not | En ole väsynyt tänään. | Be-verbin kielto: am/is/are + not. Pääverbinä on be, joten do-apuverbiä ei käytetä. I → am not.
He ___ at home now. | isn't / doesn't / don't | Hän ei ole nyt kotona. | Be-verbin kielto: he → is not (isn't). Do-apuverbiä ei käytetä, kun verbinä on be.
We ___ late. We are on time. | aren't / don't / isn't | Emme ole myöhässä. Olemme ajoissa. | Be-verbin kielto: we → are not (aren't).
The shops ___ open on Sundays. | aren't / isn't / don't | Kaupat eivät ole auki sunnuntaisin. | The shops = they (monikko) → are not (aren't). Open on adjektiivi, joten verbinä on be.
You ___ my friend! | aren't / don't / isn't | Et ole ystäväni! | Be-verbin kielto: you → are not (aren't).
My teacher doesn't ___ Finnish. | speak / speaks / speaking | Opettajani ei puhu suomea. | Doesn't + perusmuoto. Verbiin ei tule -s:ää.
They don't ___ TV in the morning. | watch / watches / watching | He eivät katso televisiota aamulla. | Don't + perusmuoto.
Mia ___ eat fish. | doesn't / isn't / don't | Mia ei syö kalaa. | Mia (= she) → doesn't + perusmuoto.
The children ___ at school today. | aren't / doesn't / don't | Lapset eivät ole tänään koulussa. | The children = they → are not (aren't). Verbinä on be.
I ___ know the answer. | don't / doesn't / am not | En tiedä vastausta. | Pääverbi on know (ei be), joten I → don't + perusmuoto.
This bag ___ belong to me. | doesn't / don't / isn't | Tämä laukku ei ole minun. | This bag (= it) → doesn't + perusmuoto.
My parents ___ work on Saturdays. | don't / doesn't / aren't | Vanhempani eivät työskentele lauantaisin. | My parents = they → don't + perusmuoto.
He ___ happy today. | isn't / doesn't / don't | Hän ei ole tänään iloinen. | Be-verbin kielto: he → is not (isn't).
Cats ___ like water. | don't / doesn't / aren't | Kissat eivät pidä vedestä. | Cats = they (monikko) → don't + perusmuoto.
She ___ my sister. | isn't / doesn't / don't | Hän ei ole siskoni. | Be-verbin kielto: she → is not (isn't).
We don't ___ to school on Sundays. | go / goes / going | Emme käy koulussa sunnuntaisin. | Don't + perusmuoto.
He doesn't ___ his homework. | do / does / doing | Hän ei tee läksyjään. | Doesn't + perusmuoto: do. (Does olisi väärin, koska -s on jo apuverbissä.)
Tim doesn't ___ in London. | live / lives / living | Tim ei asu Lontoossa. | Doesn't + perusmuoto.
You ___ allowed to run in the corridor. | aren't / don't / doesn't | Käytävällä ei saa juosta. | Be-verbin kielto: you → are not (aren't).
There ___ any milk in the fridge. | isn't / aren't / doesn't | Jääkaapissa ei ole maitoa. | There is/isn't + yksikkö tai uncountable (milk).
There ___ any eggs left. | aren't / isn't / don't | Munia ei ole jäljellä. | There are/aren't + monikko (eggs).
`;

const ENG_PRESENT_Q = `
___ you like pizza? | Do / Does / Are | Pidätkö pizzasta? | Present simplen kysymys: I/you/we/they → Do + subjekti + perusmuoto.
___ she play the guitar? | Does / Do / Is | Soittaako hän kitaraa? | He/she/it → Does + subjekti + perusmuoto.
Does your brother ___ football? | play / plays / playing | Pelaako veljesi jalkapalloa? | Does-kysymyksessä pääverbi on perusmuodossa. -s on jo apuverbissä (does).
___ they live in Tampere? | Do / Does / Are | Asuvatko he Tampereella? | Subjektina on they → Do + subjekti + perusmuoto.
Do you ___ English at school? | study / studies / studying | Opiskeletko englantia koulussa? | Do-kysymyksessä pääverbi on perusmuodossa.
___ the shop open at nine? | Does / Do / Is | Aukeaako kauppa yhdeksältä? | The shop (= it) → Does + perusmuoto. Verbinä on open, joten tarvitaan do-apuverbi.
___ you tired? | Are / Do / Does | Oletko väsynyt? | Be-verbin kysymys: be-verbi subjektin eteen. Tired on adjektiivi, joten do-apuverbiä ei käytetä.
___ he at home now? | Is / Does / Do | Onko hän nyt kotona? | Be-verbin kysymys: he → Is + subjekti.
___ your parents at work? | Are / Do / Is | Ovatko vanhempasi töissä? | Your parents = they → Are + subjekti. Verbinä on be.
___ I late? | Am / Do / Are | Olenko myöhässä? | Be-verbin kysymys: I → Am I…?
Where ___ you live? | do / does / are | Missä asut? | Kysymyssana + do + subjekti + perusmuoto.
What time ___ the film start? | does / do / is | Mihin aikaan elokuva alkaa? | Kysymyssana + does + subjekti (the film = it) + perusmuoto.
Where ___ your friends from? | are / do / does | Mistä ystäväsi ovat kotoisin? | Verbinä on be: kysymyssana + are + subjekti (your friends = they).
What ___ she do on Saturdays? | does / do / is | Mitä hän tekee lauantaisin? | Kysymyssana + does + she + perusmuoto.
How often ___ you go swimming? | do / does / are | Kuinka usein käyt uimassa? | How often + do + subjekti + perusmuoto.
Why ___ he always late? | is / does / do | Miksi hän on aina myöhässä? | Verbinä on be: Why + is + he.
How much ___ this book cost? | does / do / is | Paljonko tämä kirja maksaa? | This book (= it) → does + perusmuoto.
Who ___ you live with? | do / does / are | Kenen kanssa asut? | Who + do + you + perusmuoto.
___ Tom like spinach? | Does / Do / Is | Pitääkö Tom pinaatista? | Tom (= he) → Does + perusmuoto.
Do cats ___ fish? | like / likes / liking | Pitävätkö kissat kalasta? | Do-kysymyksessä pääverbi on perusmuodossa.
Does the baby ___ a lot? | cry / cries / crying | Itkeekö vauva paljon? | Does-kysymyksessä verbi on perusmuodossa (cry, ei cries).
___ we have school tomorrow? | Do / Does / Are | Onko meillä huomenna koulua? | Subjektina on we → Do + subjekti + perusmuoto.
___ it snow in Finland in winter? | Does / Do / Is | Sataako Suomessa talvella lunta? | It → Does + perusmuoto.
___ there a bank near here? | Is / Does / Are | Onko lähellä pankkia? | There is / there are -rakenteen kysymys: Is there…? yksikkö.
___ there any eggs in the fridge? | Are / Is / Do | Onko jääkaapissa munia? | Are there…? monikko (eggs).
What ___ you want for lunch? | do / does / are | Mitä haluat lounaaksi? | Kysymyssana + do + you + perusmuoto.
Which bus ___ you take to school? | do / does / are | Minkä bussin otat kouluun? | Which bus + do + you + perusmuoto.
Whose bag ___ this? | is / does / do | Kenen laukku tämä on? | Verbinä on be: this → is.
Yes, I do. – ___ you like sport? | Do / Does / Are | Kyllä pidän. – Pidätkö urheilusta? | Lyhyt vastaus Yes, I do viittaa do-kysymykseen: Do you like…?
___ Anna and Eva go to the same school? | Do / Does / Are | Käyvätkö Anna ja Eva samaa koulua? | Anna and Eva = they → Do + perusmuoto.
`;

const ENG_PROG_POS = `
I ___ a book at the moment. | am reading / is reading / read | Luen kirjaa parhaillaan. | Present continuous: am/is/are + verbi + -ing. I → am.
She ___ a letter right now. | is writing / writes / are writing | Hän kirjoittaa kirjettä juuri nyt. | Right now = juuri nyt → present continuous. She → is. Write → writing (e jää pois).
We ___ football in the park. | are playing / is playing / play | Pelaamme jalkapalloa puistossa. | Tapahtuu nyt → present continuous. We → are + -ing.
Look! The dog ___ in the garden. | is running / runs / are running | Katso! Koira juoksee puutarhassa. | Look! = tapahtuu nyt. Lyhyen verbin viimeinen konsonantti kaksinkertaistuu: run → running.
They ___ TV in the living room. | are watching / is watching / watching | He katsovat televisiota olohuoneessa. | They → are + verbi + -ing.
My dad ___ dinner now. | is cooking / are cooking / cooks | Isäni laittaa nyt ruokaa. | Now = nyt → present continuous. My dad (= he) → is.
You ___ too fast! | are driving / is driving / drive | Ajat liian lujaa! | You → are + -ing. Drive → driving (e jää pois).
The children ___ in the garden today. | are playing / is playing / plays | Lapset leikkivät tänään puutarhassa. | The children = they (monikko) → are + -ing.
It ___ outside. Take an umbrella. | is raining / rains / are raining | Ulkona sataa. Ota sateenvarjo. | Tapahtuu juuri nyt → present continuous. It → is.
Listen! Somebody ___ at the door. | is knocking / knocks / are knocking | Kuuntele! Joku koputtaa ovelle. | Listen! = tapahtuu nyt. Somebody (= he/she) → is.
Tom ___ his homework at the moment. | is doing / does / are doing | Tom tekee parhaillaan läksyjään. | At the moment = parhaillaan → present continuous. Tom → is.
I ___ to music right now. | am listening / listen / is listening | Kuuntelen musiikkia juuri nyt. | I → am + -ing.
The sun ___ today. | is shining / shines / are shining | Aurinko paistaa tänään. | Today (tänään, nyt) → present continuous. The sun (= it) → is.
My sister ___ a bath. | is having / has having / are having | Siskoni on kylvyssä. | Have a bath on toiminta, joten kestomuoto on sallittu: is having. Have → having (e jää pois).
Mum and Dad ___ the car. | are washing / is washing / washes | Äiti ja isä pesevät autoa. | Mum and Dad = they → are + -ing.
He ___ a sandwich. | is eating / are eating / eats | Hän syö voileipää. | He → is + verbi + -ing.
The baby ___ in her bed. | is sleeping / sleep / are sleeping | Vauva nukkuu sängyssään. | The baby (= she) → is + -ing.
We ___ for the bus. | are waiting / is waiting / waits | Odotamme bussia. | We → are + -ing.
She ___ a new dress today. | is wearing / wears / are wearing | Hänellä on tänään yllään uusi mekko. | Tänään yllä oleva vaate → present continuous (is wearing).
I ___ next to my best friend. | am sitting / is sitting / sit | Istun parhaan ystäväni vieressä. | Sit → sitting (konsonantti kaksinkertaistuu). I → am.
The students ___ an exam. | are taking / is taking / takes | Oppilaat ovat kokeessa. | The students = they → are. Take → taking (e jää pois).
Dad ___ the grass at the moment. | is cutting / cuts / are cutting | Isä leikkaa nurmikkoa parhaillaan. | Cut → cutting (konsonantti kaksinkertaistuu). Dad (= he) → is.
My friend ___ in London this month. | is staying / stays / are staying | Ystäväni oleskelee Lontoossa tämän kuun. | Tilapäinen tilanne (this month) → present continuous.
Prices ___ higher every year. | are getting / is getting / get | Hinnat nousevat joka vuosi. | Muutos käynnissä → present continuous. Prices = they → are. Get → getting.
He ___ in bed with a cold. | is lying / is laying / lies | Hän makaa sängyssä flunssassa. | Lie → lying (ie → y). Is lying = makaa.
I ___ to the cinema tonight. We have tickets. | am going / go / is going | Menen elokuviin tänä iltana. Meillä on liput. | Sovittu tuleva meno → present continuous (am going).
`;

const ENG_PROG_NEG = `
I ___ TV right now. | am not watching / don't watching / not watching | En katso televisiota juuri nyt. | Present continuousin kielto: am/is/are + not + verbi + -ing. I → am not.
She ___ her homework. | isn't doing / doesn't doing / isn't do | Hän ei tee läksyjään. | She → is not (isn't) + verbi + -ing.
We ___ football today. | aren't playing / isn't playing / don't playing | Emme pelaa jalkapalloa tänään. | We → are not (aren't) + -ing.
They ___ at the moment. | aren't working / isn't working / don't working | He eivät ole töissä tällä hetkellä. | They → aren't + -ing. Don't ei yhdisty -ing-muotoon.
It ___ now. | isn't raining / aren't raining / doesn't raining | Nyt ei sada. | It → isn't + -ing.
The baby ___ at the moment. | isn't sleeping / aren't sleeping / doesn't sleeping | Vauva ei nuku tällä hetkellä. | The baby (= she) → isn't + -ing.
You ___ to me! | aren't listening / isn't listening / don't listening | Et kuuntele minua! | You → aren't + -ing.
I ___ a new phone. I'm just looking. | am not buying / not buying / don't buying | En osta uutta puhelinta. Katselen vain. | I → am not + -ing.
My parents ___ today. | aren't working / isn't working / don't working | Vanhempani eivät ole töissä tänään. | My parents = they → aren't + -ing.
He ___ his bike. It's broken. | isn't riding / aren't riding / doesn't riding | Hän ei ratsasta pyörällään. Se on rikki. | He → isn't + verbi + -ing.
We ___ any music now. | aren't listening to / isn't listening to / don't listening to | Emme kuuntele nyt musiikkia. | We → aren't + -ing.
The children ___ in the garden. | aren't playing / isn't playing / don't playing | Lapset eivät leiki puutarhassa. | The children = they → aren't + -ing.
I ___ because I'm tired. | am not running / not running / don't running | En juokse, koska olen väsynyt. | I → am not + -ing. Run → running.
Mia ___ her teeth. | isn't brushing / aren't brushing / doesn't brushing | Mia ei harjaa hampaitaan. | Mia (= she) → isn't + -ing.
Look! Nobody ___ the lesson. | is following / follows / are following | Katso! Kukaan ei seuraa tuntia. | Nobody on jo kielteinen sana, joten verbi on myönteisessä muodossa: nobody is following (ei isn't).
The shop is closed. They ___ customers. | aren't serving / isn't serving / don't serving | Kauppa on kiinni. He eivät palvele asiakkaita. | They → aren't + -ing.
My brother ___ at the moment. He is outside. | isn't studying / aren't studying / doesn't studying | Veljeni ei opiskele tällä hetkellä. Hän on ulkona. | My brother (= he) → isn't + -ing. Study → studying.
Sorry, I ___ you. I can't hear anything. | can't hear / am not hearing / don't hearing | Anteeksi, en kuule sinua. En kuule mitään. | Hear on aistiverbi → ei yleensä kestomuotoa. Käytetään can't hear.
We ___ to the party tonight. | aren't going / isn't going / don't going | Emme mene juhliin tänä iltana. | We → aren't + going. Sovittu/suunniteltu tuleva asia kielteisenä.
You ___ your seatbelt! | aren't wearing / isn't wearing / don't wearing | Sinulla ei ole turvavyötä kiinni! | You → aren't + -ing.
The bus ___ yet. | isn't coming / aren't coming / doesn't coming | Bussi ei ole vielä tulossa. | The bus (= it) → isn't + -ing.
I ___ English at the moment. I'm doing maths. | am not studying / not studying / don't studying | En opiskele englantia tällä hetkellä. Teen matematiikkaa. | I → am not + -ing.
They ___ television. They are reading books. | aren't watching / isn't watching / don't watching | He eivät katso televisiota. He lukevat kirjoja. | They → aren't + -ing.
`;

const ENG_PROG_Q = `
___ you reading a book? | Are / Do / Is | Luetko kirjaa? | Present continuousin kysymys: am/is/are + subjekti + verbi + -ing. You → Are.
___ she watching TV? | Is / Are / Does | Katsooko hän televisiota? | She → Is + subjekti + -ing.
___ it raining outside? | Is / Are / Does | Sataako ulkona? | It → Is + subjekti + -ing.
___ they playing football? | Are / Is / Do | Pelaavatko he jalkapalloa? | They → Are + -ing.
___ I disturbing you? | Am / Is / Do | Häiritsenkö sinua? | I → Am I + -ing?
___ the baby sleeping? | Is / Are / Does | Nukkuuko vauva? | The baby (= she) → Is + -ing.
___ your parents working today? | Are / Is / Do | Ovatko vanhempasi töissä tänään? | Your parents = they → Are + -ing.
Is Tom ___ his homework? | doing / does / do | Tekeekö Tom läksyjään? | Is-kysymyksessä pääverbi saa -ing-päätteen: doing.
Are you ___ to me? | listening / listen / listens | Kuunteletko minua? | Are you + verbi + -ing.
___ we waiting for the right bus? | Are / Is / Do | Odotammeko oikeaa bussia? | We → Are + -ing.
What ___ you doing? | are / do / is | Mitä teet? | Kysymyssana + are + you + -ing.
What ___ she wearing today? | is / does / are | Mitä hänellä on tänään yllään? | Kysymyssana + is + she + -ing.
Where ___ you going? | are / do / is | Minne olet menossa? | Kysymyssana + are + you + -ing.
Why ___ he crying? | is / does / are | Miksi hän itkee? | Kysymyssana + is + he + -ing.
Who ___ you talking to? | are / do / is | Kenelle puhut? | Who + are + you + -ing.
What ___ the children doing? | are / is / do | Mitä lapset tekevät? | The children = they → are.
Why ___ it snowing in May? | is / does / are | Miksi sataa lunta toukokuussa? | It → is + -ing.
What ___ I doing wrong? | am / is / do | Mitä teen väärin? | I → am + -ing.
Which film ___ you watching? | are / do / is | Minkä elokuvan katsot? | Which film + are + you + -ing.
How ___ you getting to school today? | are / do / is | Miten pääset tänään kouluun? | How + are + you + -ing.
Is he ___ the guitar now? | playing / plays / play | Soittaako hän kitaraa nyt? | Is he + verbi + -ing.
___ Anna and Eva coming to the party? | Are / Is / Do | Tulevatko Anna ja Eva juhliin? | Anna and Eva = they → Are + -ing.
Are you ___ dinner tonight? | cooking / cook / cooks | Laitatko ruokaa tänä iltana? | Are you + verbi + -ing.
___ you having lunch at the moment? | Are / Do / Have | Syötkö lounasta juuri nyt? | At the moment → present continuous → Are you having…?
Is she ___ a new bike? | buying / buys / buy | Ostaako hän uuden pyörän? | Is she + verbi + -ing.
___ he sitting next to you? | Is / Are / Does | Istuuko hän vieressäsi? | He → Is + -ing.
`;

const ENG_PAST_POS = `
I ___ football with my friends yesterday. | played / play / plays | Pelasin eilen jalkapalloa ystävieni kanssa. | Yesterday = päättynyt aika → imperfekti. Säännöllisen verbin pääte on -ed: play → played.
She ___ to the cinema last night. | went / goes / gone | Hän meni eilen illalla elokuviin. | Last night = menneisyys → imperfekti. Go on epäsäännöllinen: go – went – gone.
We ___ pizza for dinner on Saturday. | ate / eat / eaten | Söimme lauantaina pizzaa päivälliseksi. | Epäsäännöllinen verbi: eat – ate – eaten. Imperfektissä käytetään 2. muotoa.
He ___ his keys yesterday. | lost / losed / lose | Hän hukkasi avaimensa eilen. | Epäsäännöllinen verbi: lose – lost – lost.
They ___ in Spain two years ago. | lived / live / lives | He asuivat Espanjassa kaksi vuotta sitten. | Ago = päättynyt aika → imperfekti. Live + -d = lived (e-loppuiseen verbiin lisätään vain -d).
My mum ___ a cake last weekend. | made / maked / makes | Äitini leipoi kakun viime viikonloppuna. | Make on epäsäännöllinen: make – made – made.
It ___ a lot last winter. | snowed / snow / snows | Viime talvena satoi paljon lunta. | Last winter = menneisyys → snow + -ed.
The film ___ at eight o'clock. | started / start / starts | Elokuva alkoi kahdeksalta. | Menneen ajan tapahtuma → start + -ed.
She ___ very tired after the trip. | was / were / is | Hän oli todella väsynyt matkan jälkeen. | Be-verbin imperfekti: I/he/she/it → was, you/we/they → were.
We ___ at the beach all day. | were / was / are | Olimme rannalla koko päivän. | Be-verbin imperfekti: we → were.
I ___ at home yesterday. | was / were / am | Olin eilen kotona. | Be-verbin imperfekti: I → was.
You ___ right about the test. | were / was / are | Olit oikeassa kokeesta. | Be-verbin imperfekti: you → were.
The weather ___ nice on Sunday. | was / were / is | Sää oli sunnuntaina kaunis. | The weather (= it) → was.
My parents ___ young in the 1990s. | were / was / are | Vanhempani olivat nuoria 1990-luvulla. | My parents = they → were.
He ___ the window with a ball. | broke / breaked / broken | Hän rikkoi ikkunan pallolla. | Epäsäännöllinen: break – broke – broken.
Last summer we ___ a lot of ice cream. | bought / buyed / buy | Viime kesänä ostimme paljon jäätelöä. | Epäsäännöllinen: buy – bought – bought.
She ___ me a letter last week. | wrote / writed / written | Hän kirjoitti minulle kirjeen viime viikolla. | Epäsäännöllinen: write – wrote – written.
The teacher ___ us a difficult question. | asked / ask / asks | Opettaja esitti meille vaikean kysymyksen. | Menneen ajan tapahtuma → ask + -ed.
I ___ the answer in the book. | found / finded / find | Löysin vastauksen kirjasta. | Epäsäännöllinen: find – found – found.
They ___ the match 3–1. | won / winned / win | He voittivat ottelun 3–1. | Epäsäännöllinen: win – won – won.
He ___ to school by bike yesterday. | cycled / cycles / cycle | Hän pyöräili eilen kouluun. | Yesterday → cycle + -d = cycled.
She ___ her homework before dinner. | finished / finish / finishes | Hän lopetti läksyt ennen päivällistä. | Menneen ajan tapahtuma → finish + -ed.
The dog ___ the ball into the garden. | ran / runned / run | Koira juoksi pallon perässä puutarhaan. | Epäsäännöllinen: run – ran – run.
It ___ cold, so I wore a jacket. | was / were / is | Oli kylmä, joten puin takin. | It → was. Wear – wore – worn.
We ___ a great time at the party. | had / have / has | Meillä oli hauskaa juhlissa. | Epäsäännöllinen: have – had – had.
The children ___ in the park after school. | played / plays / playing | Lapset leikkivät puistossa koulun jälkeen. | Imperfektissä verbi on sama kaikille subjekteille: play + -ed.
She ___ me last night. | called / call / calls | Hän soitti minulle eilen illalla. | Last night → call + -ed.
He ___ his bike carefully. | stopped / stoped / stops | Hän pysäytti pyöränsä varovasti. | Lyhyen verbin viimeinen konsonantti kaksinkertaistuu: stop → stopped.
She ___ at her sister and laughed. | looked / look / looks | Hän katsoi siskoaan ja nauroi. | Menneen ajan tapahtuma → look + -ed.
They ___ the bus because they were late. | missed / miss / misses | He myöhästyivät bussista, koska olivat myöhässä. | Menneen ajan tapahtuma → miss + -ed.
`;

const ENG_PAST_NEG = `
I ___ play football yesterday. | didn't / don't / wasn't | En pelannut eilen jalkapalloa. | Imperfektin kielto: didn't + verbin perusmuoto (kaikille subjekteille).
She ___ come to the party. | didn't / doesn't / wasn't | Hän ei tullut juhliin. | Didn't + perusmuoto. Didn't on sama kaikille subjekteille.
We didn't ___ the film. | like / liked / likes | Emme pitäneet elokuvasta. | Didn't-sanan jälkeen verbi on perusmuodossa. Menneen ajan muoto on jo apuverbissä (did).
He didn't ___ his homework. | do / did / done | Hän ei tehnyt läksyjään. | Didn't + perusmuoto: do (ei did eikä done).
They ___ go to school on Monday. | didn't / weren't / don't | He eivät menneet kouluun maanantaina. | Pääverbi on go → didn't + perusmuoto.
I ___ at home last night. | wasn't / didn't / weren't | En ollut kotona eilen illalla. | Be-verbin kielto imperfektissä: I → was not (wasn't). Do-apuverbiä ei käytetä.
She ___ happy about the news. | wasn't / didn't / weren't | Hän ei ollut iloinen uutisesta. | Be-verbin kielto: she → wasn't.
We ___ tired after the trip. | weren't / wasn't / didn't | Emme olleet väsyneitä matkan jälkeen. | Be-verbin kielto: we → were not (weren't).
You ___ late for the lesson. | weren't / wasn't / didn't | Et ollut myöhässä tunnille. | Be-verbin kielto: you → weren't.
It ___ cold yesterday. | wasn't / weren't / didn't | Eilen ei ollut kylmä. | Be-verbin kielto: it → wasn't.
The shops ___ open on Sunday. | weren't / wasn't / didn't | Kaupat eivät olleet auki sunnuntaina. | The shops = they → weren't. Verbinä on be.
He ___ see the sign. | didn't / wasn't / doesn't | Hän ei nähnyt kylttiä. | Pääverbi on see → didn't + perusmuoto.
My parents ___ buy a new car last year. | didn't / weren't / don't | Vanhempani eivät ostaneet uutta autoa viime vuonna. | Pääverbi on buy → didn't + perusmuoto.
We didn't ___ the bus. | take / took / taken | Emme ottaneet bussia. | Didn't + perusmuoto: take.
She didn't ___ me the truth. | tell / told / tells | Hän ei kertonut minulle totuutta. | Didn't + perusmuoto: tell (ei told).
I ___ hear the phone ring. | didn't / wasn't / don't | En kuullut puhelimen soivan. | Pääverbi on hear → didn't + perusmuoto.
The children ___ in bed at nine. | weren't / wasn't / didn't | Lapset eivät olleet sängyssä yhdeksältä. | The children = they → weren't. Verbinä on be.
He ___ eat breakfast this morning. | didn't / wasn't / doesn't | Hän ei syönyt aamiaista tänä aamuna. | Menneen ajan kielto: didn't + perusmuoto.
Tom ___ at the meeting. | wasn't / didn't / weren't | Tom ei ollut kokouksessa. | Be-verbin kielto: Tom (= he) → wasn't.
They ___ know the answer. | didn't / weren't / don't | He eivät tienneet vastausta. | Pääverbi on know → didn't + perusmuoto.
I didn't ___ you were here. | know / knew / known | En tiennyt, että olit täällä. | Didn't + perusmuoto: know (ei knew).
She didn't ___ the exam. | pass / passed / passes | Hän ei läpäissyt koetta. | Didn't + perusmuoto: pass.
It ___ rain last week. | didn't / wasn't / weren't | Viime viikolla ei satanut. | Pääverbi on rain → didn't + perusmuoto.
The film ___ very good. | wasn't / didn't / weren't | Elokuva ei ollut kovin hyvä. | Be-verbin kielto: the film (= it) → wasn't.
We ___ in London last summer. | weren't / wasn't / didn't | Emme olleet Lontoossa viime kesänä. | Be-verbin kielto: we → weren't.
`;

const ENG_PAST_Q = `
___ you play football yesterday? | Did / Do / Were | Pelasitko eilen jalkapalloa? | Imperfektin kysymys: Did + subjekti + verbin perusmuoto.
___ she go to the party? | Did / Does / Was | Meniko hän juhliin? | Did + subjekti + perusmuoto. Did on sama kaikille subjekteille.
Did he ___ the door? | close / closed / closes | Sulkiko hän oven? | Did-kysymyksessä pääverbi on perusmuodossa. Menneen ajan muoto on jo did-sanassa.
Did they ___ the match? | win / won / wins | Voittivatko he ottelun? | Did + perusmuoto: win (ei won).
___ it rain last night? | Did / Does / Was | Satoiko eilen illalla? | Pääverbi on rain → Did it rain?
___ you at home yesterday? | Were / Did / Was | Olitko eilen kotona? | Be-verbin kysymys: you → Were + subjekti.
___ she tired after the trip? | Was / Did / Were | Oliko hän väsynyt matkan jälkeen? | Be-verbin kysymys: she → Was.
___ I late? | Was / Did / Were | Olinko myöhässä? | Be-verbin kysymys: I → Was I…?
___ the shops open on Sunday? | Were / Was / Did | Olivatko kaupat auki sunnuntaina? | The shops = they → Were.
___ your parents at the concert? | Were / Was / Did | Olivatko vanhempasi konsertissa? | Your parents = they → Were.
___ the weather nice? | Was / Were / Did | Oliko sää kaunis? | The weather (= it) → Was.
Where ___ you go on holiday? | did / were / do | Minne menit lomalle? | Kysymyssana + did + subjekti + perusmuoto.
What ___ you do last weekend? | did / were / do | Mitä teit viime viikonloppuna? | Kysymyssana + did + you + perusmuoto.
When ___ the film start? | did / was / do | Milloin elokuva alkoi? | Kysymyssana + did + subjekti + perusmuoto.
Why ___ she leave early? | did / was / does | Miksi hän lähti aikaisin? | Pääverbi on leave → Why did she leave?
How ___ you get to school? | did / were / do | Miten pääsit kouluun? | How + did + you + perusmuoto.
Who ___ you meet in town? | did / were / do | Kenet tapasit kaupungilla? | Who + did + you + perusmuoto.
Where ___ you yesterday? | were / did / was | Missä olit eilen? | Verbinä on be → Where were you?
Why ___ he so angry? | was / did / were | Miksi hän oli niin vihainen? | Verbinä on be → Why was he…?
How ___ the party? | was / did / were | Millainen juhla oli? | Verbinä on be: the party (= it) → was.
Did Anna ___ her homework? | do / did / done | Teiko Anna läksynsä? | Did + perusmuoto: do.
___ they buy a new house last year? | Did / Were / Do | Ostivatko he uuden talon viime vuonna? | Pääverbi on buy → Did + subjekti + perusmuoto.
Did you ___ my message? | get / got / gets | Saitko viestini? | Did + perusmuoto: get.
Who ___ the window? | broke / did break / breaked | Kuka rikkoi ikkunan? | Kun who kysyy tekijää (subjektia), kysymyksessä ei käytetä did-apuverbiä: Who broke…?
Did it ___ a long time? | take / took / takes | Kestikö se kauan? | Did + perusmuoto: take.
___ you hear that noise? | Did / Were / Do | Kuulitko tuon äänen? | Pääverbi on hear → Did you hear…?
___ Mia and Tom at school yesterday? | Were / Was / Did | Olivatko Mia ja Tom eilen koulussa? | Mia and Tom = they → Were.
`;

const ENG_PERF_POS = `
I ___ my homework already. | have done / did / has done | Olen jo tehnyt läksyni. | Perfekti: have/has + verbin 3. muoto. I → have. Do – did – done.
She ___ in Helsinki since 2015. | has lived / lived / have lived | Hän on asunut Helsingissä vuodesta 2015. | Since + alkuhetki, tilanne jatkuu yhä → perfekti. She → has + 3. muoto.
We ___ this film three times. | have seen / saw / has seen | Olemme nähneet tämän elokuvan kolme kertaa. | Kokemus elämän varrella → perfekti. We → have + seen (see – saw – seen).
He ___ just lost his keys. | has / have / did | Hän on juuri hukannut avaimensa. | Just = juuri äsken → perfekti. He → has + 3. muoto.
They ___ here for ten years now. | have lived / lived / has lived | He ovat asuneet täällä jo kymmenen vuotta. | For + kesto ja now: tilanne jatkuu yhä → perfekti. They → have + 3. muoto.
I ___ to Sweden twice. | have been / was / has been | Olen käynyt Ruotsissa kahdesti. | Kokemus elämän varrella → perfekti. Be – was/were – been.
My brother ___ just left. | has / have / is | Veljeni on juuri lähtenyt. | Just = juuri äsken → perfekti. My brother (= he) → has + left.
She has ___ the book. | read / reads / reading | Hän on lukenut kirjan. | Perfekti: has + 3. muoto. Read – read – read (kirjoitetaan samoin, ääntäminen vaihtuu).
We ___ never eaten sushi. | have / has / did | Emme ole koskaan syöneet sushia. | Never ilmaisee ettei kokemusta ole. We → have never + 3. muoto (eaten).
The film ___ already started. | has / have / did | Elokuva on jo alkanut. | Already = jo → perfekti. The film (= it) → has + started.
I ___ lost my phone. Can you help me look for it? | have / has / did | Olen hukannut puhelimeni. Voitko auttaa etsimään sitä? | Seuraus näkyy nyt → perfekti. I → have + lost.
He has ___ in London for two years. | worked / work / works | Hän on työskennellyt Lontoossa kaksi vuotta. | Perfekti: has + 3. muoto (worked).
My parents ___ married for 20 years. | have been / has been / are | Vanhempani ovat olleet naimisissa 20 vuotta. | For 20 years, jatkuu yhä → perfekti. My parents = they → have been.
Tom has ___ his arm, so he can't play. | broken / broke / break | Tom on murtanut kätensä, joten hän ei voi pelata. | Perfekti: has + 3. muoto. Break – broke – broken.
I ___ this song a hundred times in my life. | have heard / heard / has heard | Olen kuullut tämän kappaleen sata kertaa elämäni aikana. | Kokemus elämän varrella → perfekti. I → have + heard.
She has ___ three books this month. | written / wrote / write | Hän on kirjoittanut kolme kirjaa tässä kuussa. | Perfekti: has + 3. muoto. Write – wrote – written.
We have ___ our dinner. | eaten / ate / eat | Olemme syöneet päivällisen. | Perfekti: have + 3. muoto. Eat – ate – eaten.
The children ___ grown a lot this year. | have / has / are | Lapset ovat kasvaneet paljon tänä vuonna. | The children = they → have + 3. muoto (grown).
She ___ her homework yesterday. | did / has done / have done | Hän teki läksynsä eilen. | Yesterday on päättynyt aika → imperfekti, ei perfekti. Do – did – done.
`;

const ENG_PERF_NEG = `
I ___ my homework yet. | haven't done / didn't done / hasn't done | En ole vielä tehnyt läksyjäni. | Perfektin kielto: haven't/hasn't + 3. muoto. Yet = vielä (kieltolauseen lopussa). I → haven't.
She ___ to Spain. | has never been / have never been / never was | Hän ei ole koskaan käynyt Espanjassa. | Never + perfekti: has never been. She → has.
We ___ seen that film. | haven't / hasn't / didn't | Emme ole nähneet tuota elokuvaa. | Perfektin kielto: we → haven't + seen.
He ___ called me this week. | hasn't / haven't / doesn't | Hän ei ole soittanut minulle tällä viikolla. | He → hasn't + 3. muoto.
They haven't ___ yet. | arrived / arrive / arriving | He eivät ole vielä saapuneet. | Haven't + 3. muoto (arrived).
My sister ___ eaten breakfast. | hasn't / haven't / isn't | Siskoni ei ole syönyt aamiaista. | My sister (= she) → hasn't + eaten.
I ___ never seen snow. | have / has / am | En ole koskaan nähnyt lunta. | Never on jo kielteinen sana, joten apuverbi on myönteinen: I have never seen. Ei haven't never.
The bus ___ come yet. | hasn't / haven't / isn't | Bussi ei ole vielä tullut. | The bus (= it) → hasn't + come.
You ___ finished your dinner. | haven't / hasn't / aren't | Et ole syönyt päivällistäsi loppuun. | You → haven't + 3. muoto.
We haven't ___ each other for years. | seen / saw / see | Emme ole nähneet toisiamme vuosiin. | Haven't + 3. muoto. See – saw – seen.
She hasn't ___ her room yet. | cleaned / clean / cleaning | Hän ei ole vielä siivonnut huonettaan. | Hasn't + 3. muoto (cleaned).
They ___ lived here for long. | haven't / hasn't / didn't | He eivät ole asuneet täällä pitkään. | They → haven't + lived.
I haven't ___ him since June. | seen / saw / see | En ole nähnyt häntä kesäkuun jälkeen. | Since + alkuhetki → perfekti. Haven't + 3. muoto.
It ___ rained for weeks. | hasn't / haven't / doesn't | Ei ole satanut viikkoihin. | It → hasn't + rained.
He hasn't ___ his homework. | done / did / do | Hän ei ole tehnyt läksyjään. | Hasn't + 3. muoto. Do – did – done.
We ___ decided yet. | haven't / hasn't / aren't | Emme ole vielä päättäneet. | We → haven't + decided.
My friends ___ called yet. | haven't / hasn't / didn't | Ystäväni eivät ole vielä soittaneet. | My friends = they → haven't + called.
She hasn't ___ me the answer. | given / gave / give | Hän ei ole antanut minulle vastausta. | Hasn't + 3. muoto. Give – gave – given.
I ___ been to Japan. | haven't / hasn't / wasn't | En ole käynyt Japanissa. | I → haven't + been.
He ___ finished yet. | hasn't / haven't / didn't | Hän ei ole vielä valmis. | He → hasn't + finished.
`;

const ENG_PERF_Q = `
___ you finished your homework? | Have / Has / Did | Oletko tehnyt läksysi loppuun? | Perfektin kysymys: Have/Has + subjekti + 3. muoto. You → Have.
___ she ever been to Italy? | Has / Have / Did | Onko hän koskaan käynyt Italiassa? | She → Has + subjekti + 3. muoto.
Have they ___ yet? | arrived / arrive / arriving | Ovatko he jo saapuneet? | Have + subjekti + 3. muoto (arrived).
___ your brother seen this film? | Has / Have / Did | Onko veljesi nähnyt tämän elokuvan? | Your brother (= he) → Has.
Has he ___ his room? | cleaned / clean / cleaning | Onko hän siivonnut huoneensa? | Has + subjekti + 3. muoto.
___ the children had lunch? | Have / Has / Did | Ovatko lapset syöneet lounasta? | The children = they → Have.
How long ___ you lived here? | have / did / are | Kuinka kauan olet asunut täällä? | How long + perfekti: have + you + 3. muoto.
How long ___ she known him? | has / did / does | Kuinka kauan hän on tuntenut hänet? | How long + has + she + 3. muoto.
Where ___ you been? | have / did / has | Missä olet ollut? | Where + have + you + been.
What ___ he done? | has / did / does | Mitä hän on tehnyt? | What + has + he + 3. muoto (done).
Have you ___ my keys? | seen / saw / see | Oletko nähnyt avaimiani? | Have you + 3. muoto. See – saw – seen.
Has it ___ yet? | stopped / stop / stopping | Onko se jo lakannut? | Has + it + 3. muoto.
___ we met before? | Have / Has / Did | Olemmeko tavanneet aiemmin? | We → Have + 3. muoto.
___ they ever eaten sushi? | Have / Has / Did | Ovatko he koskaan syöneet sushia? | Ever + perfekti. They → Have.
Have you ever ___ a horse? | ridden / rode / ride | Oletko koskaan ratsastanut hevosella? | Have you ever + 3. muoto. Ride – rode – ridden.
How many books ___ you read this year? | have / are / were | Montako kirjaa olet lukenut tänä vuonna? | How many … + have you + 3. muoto.
Why ___ she left? | has / did / does | Miksi hän on lähtenyt? | Why + has + she + 3. muoto.
Has anyone ___ my phone? | seen / saw / see | Onko kukaan nähnyt puhelintani? | Anyone (= he/she) → Has + 3. muoto.
___ you tried this cake? | Have / Has / Did | Oletko maistanut tätä kakkua? | You → Have + 3. muoto.
`;

const ENG_PERFPROG_POS = `
I ___ for you for an hour. | have been waiting / am waiting / have wait | Olen odottanut sinua tunnin. | Kestoperfekti: have/has + been + -ing. For an hour: alkoi aiemmin ja jatkuu yhä.
It ___ all day. | has been raining / is raining / rains | On satanut koko päivän. | Kestoperfekti: it → has been + -ing.
She ___ English since 2020. | has been learning / learns / has learn | Hän on opiskellut englantia vuodesta 2020. | Since + alkuhetki, jatkuu yhä → has been + -ing.
We ___ in this town for years. | have been living / are living / have live | Olemme asuneet tässä kaupungissa vuosia. | For years → have been + -ing.
They ___ football since lunch. | have been playing / are playing / has been playing | He ovat pelanneet jalkapalloa lounaasta asti. | They → have been + -ing.
He is tired because he ___ all day. | has been working / works / is working | Hän on väsynyt, koska hän on työskennellyt koko päivän. | Syy on juuri päättynyt toiminta → kestoperfekti.
My eyes hurt. I ___ at the screen too long. | have been looking / am looking / have look | Silmäni ovat kipeät. Olen katsonut ruutua liian kauan. | Seuraus näkyy nyt → have been + -ing.
How long ___ you been waiting? | have / did / do | Kuinka kauan olet odottanut? | How long + have you been + -ing.
She has been ___ since morning. | studying / study / studied | Hän on opiskellut aamusta asti. | Has been + -ing. Study → studying.
The children ___ in the garden all afternoon. | have been playing / are playing / has been playing | Lapset ovat leikkineet puutarhassa koko iltapäivän. | The children = they → have been + -ing.
I have been ___ you all morning! | calling / call / called | Olen soittanut sinulle koko aamun! | Have been + -ing.
Tom ___ the guitar for three years. | has been playing / plays / have been playing | Tom on soittanut kitaraa kolme vuotta. | For three years → has been + -ing.
We have been ___ the house since May. | painting / paint / painted | Olemme maalanneet taloa toukokuusta asti. | Have been + -ing.
Her hands are dirty. She ___ in the garden. | has been working / is working / has working | Hänen kätensä ovat likaiset. Hän on työskennellyt puutarhassa. | Seuraus näkyy nyt → has been + -ing.
It has been ___ since Monday. | snowing / snow / snowed | On satanut lunta maanantaista asti. | Has been + -ing.
My parents ___ for a new house for months. | have been looking / are looking / has been looking | Vanhempani ovat etsineet uutta taloa kuukausia. | For months → have been + -ing.
I ___ to learn the piano for a year. | have been trying / am trying / have trying | Olen yrittänyt oppia pianonsoittoa vuoden. | For a year → have been trying.
You look hot. ___ you been running? | Have / Did / Do | Näytät kuumalta. Oletko juossut? | Have you been + -ing.
She ___ on that report all week. | has been working / works / have been working | Hän on tehnyt sitä raporttia koko viikon. | All week → has been + -ing.
`;

const ENG_PERFPROG_NEG = `
I ___ for you for long. | haven't been waiting / am not waiting / didn't waiting | En ole odottanut sinua kauan. | Kestoperfektin kielto: haven't/hasn't + been + -ing. I → haven't.
It ___ all day. | has been raining / is raining / rains | On satanut koko päivän. | Kestoperfekti: it → has been + -ing.
She ___ English for long. | hasn't been learning / haven't been learning / isn't learning | Hän ei ole opiskellut englantia kauan. | She → hasn't been + -ing.
We ___ here long. | haven't been living / hasn't been living / aren't living | Emme ole asuneet täällä kauan. | We → haven't been + -ing.
They haven't been ___ well recently. | feeling / feel / felt | He eivät ole voineet hyvin viime aikoina. | Haven't been + -ing.
He hasn't been ___ much sleep. | getting / get / got | Hän ei ole saanut paljon unta. | Hasn't been + -ing. Get → getting.
I haven't been ___ lately. | studying / study / studied | En ole opiskellut viime aikoina. | Haven't been + -ing. Study → studying.
My brother ___ his homework for hours. | hasn't been doing / haven't been doing / isn't doing | Veljeni ei ole tehnyt läksyjään tuntikausiin. | My brother (= he) → hasn't been + -ing.
The kids ___ outside today. | haven't been playing / hasn't been playing / aren't playing | Lapset eivät ole leikkineet ulkona tänään. | The kids = they → haven't been + -ing.
You ___ listening to me! | haven't been / hasn't been / aren't been | Et ole kuunnellut minua! | You → haven't been + -ing.
She hasn't been ___ well. | feeling / feel / felt | Hän ei ole voinut hyvin. | Hasn't been + -ing.
We haven't been ___ much TV lately. | watching / watch / watched | Emme ole katsoneet paljon televisiota viime aikoina. | Haven't been + -ing.
It ___ working since yesterday. | hasn't been / haven't been / isn't been | Se ei ole toiminut eilisestä asti. | It → hasn't been + -ing.
My parents ___ travelling this year. | haven't been / hasn't been / aren't been | Vanhempani eivät ole matkustaneet tänä vuonna. | My parents = they → haven't been + -ing.
I ___ sleeping well this week. | haven't been / hasn't been / am not been | En ole nukkunut hyvin tällä viikolla. | I → haven't been + -ing.
He hasn't been ___ the guitar much. | playing / play / played | Hän ei ole soittanut kitaraa paljon. | Hasn't been + -ing.
`;

const ENG_PERFPROG_Q = `
How long ___ you been waiting? | have / has / are | Kuinka kauan olet odottanut? | Kestoperfektin kysymys: How long + have/has + subjekti + been + -ing. You → have.
How long ___ she been studying English? | has / have / is | Kuinka kauan hän on opiskellut englantia? | She → has.
___ it been raining all day? | Has / Have / Is | Onko satanut koko päivän? | It → Has + it + been + -ing.
Have you been ___ for me? | waiting / wait / waited | Oletko odottanut minua? | Have you been + -ing.
___ they been playing football? | Have / Has / Are | Ovatko he pelanneet jalkapalloa? | They → Have + they + been + -ing.
What ___ you been doing? | have / has / are | Mitä olet tehnyt? | What + have + you + been + -ing.
What has she been ___? | doing / do / did | Mitä hän on tehnyt? | Has she been + -ing.
Where ___ you been staying? | have / has / are | Missä olet yöpynyt? | Where + have + you + been + -ing.
How long ___ they been living here? | have / has / are | Kuinka kauan he ovat asuneet täällä? | They → have.
Has he been ___ hard? | working / work / worked | Onko hän tehnyt töitä ahkerasti? | Has he been + -ing.
Why ___ you been crying? | have / has / did | Miksi olet itkenyt? | Why + have you been + -ing.
Have you been ___ well? | feeling / feel / felt | Oletko voinut hyvin? | Have you been + -ing.
How long ___ it been snowing? | has / have / is | Kuinka kauan on satanut lunta? | It → has.
___ your parents been travelling? | Have / Has / Are | Ovatko vanhempasi matkustaneet? | Your parents = they → Have.
___ he been working here long? | Has / Have / Is | Onko hän työskennellyt täällä kauan? | He → Has + he + been + -ing.
How long have you been ___ the guitar? | playing / play / played | Kuinka kauan olet soittanut kitaraa? | Have you been + -ing.
Who ___ been using my laptop? | has / did / does | Kuka on käyttänyt kannettavaani? | Who (= he/she) → has been + -ing.
`;

const ENG_PLUP_POS = `
When we arrived, the film ___ already started. | had / has / was | Kun saavuimme, elokuva oli jo alkanut. | Pluskvamperfekti: had + 3. muoto. Tapahtui ennen toista mennyttä tapahtumaa.
She ___ left before I called. | had / has / was | Hän oli lähtenyt ennen kuin soitin. | Aikaisempi menneisyys → had + left.
I ___ never seen snow before I moved to Finland. | had / have / was | En ollut koskaan nähnyt lunta ennen kuin muutin Suomeen. | Ennen toista mennyttä hetkeä → had + 3. muoto.
After they ___ dinner, they watched TV. | had eaten / have eaten / ate | Syötyään he katsoivat televisiota. | Ensin syötiin, sitten katsottiin → aiempi teko pluskvamperfektiin.
He was late because he ___ the bus. | had missed / has missed / miss | Hän oli myöhässä, koska oli myöhästynyt bussista. | Syy tapahtui ennen myöhästymistä → had + missed.
We ___ finished our homework when she arrived. | had / has / have | Olimme tehneet läksymme, kun hän saapui. | Had + 3. muoto.
She said she ___ the book before. | had read / has read / reads | Hän sanoi lukeneensa kirjan aiemmin. | Kerrottu asia tapahtui ennen sanomista → had + read.
They ___ already gone when we got there. | had / have / would | He olivat jo menneet, kun pääsimme sinne. | Had + gone.
I couldn't get in because I ___ my keys. | had lost / have lost / has lost | En päässyt sisään, koska olin hukannut avaimeni. | Hukkaaminen oli ennen yritystä → had lost.
By the time we arrived, they ___ eaten everything. | had / have / has | Kun saavuimme, he olivat syöneet kaiken. | By the time … → pluskvamperfekti: had + eaten.
The teacher was angry because we ___ our homework. | hadn't done / haven't done / didn't done | Opettaja oli vihainen, koska emme olleet tehneet läksyjä. | Pluskvamperfektin kielto: hadn't + 3. muoto.
He ___ studied hard, so he passed the test. | had / has / was | Hän oli opiskellut ahkerasti, joten hän läpäisi kokeen. | Had + studied.
She looked sad. She ___ bad news. | had heard / has heard / hears | Hän näytti surulliselta. Hän oli kuullut huonoja uutisia. | Syy oli ennen näkyvää tilaa → had + heard.
Before he became a doctor, he ___ in a shop. | had worked / has worked / was work | Ennen kuin hänestä tuli lääkäri, hän oli työskennellyt kaupassa. | Aiempi vaihe → had + worked.
When I got home, my parents ___ gone to bed. | had / have / were | Kun tulin kotiin, vanhempani olivat menneet nukkumaan. | My parents = they; had on sama kaikille subjekteille.
We ___ been friends for years before we moved. | had / have / were | Olimme olleet ystäviä vuosia ennen kuin muutimme. | Had been (= olimme olleet).
`;

const ENG_PLUP_NEG = `
When I arrived, she ___ left yet. | hadn't / hasn't / didn't | Kun saavuin, hän ei ollut vielä lähtenyt. | Pluskvamperfektin kielto: hadn't + 3. muoto.
We ___ eaten, so we were hungry. | hadn't / haven't / didn't | Emme olleet syöneet, joten meillä oli nälkä. | Hadn't + eaten.
He ___ seen the film before. | hadn't / hasn't / wasn't | Hän ei ollut nähnyt elokuvaa aiemmin. | Hadn't + 3. muoto. Hadn't on sama kaikille subjekteille.
They ___ finished when the teacher came in. | hadn't / haven't / weren't | He eivät olleet valmiita, kun opettaja tuli sisään. | Hadn't + finished.
I ___ never been to Italy before last year. | had / have / was | En ollut koskaan käynyt Italiassa ennen viime vuotta. | Never on jo kielteinen → apuverbi myönteinen: had never been.
She was upset because I ___ called her. | hadn't / haven't / didn't | Hän oli pahoillaan, koska en ollut soittanut hänelle. | Hadn't + called.
We ___ booked a table, so we waited. | hadn't / haven't / weren't | Emme olleet varanneet pöytää, joten odotimme. | Hadn't + booked.
The train ___ arrived when we reached the station. | hadn't / hasn't / wasn't | Juna ei ollut vielä saapunut, kun pääsimme asemalle. | Hadn't + arrived.
He ___ slept, so he was very tired. | hadn't / hasn't / didn't | Hän ei ollut nukkunut, joten hän oli todella väsynyt. | Hadn't + slept.
I realised I ___ locked the door. | hadn't / haven't / wasn't | Tajusin, etten ollut lukinnut ovea. | Hadn't + locked.
She ___ ever seen the sea before. | had never / has never / never was | Hän ei ollut koskaan ennen nähnyt merta. | Had never + 3. muoto.
The kids ___ done their homework, so they couldn't play. | hadn't / haven't / didn't | Lapset eivät olleet tehneet läksyjä, joten he eivät saaneet leikkiä. | Hadn't + done.
They ___ told anyone about the plan. | hadn't / hasn't / weren't | He eivät olleet kertoneet kenellekään suunnitelmasta. | Hadn't + told.
He ___ understood the question. | hadn't / hasn't / didn't | Hän ei ollut ymmärtänyt kysymystä. | Hadn't + understood.
We ___ met before that day. | hadn't / haven't / didn't | Emme olleet tavanneet ennen sitä päivää. | Hadn't + met.
My mum ___ cooked yet when we got home. | hadn't / hasn't / wasn't | Äitini ei ollut vielä laittanut ruokaa, kun tulimme kotiin. | Hadn't + cooked.
`;

const ENG_PLUP_Q = `
___ you finished your homework before dinner? | Had / Have / Did | Olitko tehnyt läksysi ennen päivällistä? | Pluskvamperfektin kysymys: Had + subjekti + 3. muoto.
___ she left when you arrived? | Had / Has / Was | Oliko hän lähtenyt, kun saavuit? | Had + she + left. Had on sama kaikille subjekteille.
Had they ___ before the lesson started? | arrived / arrive / arriving | Olivatko he saapuneet ennen tunnin alkua? | Had + subjekti + 3. muoto.
___ you ever seen snow before you came here? | Had / Have / Did | Olitko koskaan nähnyt lunta ennen kuin tulit tänne? | Aikaisempi menneisyys → Had you ever seen…?
___ he already eaten when you called? | Had / Has / Did | Oliko hän jo syönyt, kun soitit? | Had + he + eaten.
Had the film ___ when you got there? | started / start / starting | Oliko elokuva alkanut, kun pääsit sinne? | Had + subjekti + 3. muoto.
Where ___ you been before that? | had / did / do | Missä olit ollut sitä ennen? | Where + had + you + been.
What ___ they done before the party? | had / did / do | Mitä he olivat tehneet ennen juhlia? | What + had + they + 3. muoto.
Why ___ she gone home early? | had / did / does | Miksi hän oli mennyt aikaisin kotiin? | Why + had + she + 3. muoto.
How long ___ they known each other before they married? | had / did / do | Kuinka kauan he olivat tunteneet toisensa ennen naimisiinmenoa? | How long + had + they + 3. muoto.
Had you ___ him before? | met / meet / meeting | Olitko tavannut hänet aiemmin? | Had you + 3. muoto.
___ the train left before you reached the station? | Had / Has / Did | Oliko juna lähtenyt ennen kuin pääsit asemalle? | Had + the train + left.
Had he ___ the answer? | known / knew / know | Oliko hän tiennyt vastauksen? | Had he + 3. muoto. Know – knew – known.
___ everyone gone home by ten? | Had / Has / Did | Olivatko kaikki menneet kotiin kymmeneen mennessä? | Had + everyone + gone.
Who ___ eaten my sandwich? | had / did / does | Kuka oli syönyt voileipäni? | Who + had + 3. muoto.
Had they ___ the tickets before they left? | bought / buy / buying | Olivatko he ostaneet liput ennen lähtöä? | Had they + 3. muoto. Buy – bought – bought.
`;

const ENG_PLUPPROG_POS = `
He was out of breath because he ___ running. | had been / has been / have been | Hän oli hengästynyt, koska hän oli juossut. | Kestopluskvamperfekti: had + been + -ing. Toiminta oli jatkunut ennen toista menneen ajan hetkeä.
We ___ waiting for two hours when the bus came. | had been / has been / have been | Olimme odottaneet kaksi tuntia, kun bussi tuli. | Had been + -ing.
Her eyes were red. She ___ crying. | had been / has been / have been | Hänen silmänsä olivat punaiset. Hän oli itkenyt. | Seuraus oli näkyvissä menneessä → had been + -ing.
It ___ raining all night, so the ground was wet. | had been / has been / have been | Oli satanut koko yön, joten maa oli märkä. | Had been + -ing.
They ___ playing for an hour when it started to rain. | had been / has been / have been | He olivat pelanneet tunnin, kun alkoi sataa. | Had been + -ing.
I ___ working all day, so I was tired. | had been / has been / have been | Olin tehnyt töitä koko päivän, joten olin väsynyt. | Had been + -ing. I:lle ja muillekin subjekteille had on sama.
She ___ studying for hours before the exam. | had been / has been / have been | Hän oli opiskellut tuntikausia ennen koetta. | Had been + -ing.
My hands were cold because I ___ standing outside. | had been / has been / have been | Käteni olivat kylmät, koska olin seissyt ulkona. | Had been + -ing.
The kids ___ playing outside all day. | had been / has been / have been | Lapset olivat leikkineet ulkona koko päivän. | Had been + -ing.
How long ___ you been waiting when she arrived? | had / did / do | Kuinka kauan olit odottanut, kun hän saapui? | How long + had + you + been + -ing.
He had been ___ for a job for months. | looking / look / looked | Hän oli etsinyt työtä kuukausia. | Had been + -ing.
We had been ___ the house before we moved in. | painting / paint / painted | Olimme maalanneet taloa ennen kuin muutimme sinne. | Had been + -ing.
She ___ been learning Spanish for a year before she moved to Madrid. | had / have / did | Hän oli opiskellut espanjaa vuoden ennen muuttoaan Madridiin. | Had been learning.
The road was wet. It ___ snowing. | had been / has been / have been | Tie oli märkä. Oli satanut lunta. | Had been + -ing.
They had been ___ all night. | talking / talk / talked | He olivat jutelleet koko yön. | Had been + -ing.
I had been ___ for you for an hour before you called. | waiting / wait / waited | Olin odottanut sinua tunnin ennen kuin soitit. | Had been + -ing.
`;

const ENG_PLUPPROG_NEG = `
I was fresh because I ___ working all day. | hadn't been / hasn't been / haven't been | Olin pirteä, koska en ollut tehnyt töitä koko päivää. | Kestopluskvamperfektin kielto: hadn't been + -ing.
She ___ sleeping well, so she was tired. | hadn't been / hasn't been / haven't been | Hän ei ollut nukkunut hyvin, joten hän oli väsynyt. | Hadn't been + -ing.
We ___ waiting long when the bus arrived. | hadn't been / hasn't been / haven't been | Emme olleet odottaneet kauan, kun bussi tuli. | Hadn't been + -ing.
It ___ raining, so the ground was dry. | hadn't been / hasn't been / haven't been | Ei ollut satanut, joten maa oli kuiva. | Hadn't been + -ing.
He hadn't been ___ attention. | paying / pay / paid | Hän ei ollut kiinnittänyt huomiota. | Hadn't been + -ing.
They ___ been working hard, so they weren't tired. | hadn't / haven't / didn't | He eivät olleet tehneet ahkerasti töitä, joten he eivät olleet väsyneitä. | Hadn't been working.
I hadn't been ___ well before I went to the doctor. | feeling / feel / felt | En ollut voinut hyvin ennen kuin menin lääkäriin. | Hadn't been + -ing.
We ___ been living there long when we left. | hadn't / haven't / didn't | Emme olleet asuneet siellä kauan, kun lähdimme. | Hadn't been living.
She hadn't been ___ much before the exam. | studying / study / studied | Hän ei ollut opiskellut paljon ennen koetta. | Hadn't been + -ing.
The children ___ been behaving well. | hadn't / haven't / didn't | Lapset eivät olleet käyttäytyneet hyvin. | Hadn't been behaving.
He ___ been listening, so he didn't know. | hadn't / haven't / didn't | Hän ei ollut kuunnellut, joten hän ei tiennyt. | Hadn't been listening.
I hadn't been ___ for long when you called. | sleeping / sleep / slept | En ollut nukkunut kauan, kun soitit. | Hadn't been + -ing.
`;

const ENG_PLUPPROG_Q = `
How long ___ you been waiting when she arrived? | had / did / do | Kuinka kauan olit odottanut, kun hän saapui? | Kestopluskvamperfektin kysymys: How long + had + subjekti + been + -ing.
___ it been raining before you left? | Had / Did / Does | Oliko satanut ennen kuin lähdit? | Had + it + been + -ing.
Had she been ___ long? | waiting / wait / waited | Oliko hän odottanut kauan? | Had she been + -ing.
___ they been playing for long when it started to rain? | Had / Did / Do | Olivatko he pelanneet kauan, kun alkoi sataa? | Had + they + been + -ing.
What ___ you been doing before I came? | had / did / do | Mitä olit tehnyt ennen kuin tulin? | What + had + you + been + -ing.
Why ___ he been crying? | had / did / does | Miksi hän oli itkenyt? | Why + had + he + been + -ing.
How long ___ she been working there before she quit? | had / did / does | Kuinka kauan hän oli työskennellyt siellä ennen irtisanoutumistaan? | How long + had + she + been + -ing.
Had you been ___ hard before the test? | studying / study / studied | Olitko opiskellut ahkerasti ennen koetta? | Had you been + -ing.
Where ___ they been living before? | had / did / do | Missä he olivat asuneet aiemmin? | Where + had + they + been + -ing.
___ he been waiting long when you arrived? | Had / Did / Does | Oliko hän odottanut kauan, kun saavuit? | Had + he + been + -ing.
Had the children been ___ outside? | playing / play / played | Olivatko lapset leikkineet ulkona? | Had + subjekti + been + -ing.
Who ___ been using my computer? | had / did / does | Kuka oli käyttänyt tietokonettani? | Who + had + been + -ing.
`;

const ENG_SIMPLE = `
My brother ___ football every Saturday. | plays / play / playing | Veljeni pelaa jalkapalloa joka lauantai. | Toistuva tapa (every Saturday) → present simple. He/she/it-muodossa verbiin lisätään -s.
We ___ in a small town near Tampere. | live / lives / living | Asumme pienessä kaupungissa Tampereen lähellä. | Pysyvä asia → present simple. We-muodossa verbi on perusmuodossa ilman -s:ää.
Water ___ at 100 degrees. | boils / boil / boiling | Vesi kiehuu sadassa asteessa. | Yleinen totuus → present simple. Subjektina on water (= it), joten verbiin tulee -s.
___ your sister speak French? | Does / Do / Is | Puhuuko siskosi ranskaa? | Present simplen kysymys: he/she/it → does + verbin perusmuoto.
I ___ like coffee. | don't / doesn't / not | En pidä kahvista. | Present simplen kielto: I/you/we/they → don't + perusmuoto.
Tom ___ eat meat. | doesn't / don't / isn't | Tom ei syö lihaa. | He/she/it → doesn't + perusmuoto. Kun doesn't on mukana, verbiin ei tule -s:ää.
It ___ a lot in Lapland in winter. | snows / snow / snowing | Lapissa sataa talvella paljon lunta. | Toistuva asia → present simple. Subjektina on it, joten verbiin tulee -s.
We ___ to Spain last summer. | went / go / have gone | Matkustimme Espanjaan viime kesänä. | Tarkka mennyt aika (last summer) → past simple. go – went – gone.
I ___ a great film yesterday. | saw / see / have seen | Näin eilen loistavan elokuvan. | Yesterday = päättynyt aika → past simple. see – saw – seen.
___ you call your grandmother last night? | Did / Do / Have | Soititko isoäidillesi eilen illalla? | Past simplen kysymys: did + verbin perusmuoto.
She ___ come to the party last Friday. | didn't / doesn't / hasn't | Hän ei tullut juhliin viime perjantaina. | Past simplen kielto: didn't + perusmuoto.
Did you ___ the news? | hear / heard / hears | Kuulitko uutiset? | Did-kysymyksessä pääverbi on perusmuodossa, koska did kertoo jo menneen ajan.
When I was a child, I ___ in Oulu. | lived / live / have lived | Kun olin lapsi, asuin Oulussa. | Päättynyt aika menneisyydessä (when I was a child) → past simple.
They ___ the house two years ago. | bought / buyed / have bought | He ostivat talon kaksi vuotta sitten. | Ago = päättynyt aika → past simple. buy – bought – bought (epäsäännöllinen).
Shakespeare ___ many famous plays. | wrote / writed / has wrote | Shakespeare kirjoitti monta kuuluisaa näytelmää. | Päättynyt asia menneisyydessä → past simple. write – wrote – written.
I have never ___ sushi. | eaten / ate / eat | En ole koskaan syönyt sushia. | Present perfect = have/has + verbin 3. muoto. eat – ate – eaten.
She ___ in Helsinki since 2015. | has lived / lived / lives | Hän on asunut Helsingissä vuodesta 2015. | Since + alkuhetki: tilanne jatkuu yhä → present perfect (has + 3. muoto).
___ you ever been to London? | Have / Did / Were | Oletko koskaan käynyt Lontoossa? | Ever = koskaan elämäsi aikana → present perfect: have + subjekti + been.
We ___ known each other for ten years. | have / has / are | Olemme tunteneet toisemme kymmenen vuotta. | Present perfect: I/you/we/they-muodossa have + 3. muoto (known).
I can't find my keys. I ___ them. | have lost / lose / losing | En löydä avaimiani. Olen hukannut ne. | Mennyt teko, jonka seuraus näkyy nyt → present perfect.
He has already ___ his homework. | done / did / do | Hän on jo tehnyt läksynsä. | Present perfect: has + 3. muoto. do – did – done.
They haven't arrived ___. | yet / already / ago | He eivät ole vielä saapuneet. | Kieltolauseen lopussa yet = vielä. Ago kuuluu past simpleen.
My parents ___ been married for 25 years. | have / has / are | Vanhempani ovat olleet naimisissa 25 vuotta. | Subjektina on my parents (= they), joten käytetään muotoa have + been.
Look! Someone ___ the window. | has broken / have broken / breaking | Katso! Joku on rikkonut ikkunan. | Subjektina on someone (= he/she), joten käytetään muotoa has. break – broke – broken.
How long ___ you had this phone? | have / did / do | Kuinka kauan sinulla on ollut tämä puhelin? | How long + tilanne joka jatkuu yhä → present perfect.
When we got to the station, the train had already ___. | left / leave / leaving | Kun pääsimme asemalle, juna oli jo lähtenyt. | Past perfect (had + 3. muoto): tapahtui ennen toista mennyttä tapahtumaa. leave – left – left.
I ___ never seen snow before I moved to Finland. | had / have / was | En ollut koskaan nähnyt lunta ennen kuin muutin Suomeen. | Aikaisempi menneisyys (ennen muuttoa) → past perfect: had + 3. muoto.
After they ___ dinner, they watched TV. | had eaten / have eaten / eats | Syötyään päivällisen he katsoivat televisiota. | Ensin syötiin, sitten katsottiin → aikaisempi teko past perfectiin.
She was tired because she ___ badly. | had slept / has slept / sleeps | Hän oli väsynyt, koska oli nukkunut huonosti. | Huono uni oli ennen väsymystä (was) → past perfect.
The film ___ already started when we arrived. | had / has / was | Elokuva oli jo alkanut, kun saavuimme. | Alkoi ennen saapumista → past perfect: had + 3. muoto.
`;

const ENG_CONTINUOUS = `
Be quiet! The baby ___. | is sleeping / sleeps / sleeping | Ole hiljaa! Vauva nukkuu. | Juuri nyt käynnissä → present continuous: am/is/are + -ing.
Look! It ___ outside. | is snowing / snows / snowing | Katso! Ulkona sataa lunta. | Look! = tapahtuu nyt → present continuous.
I ___ a book about space at the moment. | am reading / read / reading | Luen parhaillaan kirjaa avaruudesta. | At the moment = parhaillaan → present continuous. Subjektina on I, joten käytetään muotoa am.
What ___ you doing right now? | are / do / is | Mitä teet juuri nyt? | Present continuous -kysymys: are + you + -ing.
They ___ watching TV. They are playing cards. | aren't / don't / isn't | He eivät katso televisiota. He pelaavat korttia. | Present continuousin kielto: am/is/are + not + -ing.
Listen! Someone ___ the piano. | is playing / play / playing | Kuuntele! Joku soittaa pianoa. | Listen! = nyt → present continuous. Subjektina on someone, joten käytetään muotoa is.
My sister ___ in London this month. | is working / working / are working | Siskoni on töissä Lontoossa tämän kuun. | Tilapäinen tilanne (this month) → present continuous. Subjektina on my sister (= she), joten käytetään muotoa is.
Why ___ you laughing? | are / do / is | Miksi naurat? | Present continuous: are + you + -ing.
Shh! I ___ to the radio. | am listening / listen / listening | Hys! Kuuntelen radiota. | Juuri nyt käynnissä → present continuous. Subjektina on I, joten käytetään muotoa am.
I usually ___ to school, but today I am taking the bus. | walk / am walking / walking | Kävelen yleensä kouluun, mutta tänään menen bussilla. | Usually = tapa → present simple. Today = nyt → present continuous.
Every morning she ___ coffee, but this morning she is drinking tea. | drinks / is drinking / drinking | Joka aamu hän juo kahvia, mutta tänä aamuna hän juo teetä. | Every morning = toistuva tapa → present simple.
I ___ you are right. | think / am thinking / thinking | Minusta olet oikeassa. | Tilaverbejä (think = olla mieltä, know, like, want) ei yleensä käytetä kestomuodossa.
I ___ what you mean. | know / am knowing / knowing | Tiedän, mitä tarkoitat. | Know on tilaverbi → ei kestomuotoa, vaan present simple.
He ___ a new car. It's red. | has / is having / having | Hänellä on uusi auto. Se on punainen. | Have = omistaa on tilaverbi → present simple.
I ___ dinner when the phone rang. | was cooking / am cooking / have cooking | Olin laittamassa ruokaa, kun puhelin soi. | Kesken ollut toiminta, joka keskeytyi → past continuous: was/were + -ing.
What were you doing at eight last night? – I ___ TV. | was watching / am watching / watch | Mitä teit eilen kello kahdeksan? – Katsoin televisiota. | Käynnissä tiettynä hetkenä menneisyydessä → past continuous.
While we ___ in the park, it started to rain. | were walking / are walking / walk | Kun kävelimme puistossa, alkoi sataa. | While + käynnissä ollut toiminta → past continuous. Subjektina on we, joten käytetään muotoa were.
They ___ playing football when the accident happened. | were / was / are | He pelasivat jalkapalloa, kun onnettomuus tapahtui. | Past continuous: they → were + -ing.
The sun ___ and the birds were singing. | was shining / is shining / shines | Aurinko paistoi ja linnut lauloivat. | Taustakuvaus menneisyydessä → past continuous.
She was ___ a shower when I called. | having / have / had | Hän oli suihkussa, kun soitin. | Past continuous: was + -ing-muoto.
At midnight last night we ___ still dancing. | were / was / are | Eilen keskiyöllä tanssimme vielä. | Last night = menneisyys → past continuous. Subjektina on we, joten käytetään muotoa were.
I ___ waiting for you for an hour! | have been / am / has been | Olen odottanut sinua tunnin! | Alkoi aiemmin ja jatkuu yhä (for an hour) → present perfect continuous: have been + -ing.
It has been ___ all day. | raining / rain / rained | On satanut koko päivän. | Present perfect continuous: has been + -ing.
How long have you ___ learning English? | been / being / be | Kuinka kauan olet opiskellut englantia? | Present perfect continuous: have + been + -ing.
She is tired because she ___ running. | has been / have been / is been | Hän on väsynyt, koska hän on juossut. | Juuri päättynyt toiminta, jonka seuraus näkyy → present perfect continuous. Subjektina on she, joten käytetään muotoa has been.
We have been ___ the house since May. | painting / paint / painted | Olemme maalanneet taloa toukokuusta asti. | Have been + -ing: toiminta jatkuu yhä (since May).
They ___ playing games since this morning. | have been / are / has been | He ovat pelanneet pelejä aamusta asti. | Since + jatkuu yhä → present perfect continuous. Subjektina on they, joten käytetään muotoa have been.
He was out of breath because he ___ been running. | had / has / was | Hän oli hengästynyt, koska hän oli juossut. | Ennen toista menneisyyden hetkeä jatkunut toiminta → past perfect continuous: had been + -ing.
We had been ___ for two hours when the bus finally came. | waiting / wait / waited | Olimme odottaneet kaksi tuntia, kun bussi vihdoin tuli. | Past perfect continuous: had been + -ing.
Her eyes were red. She had ___ crying. | been / being / be | Hänen silmänsä olivat punaiset. Hän oli itkenyt. | Past perfect continuous: had + been + -ing.
`;

const ENG_FUTURE = `
I think it ___ be sunny tomorrow. | will / is / going | Luulen, että huomenna on aurinkoista. | Arvaus tai mielipide tulevasta (I think) → will + perusmuoto.
It's cold in here. – I ___ close the window. | will / am / going to | Täällä on kylmä. – Suljen ikkunan. | Päätös syntyy puhehetkellä → will.
Maybe I ___ see you at the party. | will / am / going | Ehkä näen sinut juhlissa. | Epävarma ennuste (maybe) → will + perusmuoto.
Don't worry. I ___ tell anyone. | won't / willn't / don't will | Älä huoli. En kerro kenellekään. | Willin kielto on won't (= will not).
I promise I ___ call you tomorrow. | will / am / going | Lupaan soittaa sinulle huomenna. | Lupaus → will.
I'm hungry. – I ___ make you a sandwich. | will / am / going | Minulla on nälkä. – Teen sinulle voileivän. | Tarjous, joka syntyy puhehetkellä → will.
In the future, people ___ live on Mars. | will / are / going | Tulevaisuudessa ihmiset asuvat Marsissa. | Ennustus tulevaisuudesta → will + perusmuoto.
It ___ take long. Just five minutes. | won't / doesn't will / isn't | Se ei kestä kauan. Vain viisi minuuttia. | Willin kielto: won't + perusmuoto.
Will you ___ at home tonight? | be / are / being | Oletko kotona tänä iltana? | Will + verbin perusmuoto (be).
Look at those dark clouds! It ___ rain. | is going to / going to / is going | Katso noita tummia pilviä! Kohta sataa. | Ennuste näkyvän merkin perusteella → be going to + perusmuoto.
We ___ going to visit our grandparents next weekend. | are / will / have | Aiomme käydä isovanhempiemme luona ensi viikonloppuna. | Suunnitelma → be going to. Subjektina on we, joten käytetään muotoa are.
She is going ___ a new phone. | to buy / buy / buying | Hän aikoo ostaa uuden puhelimen. | Be going to + verbin perusmuoto.
I'm not going ___ watch that film. | to / for / at | En aio katsoa sitä elokuvaa. | Be going to: going-sanan jälkeen tulee aina to.
What ___ you going to do after school? | are / will / do | Mitä aiot tehdä koulun jälkeen? | Be going to -kysymys: are + you + going to.
Be careful! You ___ going to fall! | are / will / do | Varo! Olet kaatumassa! | Ennuste näkyvän merkin perusteella → be going to. Subjektina on you, joten käytetään muotoa are.
He has saved money because he ___ buy a car. | is going to / will going to / going | Hän on säästänyt rahaa, koska hän aikoo ostaa auton. | Etukäteen tehty suunnitelma → be going to.
They ___ get married next June. They have booked the church. | are going to / will to / going to | He menevät naimisiin ensi kesäkuussa. He ovat varanneet kirkon. | Suunnitelma on jo tehty → be going to.
I ___ meeting Anna at six tomorrow. | am / will / have | Tapaan Annan huomenna kuudelta. | Sovittu tapaaminen → present continuous (am/is/are + -ing) ilmaisee tulevaisuutta.
We ___ flying to Rome on Monday. We have the tickets. | are / will / have | Lennämme Roomaan maanantaina. Meillä on liput. | Varattu ja sovittu asia → present continuous.
What are you ___ this weekend? | doing / do / done | Mitä teet tänä viikonloppuna? | Sovitut menot → present continuous: are + -ing.
The train ___ at 7.15 tomorrow morning. | leaves / leave / leaving | Juna lähtee huomenna aamulla 7.15. | Aikataulu → present simple, vaikka puhutaan tulevasta.
The film ___ at eight tonight. | starts / start / starting | Elokuva alkaa tänä iltana kahdeksalta. | Aikataulu → present simple. Subjektina on the film (= it), joten verbiin tulee -s.
Our flight ___ in Paris at ten in the evening. | arrives / arrive / arriving | Lentomme saapuu Pariisiin kymmeneltä illalla. | Aikataulu → present simple.
I will call you when I ___ home. | get / will get / got | Soitan sinulle, kun pääsen kotiin. | Aikalauseessa (when, as soon as, before, after) ei käytetä willia, vaan present simple.
As soon as she ___, we will start dinner. | arrives / will arrive / arrive | Heti kun hän saapuu, aloitamme päivällisen. | As soon as -lauseessa present simple, vaikka asia on tulevaisuudessa.
We won't leave before the rain ___. | stops / will stop / stop | Emme lähde ennen kuin sade lakkaa. | Before-aikalauseessa present simple, ei will.
___ I open the window? | Shall / Do / Am | Avaanko ikkunan? | Tarjous kysymyksenä I/we-muodossa → Shall I…?
___ we go to the cinema tonight? | Shall / Do / Are | Mennäänkö elokuviin tänä iltana? | Ehdotus → Shall we…?
This time tomorrow I ___ lying on the beach. | will be / will / am going | Huomenna tähän aikaan makaan rannalla. | Käynnissä tiettynä hetkenä tulevaisuudessa → will be + -ing.
___ you help me with this bag, please? | Will / Are / Do | Autatko minua tämän laukun kanssa? | Pyyntö → Will you…? + perusmuoto.
`;

const ENG_CONDITIONAL = `
I ___ like a cup of tea, please. | would / will / am | Haluaisin kupin teetä, kiitos. | Kohtelias toive → would like (= haluaisin). Konditionaali: would + perusmuoto.
___ you like to come with us? | Would / Do / Will | Haluaisitko tulla mukaamme? | Haluaisitko = Would you like + to + perusmuoto.
Would you ___ some more cake? | like / liking / likes | Haluaisitko lisää kakkua? | Would + verbin perusmuoto (like).
Where would you ___ to live? | like / liking / liked | Missä haluaisit asua? | Would + perusmuoto: would like to live.
I'd ___ to visit Japan one day. | love / loving / loved | Haluaisin kovasti käydä Japanissa joskus. | I'd = I would. Would love + to + perusmuoto.
It ___ be nice to live by the sea. | would / will / is | Olisi mukavaa asua meren rannalla. | Suomen -isi- (olisi) → would + perusmuoto.
I ___ buy a new car, but I don't have enough money. | would / will / am | Ostaisin uuden auton, mutta minulla ei ole tarpeeksi rahaa. | Ostaisin = would buy. Konditionaali: would + perusmuoto.
She would ___ happy to help you. | be / is / being | Hän auttaisi sinua mielellään. | Would + verbin perusmuoto: would be.
What ___ you do with a million euros? | would / will / do | Mitä tekisit miljoonalla eurolla? | Kuviteltu tilanne: tekisit = would you do.
I ___ help you, but I am busy. | would / will / am | Auttaisin sinua, mutta minulla on kiire. | Auttaisin = would help.
That ___ be fun! | would / will / is | Se olisi hauskaa! | Olisi = would be.
It ___ be better to leave early. | would / will / is | Olisi parempi lähteä aikaisin. | Olisi parempi = it would be better.
In your place, I ___ apologise. | would / will / am | Sinun asemassasi pyytäisin anteeksi. | Pyytäisin = would apologise.
I would ___ go there alone. | never / ever / not ever | En ikinä menisi sinne yksin. | Would never + perusmuoto = en ikinä -isi.
We'd rather ___ at home tonight. | stay / to stay / staying | Jäisimme mieluummin kotiin tänä iltana. | Would rather (= mieluummin) + perusmuoto ilman to-sanaa.
___ you rather have tea or coffee? | Would / Do / Will | Joisitko mieluummin teetä vai kahvia? | Mieluummin -isi = would rather.
Would you ___ opening the door? | mind / minding / minded | Viitsisitkö avata oven? | Would you mind + -ing = viitsisitkö…
___ you pass me the salt, please? | Could / Can't / Do | Voisitko ojentaa suolan? | Voisitko = could you (kohtelias pyyntö).
You ___ see a doctor. | should / would / will | Sinun pitäisi mennä lääkäriin. | Pitäisi = should + perusmuoto (neuvo).
I would have ___ you, but I lost your number. | called / call / calling | Olisin soittanut sinulle, mutta hukkasin numerosi. | Konditionaalin perfekti: would have + 3. muoto (olisin soittanut).
She ___ have come, but she was ill. | would / will / is | Hän olisi tullut, mutta hän oli sairaana. | Olisi tullut = would have come.
We would have ___ the match with a better goalkeeper. | won / win / winning | Olisimme voittaneet ottelun paremmalla maalivahdilla. | Would have + 3. muoto. win – won – won.
They would ___ helped us if we had asked. | have / has / had | He olisivat auttaneet meitä, jos olisimme pyytäneet. | Would + have + 3. muoto. Wouldin jälkeen aina perusmuoto have.
I wouldn't have ___ it without your help. | done / did / do | En olisi selvinnyt siitä ilman apuasi. | Would have + 3. muoto. do – did – done.
What would you have ___ in my situation? | done / did / do | Mitä sinä olisit tehnyt minun tilanteessani? | Olisit tehnyt = would have done.
I ___ have bought it, but it was too expensive. | would / will / had | Olisin ostanut sen, mutta se oli liian kallis. | Olisin ostanut = would have bought.
You should have ___ me! | told / tell / telling | Sinun olisi pitänyt kertoa minulle! | Olisi pitänyt = should have + 3. muoto. tell – told – told.
We should ___ left earlier. | have / has / had | Meidän olisi pitänyt lähteä aikaisemmin. | Should + have + 3. muoto.
He could have ___ hurt. | been / be / being | Hän olisi voinut loukkaantua. | Olisi voinut = could have + 3. muoto (been).
I could ___ you tomorrow if you want. | help / helping / helped | Voisin auttaa sinua huomenna, jos haluat. | Voisin = could + perusmuoto.
`;

const ENG_IF = `
If you heat ice, it ___. | melts / would melt / melted | Jos jäätä lämmittää, se sulaa. | Tyyppi 0 (aina totta): if + present simple, present simple.
If you mix red and blue, you ___ purple. | get / would get / got | Kun sekoitat punaista ja sinistä, saat violettia. | Tyyppi 0 (yleinen totuus): molemmissa present simple.
Plants die if they ___ get water. | don't / wouldn't / didn't | Kasvit kuolevat, jos ne eivät saa vettä. | Tyyppi 0: if-lauseessa present simple → don't.
If it rains, the grass ___ wet. | gets / would get / got | Kun sataa, ruoho kastuu. | Tyyppi 0: if + present simple, present simple.
If it ___ tomorrow, we will stay at home. | rains / will rain / rained | Jos huomenna sataa, jäämme kotiin. | Tyyppi 1 (todennäköinen): if + present simple, will + perusmuoto. If-lauseeseen ei tule willia.
If you study hard, you ___ pass the test. | will / would / had | Jos opiskelet ahkerasti, pääset kokeesta läpi. | Tyyppi 1: päälauseessa will + perusmuoto.
If you don't hurry, you ___ miss the bus. | will / would / did | Jos et pidä kiirettä, myöhästyt bussista. | Tyyppi 1: if + present simple, will + perusmuoto.
I will call you if I ___ time. | have / will have / had | Soitan sinulle, jos minulla on aikaa. | Tyyppi 1: if-lauseessa present simple, vaikka asia on tulevaisuudessa.
If she ___ the bus, she will be late. | misses / will miss / missed | Jos hän myöhästyy bussista, hän on myöhässä. | Tyyppi 1: if + present simple. Subjektina on she, joten verbiin tulee -es.
We will go to the beach if the weather ___ nice. | is / will be / was | Menemme rannalle, jos sää on kaunis. | Tyyppi 1: if-lauseessa present simple.
If you ___ careful, you will break it. | aren't / won't be / weren't | Jos et ole varovainen, rikot sen. | Tyyppi 1: if-lauseessa present simple → aren't.
Unless you hurry, you ___ be late. | will / would / had | Ellet pidä kiirettä, myöhästyt. | Unless = ellei. Tyyppi 1: päälauseessa will.
If I see him, I ___ give him your message. | will / would / would have | Jos näen hänet, välitän hänelle viestisi. | Tyyppi 1: if + present simple, will + perusmuoto.
You will feel better if you ___ some rest. | get / will get / got | Voit paremmin, jos lepäät vähän. | Tyyppi 1: if-lauseessa present simple.
If I ___ rich, I would travel around the world. | were / am / will be | Jos olisin rikas, matkustaisin ympäri maailmaa. | Tyyppi 2 (kuviteltu): if + past simple, would + perusmuoto. Be-verbistä käytetään were.
If I had a dog, I ___ walk it every day. | would / will / had | Jos minulla olisi koira, ulkoiluttaisin sitä joka päivä. | Tyyppi 2: if + past simple, would + perusmuoto.
If I ___ you, I would tell her the truth. | were / am / will be | Jos olisin sinä, kertoisin hänelle totuuden. | Neuvo: If I were you… (tyyppi 2).
What would you do if you ___ a million euros? | won / win / will win | Mitä tekisit, jos voittaisit miljoona euroa? | Tyyppi 2: if-lauseessa past simple. win – won.
If we lived in Spain, we ___ speak Spanish. | would / will / had | Jos asuisimme Espanjassa, puhuisimme espanjaa. | Tyyppi 2: päälauseessa would + perusmuoto.
She would be happier if she ___ more friends. | had / has / will have | Hän olisi onnellisempi, jos hänellä olisi enemmän ystäviä. | Tyyppi 2: if + past simple (had).
If I knew the answer, I ___ tell you. | would / will / am | Jos tietäisin vastauksen, kertoisin sen sinulle. | Tyyppi 2: if + past simple, would + perusmuoto.
If he ___ so much, he would be healthier. | didn't smoke / doesn't smoke / won't smoke | Jos hän ei tupakoisi niin paljon, hän olisi terveempi. | Tyyppi 2: if-lauseen kielto past simplessä → didn't + perusmuoto.
If I could fly, I ___ go to Paris. | would / will / am | Jos osaisin lentää, menisin Pariisiin. | Tyyppi 2: päälauseessa would + perusmuoto.
If I ___ more time, I would learn to play the guitar. | had / have / will have | Jos minulla olisi enemmän aikaa, opettelisin soittamaan kitaraa. | Tyyppi 2: if + past simple (had).
If I had studied, I ___ passed the exam. | would have / will have / would | Jos olisin opiskellut, olisin päässyt kokeesta läpi. | Tyyppi 3 (mennyt, ei toteutunut): if + had + 3. muoto, would have + 3. muoto.
If you ___ me, I would have helped you. | had asked / asked / have asked | Jos olisit pyytänyt minua, olisin auttanut sinua. | Tyyppi 3: if-lauseessa had + 3. muoto.
If we had left earlier, we ___ have missed the train. | wouldn't / won't / didn't | Jos olisimme lähteneet aiemmin, emme olisi myöhästyneet junasta. | Tyyppi 3: päälauseessa wouldn't have + 3. muoto.
She would have come if you ___ her. | had invited / invited / have invited | Hän olisi tullut, jos olisit kutsunut hänet. | Tyyppi 3: if + had + 3. muoto.
If it hadn't rained, we ___ played tennis. | would have / will have / had | Jos ei olisi satanut, olisimme pelanneet tennistä. | Tyyppi 3: would have + 3. muoto.
If I had known, I ___ have told you. | would / will / had | Jos olisin tiennyt, olisin kertonut sinulle. | Tyyppi 3: would + have + 3. muoto.
`;

const ENG_ORDER = `
she always drinks coffee in the morning. / in the morning she always drinks coffee | Hän juo aina kahvia aamulla. | Tiheysadverbi (always, often, never) tulee ennen pääverbiä.
I am never late for school. | En ole koskaan myöhässä koulusta. | Be-verbin kanssa tiheysadverbi tulee be-verbin jälkeen: I am never…
we often play tennis after school. / after school we often play tennis | Pelaamme usein tennistä koulun jälkeen. | Often tulee ennen pääverbiä (play).
they usually eat lunch at school. / usually they eat lunch at school | He syövät yleensä lounaan koulussa. | Usually tulee tavallisesti ennen pääverbiä. Paikka (at school) lauseen loppuun.
she has never been to Italy. | Hän ei ole koskaan käynyt Italiassa. | Never tulee apuverbin (has) ja pääverbin (been) väliin.
he plays the guitar very well. | Hän soittaa kitaraa todella hyvin. | Tapaa kuvaava adverbi (well) tulee objektin jälkeen, ei verbin ja objektin väliin.
I don't like horror films. | En pidä kauhuelokuvista. | Kielto: subjekti + don't + verbi + objekti.
I went to the cinema with my friends on Friday. / on Friday I went to the cinema with my friends | Menin elokuviin ystävieni kanssa perjantaina. | Perusjärjestys: subjekti – verbi – paikka – aika. Aika voi olla myös alussa.
I have lived here for five years. | Olen asunut täällä viisi vuotta. | Subjekti – verbi – paikka (here) – aika (for five years).
we are going to visit Rome next summer. / next summer we are going to visit Rome | Aiomme käydä Roomassa ensi kesänä. | Subjekti – verbi – objekti – aika. Aika voi olla myös alussa.
my mother bought me a new jacket. | Äitini osti minulle uuden takin. | Kenelle (me) ennen mitä (a new jacket), kun to/for-sanaa ei käytetä.
he gave the book to his sister. | Hän antoi kirjan siskolleen. | Kun mukana on to, järjestys on: verbi – mitä – to kenelle.
my father has a big red car. | Isälläni on iso punainen auto. | Adjektiivit ennen substantiivia, koko ennen väriä: big red car.
there is a cat under the table. / under the table there is a cat | Pöydän alla on kissa. | Jonkin olemassaolo: there is / there are + asia + paikka.
it is very cold today. / today it is very cold | Tänään on todella kylmä. | Englannin lauseessa on aina subjekti: suomen ”on kylmä” → it is cold.
I can speak English and Swedish. / I can speak Swedish and English | Osaan puhua englantia ja ruotsia. | Apuverbi (can) + perusmuoto: I can speak.
the children are playing in the garden. | Lapset leikkivät puutarhassa. | Subjekti – verbi – paikka.
where do you live? | Missä asut? | Kysymys: kysymyssana + do/does + subjekti + verbi.
what time does the film start? | Mihin aikaan elokuva alkaa? | Kysymyssana + does + subjekti + verbin perusmuoto.
did you see the match yesterday? | Näitkö ottelun eilen? | Menneen ajan kysymys: did + subjekti + perusmuoto.
how often do you go swimming? | Kuinka usein käyt uimassa? | Kysymyssana (how often) + do + subjekti + verbi.
why are you so tired? | Miksi olet niin väsynyt? | Be-verbin kysymys: kysymyssana + be + subjekti.
is your brother older than you? | Onko veljesi sinua vanhempi? | Be-verbin kysymys: be-verbi subjektin eteen.
who lives in that house? | Kuka asuu tuossa talossa? | Kun who kysyy tekijää (subjektia), do-apuverbiä ei käytetä.
how much does this book cost? | Paljonko tämä kirja maksaa? | Kysymyssana + does + subjekti + verbin perusmuoto.
have you ever eaten Chinese food? | Oletko koskaan syönyt kiinalaista ruokaa? | Present perfect -kysymys: have + subjekti + ever + 3. muoto.
what are you doing now? | Mitä teet nyt? | Kysymyssana + be + subjekti + -ing.
can you tell me where the station is? | Voitko kertoa, missä asema on? | Epäsuorassa kysymyksessä järjestys on kuin väitelauseessa: where the station is.
do you know what time it is? | Tiedätkö, paljonko kello on? | Epäsuora kysymys: what time it is (ei what time is it).
I don't know where he lives. | En tiedä, missä hän asuu. | Epäsuorassa kysymyksessä ei käytetä do/does-apuverbiä: where he lives.
`;

const engRows = src => src.trim().split('\n').map(line => line.split(' | ').map(s => s.trim()));

const shuffle = arr => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

// Kierrättää tehtävät sekoitetussa järjestyksessä, jotta sama ei toistu ennen kuin kaikki on käyty.
// Ensimmäisellä kierroksella listan alun `fresh` uutta tehtävää tulee ennen vanhoja.
function deck(items, fresh = 0) {
  let queue = [...shuffle(items.slice(fresh)), ...shuffle(items.slice(0, fresh))];
  let last = null;
  return () => {
    if (queue.length === 0) {
      queue = shuffle(items);
      if (queue.length > 1 && queue[queue.length - 1] === last) queue.unshift(queue.pop());
    }
    last = queue.pop();
    return last;
  };
}

const capitalize = s => s.charAt(0).toUpperCase() + s.slice(1);

function choiceGen(label, src) {
  const next = deck(engRows(src));
  return () => {
    const [sentence, opts, fi, why] = next();
    const options = opts.split(' / ');
    const correct = options[0];
    const filled = sentence.replace('___', `<strong>${correct}</strong>`);
    return {
      label,
      text: true,
      why,
      prompt: `Valitse oikea vaihtoehto.<span class="fi">${fi}</span>`,
      problem: sentence.replace('___', '<span class="blank">_____</span>'),
      answer: { type: 'choice', options: shuffle(options), value: correct, filled },
      steps: [
        { text: why, math: [filled] },
        { text: 'Suomeksi:', math: [fi] },
      ],
      final: filled,
    };
  };
}

function orderGen(label, src) {
  const next = deck(engRows(src));
  return () => {
    const [variants, fi, why] = next();
    const end = variants.includes('?') ? '?' : '.';
    const accepted = variants.split(' / ').map(s => s.replace(/[.?!]$/, ''));
    const words = accepted[0].split(' ');
    let tiles;
    do { tiles = shuffle(words); } while (words.length > 1 && accepted.includes(tiles.join(' ')));
    const sentence = capitalize(accepted[0]) + end;
    return {
      label,
      text: true,
      why,
      prompt: `Järjestä sanat oikeaan järjestykseen.<span class="fi">${fi}</span>`,
      problem: '',
      answer: { type: 'order', tiles, accepted, end },
      steps: [
        { text: why, math: [sentence] },
        ...(accepted.length > 1
          ? [{ text: 'Myös tämä järjestys on oikein:', math: accepted.slice(1).map(s => capitalize(s) + end) }]
          : []),
      ],
      final: sentence,
    };
  };
}

/* ---------- Aukkotehtävät: teksti, jossa jokaiseen aukkoon valitaan oikea muoto ---------- */

// Aukko: [[oikea / väärä / väärä ; selitys]]
const CLOZE_PRESENT = [
  { title: 'Grandpa\'s farm', text: `My grandpa [[lives / is living / lived ; Pysyvä asia → yleispreesens. Grandpa (= he) → -s.]] on a farm near Seinäjoki. He [[gets / is getting / got ; Every morning = toistuva tapa → yleispreesens.]] up at five every morning. Today I [[am helping / help / helped ; Today = tilapäinen, nyt käynnissä oleva tilanne → kestopreesens.]] him because it is the summer holiday. Right now he [[is feeding / feeds / fed ; Right now → kestopreesens.]] the cows, and I [[am cleaning / clean / cleaned ; Samaan aikaan nyt → kestopreesens.]] the barn. Cows [[eat / are eating / ate ; Yleinen totuus → yleispreesens. Cows = they → perusmuoto.]] a lot of grass. Grandpa [[doesn't need / isn't needing / didn't need ; Need on tilaverbi → yleispreesens.]] a holiday – he [[loves / is loving / loved ; Love on tilaverbi → yleispreesens.]] his work.` },
  { title: 'At the swimming hall', text: `Every Tuesday my class [[goes / is going / went ; Every Tuesday = toistuva tapa → yleispreesens. My class (= it) → -es.]] to the swimming hall. Our teacher always [[blows / is blowing / blew ; Always = tapa → yleispreesens.]] a whistle when it is time to start. Look! Leo [[is jumping / jumps / jumped ; Look! = tapahtuu nyt → kestopreesens.]] into the deep end. He [[swims / is swimming / swam ; Pysyvä taito → yleispreesens.]] very well. At the moment Sara and Mia [[are diving / dive / dived ; At the moment → kestopreesens. Sara and Mia = they → are + -ing.]] for rings. I [[don't like / am not liking / didn't like ; Like on tilaverbi → yleispreesens.]] cold water, so right now I [[am sitting / sit / sat ; Right now → kestopreesens.]] in the sauna.` },
  { title: 'A busy kitchen', text: `It is six o'clock, and right now my family [[is cooking / cooks / cooked ; Right now → kestopreesens. Family (= it) → is + -ing.]] dinner. Dad [[is cutting / cuts / cut ; Tapahtuu nyt → kestopreesens.]] onions, and he [[is crying / cries / cried ; Tapahtuu nyt → kestopreesens.]] a little. Onions always [[make / are making / made ; Always + yleinen totuus → yleispreesens. Onions = they → perusmuoto.]] him cry. Mum usually [[makes / is making / made ; Usually = tapa → yleispreesens.]] the salad, but at the moment my brother [[is making / makes / made ; At the moment = poikkeus tavasta, tapahtuu nyt → kestopreesens.]] it. I [[think / am thinking / thought ; Think = olla mieltä (tilaverbi) → yleispreesens.]] that he [[needs / is needing / needed ; Need on tilaverbi → yleispreesens.]] some help.` },
  { title: 'My new phone', text: `I [[have / am having / had ; Have = omistaa (tilaverbi) → yleispreesens.]] a new phone. It [[takes / is taking / took ; Yleinen ominaisuus → yleispreesens. It → -s.]] great photos. My friends often [[send / are sending / sent ; Often = toistuva → yleispreesens. Friends = they → perusmuoto.]] me funny videos. Right now I [[am downloading / download / downloaded ; Right now → kestopreesens.]] a new game. The phone [[costs / is costing / cost ; Cost on tilaverbi → yleispreesens. Phone (= it) → -s.]] a lot of money, so I always [[keep / am keeping / kept ; Always = tapa → yleispreesens.]] it in a strong case. My little sister [[wants / is wanting / wanted ; Want on tilaverbi → yleispreesens.]] one too.` },
  { title: 'A rainy Sunday', text: `Look outside! It [[is raining / rains / rained ; Look! = tapahtuu nyt → kestopreesens.]] again. In Finland it often [[rains / is raining / rained ; Often = toistuva → yleispreesens.]] in autumn. At the moment we [[are playing / play / played ; At the moment → kestopreesens.]] a board game. Grandma [[is winning / wins / won ; Tilanne juuri nyt pelissä → kestopreesens.]] right now – she always [[wins / is winning / won ; Always = tapa → yleispreesens.]] this game. Dad never [[plays / is playing / played ; Never = tapa → yleispreesens.]] board games. He [[prefers / is preferring / preferred ; Prefer on tilaverbi → yleispreesens.]] crosswords. Right now he [[is sleeping / sleeps / slept ; Right now → kestopreesens.]] on the sofa.` },
  { title: 'My best friend', text: `My best friend Aino [[lives / is living / lived ; Pysyvä asia → yleispreesens.]] next door. We [[walk / are walking / walked ; Every day = tapa → yleispreesens. We → perusmuoto.]] to school together every day. Aino [[plays / is playing / played ; Pysyvä harrastus → yleispreesens.]] the violin, and she [[practises / is practising / practised ; Every evening = tapa → yleispreesens.]] every evening. Listen! She [[is practising / practises / practised ; Listen! = tapahtuu nyt → kestopreesens.]] now. I [[don't play / am not playing / didn't play ; Pysyvä asia → yleispreesens. I → don't + perusmuoto.]] any instruments, but I [[love / am loving / loved ; Love on tilaverbi → yleispreesens.]] music.` },
  { title: 'At the airport', text: `At the moment we [[are waiting / wait / waited ; At the moment → kestopreesens.]] for our flight to Rome. Flights to Rome usually [[leave / are leaving / left ; Usually = tapa → yleispreesens. Flights = they → perusmuoto.]] from gate 12. Right now my mum [[is reading / reads / read ; Right now → kestopreesens.]] a magazine, and Dad [[is buying / buys / bought ; Samaan aikaan nyt → kestopreesens.]] coffee. My little brother [[hates / is hating / hated ; Hate on tilaverbi → yleispreesens.]] flying. He always [[feels / is feeling / felt ; Always = tapa → yleispreesens.]] sick on planes. Look! A plane [[is taking / takes / took ; Look! = tapahtuu nyt → kestopreesens.]] off.` },
  { title: 'A school morning', text: `School [[starts / is starting / started ; Every day = toistuva aikataulu → yleispreesens.]] at 8.15 every day. I usually [[take / am taking / took ; Usually = tapa → yleispreesens.]] the bus, but this week I [[am cycling / cycle / cycled ; This week = tilapäinen tilanne → kestopreesens.]] because the weather is nice. Right now our teacher [[is writing / writes / wrote ; Right now → kestopreesens.]] on the board, and we [[are copying / copy / copied ; Samaan aikaan nyt → kestopreesens.]] the words. At the moment Emil [[isn't listening / doesn't listen / didn't listen ; At the moment → kestopreesensin kielto: isn't + -ing.]] – he [[is looking / looks / looked ; Tapahtuu nyt → kestopreesens.]] out of the window.` },
  { title: 'Winter in Lapland', text: `In Lapland it [[snows / is snowing / snowed ; Yleinen totuus → yleispreesens.]] a lot in winter. In December the sun [[doesn't rise / isn't rising / didn't rise ; Joka talvi toistuva asia → yleispreesens.]] for weeks. Many tourists [[come / are coming / came ; Every year = toistuva → yleispreesens.]] there every year. Right now my uncle [[is driving / drives / drove ; Right now → kestopreesens.]] a group of tourists to see the northern lights. He [[knows / is knowing / knew ; Know on tilaverbi → yleispreesens.]] the best places. Look! The lights [[are dancing / dance / danced ; Look! = tapahtuu nyt → kestopreesens.]] above the hills, and the tourists [[are taking / take / took ; Samaan aikaan nyt → kestopreesens.]] photos.` },
  { title: 'Our dog Rex', text: `We [[have / are having / had ; Have = omistaa (tilaverbi) → yleispreesens.]] a dog called Rex. He [[sleeps / is sleeping / slept ; Every afternoon = tapa → yleispreesens.]] in the kitchen every afternoon. Rex [[understands / is understanding / understood ; Understand on tilaverbi → yleispreesens.]] many words. At the moment he [[is chasing / chases / chased ; At the moment → kestopreesens.]] a cat in the garden. Dogs often [[chase / are chasing / chased ; Often + yleinen totuus → yleispreesens. Dogs = they → perusmuoto.]] cats. Right now my mum [[is shouting / shouts / shouted ; Right now → kestopreesens.]] at him, but he [[isn't listening / doesn't listen / didn't listen ; Tapahtuu nyt → kestopreesensin kielto.]].` },
  { title: 'A football match', text: `Listen! The fans [[are singing / sing / sang ; Listen! = tapahtuu nyt → kestopreesens.]]. Right now our team [[is playing / plays / played ; Right now → kestopreesens.]] against Tampere. Our team usually [[wins / is winning / won ; Usually = tapa → yleispreesens.]] at home, but at the moment we [[are losing / lose / lost ; At the moment → kestopreesens.]] 0–1. Look! Our coach [[is shouting / shouts / shouted ; Look! = tapahtuu nyt → kestopreesens.]] at the players. He always [[gets / is getting / got ; Always = tapa → yleispreesens.]] angry when we lose. I [[believe / am believing / believed ; Believe on tilaverbi → yleispreesens.]] that we can still win.` },
  { title: 'Working from home', text: `My mum [[works / is working / worked ; Pysyvä asia (ammatti) → yleispreesens.]] as a designer. She usually [[goes / is going / went ; Usually = tapa → yleispreesens.]] to the office, but this week she [[is working / works / worked ; This week = tilapäinen → kestopreesens.]] from home. Right now she [[is talking / talks / talked ; Right now → kestopreesens.]] to her boss on the computer. At the moment my dad [[is cooking / cooks / cooked ; At the moment → kestopreesens.]] lunch. He rarely [[cooks / is cooking / cooked ; Rarely = harvoin, tapa → yleispreesens.]], so the kitchen [[smells / is smelling / smelled ; Smell (tuoksua) on tilaverbi → yleispreesens.]] a bit strange.` },
  { title: 'A letter from London', text: `Dear Kaisa, I [[am writing / write / wrote ; Kirjoitan tätä kirjettä juuri nyt → kestopreesens.]] to you from London! This month I [[am staying / stay / stayed ; This month = tilapäinen → kestopreesens.]] with a host family. They [[live / are living / lived ; Pysyvä asia → yleispreesens. They → perusmuoto.]] in a big old house. The father [[teaches / is teaching / taught ; Pysyvä ammatti → yleispreesens. Teach päättyy -ch → teaches.]] history. Every morning I [[take / am taking / took ; Every morning = tapa → yleispreesens.]] the underground to my language school. It often [[rains / is raining / rained ; Often → yleispreesens.]] here. At the moment my host sister [[is showing / shows / showed ; At the moment → kestopreesens.]] me photos of her trip. I [[know / am knowing / knew ; Know on tilaverbi → yleispreesens.]] you would love it here!` },
  { title: 'The school canteen', text: `Our school canteen [[serves / is serving / served ; Every day = tapa → yleispreesens.]] hot food every day. On Fridays the cooks always [[make / are making / made ; Always → yleispreesens. Cooks = they → perusmuoto.]] pizza. Today is Friday, and right now the smell [[is coming / comes / came ; Right now → kestopreesens.]] all the way to our classroom. Many students [[prefer / are preferring / preferred ; Prefer on tilaverbi → yleispreesens.]] pasta, but I [[like / am liking / liked ; Like on tilaverbi → yleispreesens.]] pizza best. At the moment we [[are standing / stand / stood ; At the moment → kestopreesens.]] in a long queue. Otto never [[waits / is waiting / waited ; Never = tapa → yleispreesens.]] patiently.` },
  { title: 'Grandma\'s hobby', text: `My grandma [[knits / is knitting / knitted ; Every day = tapa → yleispreesens.]] every day. She [[makes / is making / made ; Every winter = toistuva → yleispreesens.]] socks for the whole family every winter. At the moment she [[is knitting / knits / knitted ; At the moment → kestopreesens.]] a sweater for me. She always [[listens / is listening / listened ; Always = tapa → yleispreesens.]] to the radio when she knits. Right now the radio [[is playing / plays / played ; Right now → kestopreesens.]] old Finnish songs. Grandma [[knows / is knowing / knew ; Know on tilaverbi → yleispreesens.]] all the words. Look! Her cat [[is sleeping / sleeps / slept ; Look! = tapahtuu nyt → kestopreesens.]] on her lap.` },
  { title: 'Camping by the lake', text: `This week we [[are camping / camp / camped ; This week = tilapäinen → kestopreesens.]] by a lake in Koli. Every morning Dad [[makes / is making / made ; Every morning = tapa → yleispreesens.]] a fire. Right now he [[is fishing / fishes / fished ; Right now → kestopreesens.]] on the lake, and my sister [[is reading / reads / read ; Samaan aikaan nyt → kestopreesens.]] in the tent. Mosquitoes [[love / are loving / loved ; Love on tilaverbi → yleispreesens.]] me. They always [[bite / are biting / bit ; Always = tapa → yleispreesens.]] my legs. I [[don't want / am not wanting / didn't want ; Want on tilaverbi → yleispreesens.]] to go home yet.` },
  { title: 'An online gamer', text: `My brother Niko [[spends / is spending / spent ; Every evening = tapa → yleispreesens.]] hours online every evening. He usually [[plays / is playing / played ; Usually = tapa → yleispreesens.]] with friends from Sweden. At the moment he [[is talking / talks / talked ; At the moment → kestopreesens.]] to them through his headset. Mum [[doesn't like / isn't liking / didn't like ; Like on tilaverbi → yleispreesens.]] it when he plays late. Listen! She [[is calling / calls / called ; Listen! = tapahtuu nyt → kestopreesens.]] him for dinner. Right now Niko [[isn't answering / doesn't answer / didn't answer ; Right now → kestopreesensin kielto.]]. He [[seems / is seeming / seemed ; Seem on tilaverbi → yleispreesens.]] very busy.` },
  { title: 'A Saturday job', text: `I [[work / am working / worked ; Every Saturday = tapa → yleispreesens.]] at a café every Saturday. We always [[open / are opening / opened ; Always = tapa → yleispreesens.]] at eight o'clock. The café usually [[gets / is getting / got ; Usually → yleispreesens.]] busy at noon. Right now a long queue [[is growing / grows / grew ; Right now → kestopreesens.]] at the counter. At the moment my boss [[is making / makes / made ; At the moment → kestopreesens.]] sandwiches, and I [[am serving / serve / served ; Samaan aikaan nyt → kestopreesens.]] coffee. One customer [[wants / is wanting / wanted ; Want on tilaverbi → yleispreesens.]] tea with oat milk. Most people [[prefer / are preferring / preferred ; Prefer on tilaverbi → yleispreesens.]] coffee, though.` },
  { title: 'Learning to drive', text: `These days my sister Ella [[is learning / learns / learned ; These days = tilapäinen, meneillään oleva asia → kestopreesens.]] to drive. She [[has / is having / had ; Every Thursday = toistuva → yleispreesens.]] a lesson every Thursday. Her teacher always [[sits / is sitting / sat ; Always = tapa → yleispreesens.]] next to her and [[gives / is giving / gave ; Always = tapa → yleispreesens.]] advice. Today is Thursday, so right now Ella [[is driving / drives / drove ; Right now → kestopreesens.]] around the town. Dad [[thinks / is thinking / thought ; Think = olla mieltä (tilaverbi) → yleispreesens.]] that she is a good driver. Ella [[doesn't like / isn't liking / didn't like ; Like on tilaverbi → yleispreesens.]] parking.` },
  { title: 'At the zoo', text: `Look! The monkeys [[are eating / eat / ate ; Look! = tapahtuu nyt → kestopreesens.]] bananas. Monkeys [[live / are living / lived ; Yleinen totuus → yleispreesens.]] in groups. Over there, right now, a zookeeper [[is washing / washes / washed ; Right now → kestopreesens.]] an elephant. Elephants [[drink / are drinking / drank ; Yleinen totuus → yleispreesens.]] up to 200 litres of water a day. Lions [[sleep / are sleeping / slept ; Yleinen totuus → yleispreesens.]] up to 20 hours a day. At the moment our lion [[is lying / lies / lay ; At the moment → kestopreesens. Lie → lying.]] in the shade. My little cousin [[wants / is wanting / wanted ; Want on tilaverbi → yleispreesens.]] to see the penguins.` },
  { title: 'Morning routine', text: `I [[wake / am waking / woke ; Every weekday = tapa → yleispreesens.]] up at 6.30 every weekday. First I [[take / am taking / took ; Päivittäinen rutiini → yleispreesens.]] a shower, and then I [[eat / am eating / ate ; Päivittäinen rutiini → yleispreesens.]] porridge. My dad always [[reads / is reading / read ; Always = tapa → yleispreesens.]] the news on his tablet. But today is Saturday, and it is nine o'clock. Everybody [[is still sleeping / still sleeps / still slept ; Juuri nyt käynnissä → kestopreesens.]]. Only my cat [[is walking / walks / walked ; Tapahtuu nyt → kestopreesens.]] around the kitchen. She [[wants / is wanting / wanted ; Want on tilaverbi → yleispreesens.]] her breakfast.` },
  { title: 'A music festival', text: `Thousands of people [[visit / are visiting / visited ; Every summer = toistuva → yleispreesens.]] Ruisrock every summer. This year I [[am working / work / worked ; This year = tilapäinen → kestopreesens.]] there as a volunteer. Right now a famous band [[is playing / plays / played ; Right now → kestopreesens.]] on the main stage. Look! The singer [[is jumping / jumps / jumped ; Look! = tapahtuu nyt → kestopreesens.]] into the crowd. Everybody [[is screaming / screams / screamed ; Tapahtuu nyt → kestopreesens.]]. I [[don't know / am not knowing / didn't know ; Know on tilaverbi → yleispreesens.]] their songs, but I [[like / am liking / liked ; Like on tilaverbi → yleispreesens.]] the music.` },
  { title: 'My uncle the chef', text: `My uncle Juha [[owns / is owning / owned ; Own on tilaverbi → yleispreesens.]] a restaurant in Turku. He [[cooks / is cooking / cooked ; Every evening = tapa → yleispreesens.]] there every evening. His restaurant [[serves / is serving / served ; Pysyvä asia → yleispreesens.]] Finnish food. This month he [[is testing / tests / tested ; This month = tilapäinen → kestopreesens.]] new recipes. At the moment he [[is preparing / prepares / prepared ; At the moment → kestopreesens.]] reindeer soup. It [[tastes / is tasting / tasted ; Taste (maistua jollekin) on tilaverbi → yleispreesens.]] delicious. Customers often [[ask / are asking / asked ; Often → yleispreesens.]] for the recipe, but he never [[tells / is telling / told ; Never → yleispreesens.]] anyone.` },
  { title: 'At the library', text: `Our town library [[opens / is opening / opened ; Every day = toistuva aikataulu → yleispreesens.]] at ten every day. I [[go / am going / went ; Twice a week = toistuva → yleispreesens.]] there twice a week. Right now I [[am sitting / sit / sat ; Right now → kestopreesens.]] in a quiet corner. Look! A boy next to me [[is sleeping / sleeps / slept ; Look! = tapahtuu nyt → kestopreesens.]] on his books. At the moment the librarian [[is putting / puts / put ; At the moment → kestopreesens. Put → putting.]] books back on the shelves. She [[knows / is knowing / knew ; Know on tilaverbi → yleispreesens.]] every book in the library. The library [[doesn't charge / isn't charging / didn't charge ; Pysyvä asia → yleispreesens.]] any money for books.` },
  { title: 'Ice hockey', text: `My cousin Aleksi [[plays / is playing / played ; Pysyvä harrastus → yleispreesens.]] ice hockey in a junior team. They [[train / are training / trained ; Four times a week = toistuva → yleispreesens.]] four times a week. Right now they [[are playing / play / played ; Right now → kestopreesens.]] an important match. At the moment Aleksi [[is sitting / sits / sat ; At the moment → kestopreesens.]] on the bench because he hurt his hand. He [[hates / is hating / hated ; Hate on tilaverbi → yleispreesens.]] watching from the bench. Listen! The fans [[are cheering / cheer / cheered ; Listen! = tapahtuu nyt → kestopreesens.]]. Hockey players [[wear / are wearing / wore ; Yleinen totuus → yleispreesens.]] a lot of protective gear.` },
  { title: 'Sunday dinner', text: `Every Sunday my whole family [[eats / is eating / ate ; Every Sunday = tapa → yleispreesens. Family (= it) → -s.]] dinner at Grandma's house. Grandma always [[cooks / is cooking / cooked ; Always = tapa → yleispreesens.]] too much food. It is Sunday evening now, and we [[are sitting / sit / sat ; Now = juuri nyt → kestopreesens.]] at the table. Right now my uncle [[is telling / tells / told ; Right now → kestopreesens.]] a long story. He always [[tells / is telling / told ; Always = tapa → yleispreesens.]] the same stories. My cousins [[aren't listening / don't listen / didn't listen ; Tapahtuu nyt → kestopreesensin kielto.]] – they [[are playing / play / played ; Tapahtuu nyt → kestopreesens.]] with their phones under the table. Grandma [[knows / is knowing / knew ; Know on tilaverbi → yleispreesens.]] it, of course.` },
  { title: 'Spring cleaning', text: `It is a sunny Saturday, and right now we [[are cleaning / clean / cleaned ; Right now → kestopreesens.]] the house. Mum [[is washing / washes / washed ; Tapahtuu nyt → kestopreesens.]] the windows, and Dad [[is fixing / fixes / fixed ; Samaan aikaan nyt → kestopreesens.]] the garden door. We [[clean / are cleaning / cleaned ; Every spring = toistuva → yleispreesens.]] the whole house every spring. I [[hate / am hating / hated ; Hate on tilaverbi → yleispreesens.]] cleaning, but today I [[am helping / help / helped ; Today = tapahtuu nyt → kestopreesens.]] without complaining. My brother never [[helps / is helping / helped ; Never = tapa → yleispreesens.]] – at the moment he [[is still sleeping / still sleeps / still slept ; At the moment → kestopreesens.]].` },
  { title: 'A science lesson', text: `Water [[boils / is boiling / boiled ; Yleinen totuus → yleispreesens.]] at 100 degrees. Look at the pan! The water [[is boiling / boils / boiled ; Look! = tapahtuu nyt → kestopreesens.]] now. The Earth [[goes / is going / went ; Yleinen totuus → yleispreesens.]] round the Sun. Light [[travels / is travelling / travelled ; Yleinen totuus → yleispreesens.]] very fast. At the moment our class [[is doing / does / did ; At the moment → kestopreesens.]] an experiment with ice. Right now the ice [[is melting / melts / melted ; Right now → kestopreesens.]] quickly because the room is warm. Ice [[melts / is melting / melted ; Yleinen totuus → yleispreesens.]] at 0 degrees.` },
  { title: 'Text messages', text: `Hi Mia! What [[are you doing / do you do / did you do ; Kysytään, mitä tapahtuu juuri nyt → kestopreesens.]] right now? I [[am waiting / wait / waited ; Tapahtuu nyt → kestopreesens.]] for the bus. The buses usually [[come / are coming / came ; Usually = tapa → yleispreesens.]] every ten minutes. [[Do you want / Are you wanting / Did you want ; Want on tilaverbi → yleispreesensin kysymys: Do you want?]] to meet later? My mum [[doesn't let / isn't letting / didn't let ; Pysyvä sääntö → yleispreesens.]] me stay out after nine on school days. – Sorry, at the moment I [[am doing / do / did ; At the moment → kestopreesens.]] my homework. I usually [[finish / am finishing / finished ; Usually = tapa → yleispreesens.]] at seven.` },
  { title: 'The new neighbours', text: `Our new neighbours [[come / are coming / came ; Come from = olla kotoisin (pysyvä asia) → yleispreesens.]] from Italy. They [[speak / are speaking / spoke ; Pysyvä taito/tapa → yleispreesens.]] Italian at home. The father [[drives / is driving / drove ; Pysyvä ammatti → yleispreesens.]] a taxi for a living. Right now he [[is washing / washes / washed ; Right now → kestopreesens.]] his car in the yard. At the moment their kids [[are playing / play / played ; At the moment → kestopreesens.]] with our dog. Every evening the family [[has / is having / had ; Every evening = tapa → yleispreesens.]] dinner on the balcony. The food always [[smells / is smelling / smelled ; Smell (tuoksua) on tilaverbi → yleispreesens.]] amazing.` },
  { title: 'An interview with a pilot', text: `– Tell us about your day, Captain Lehto. – Well, I usually [[get / am getting / got ; Usually = toistuva tapa → yleispreesens.]] up at six, and my wife always [[makes / is making / made ; Always = toistuva tapa → yleispreesens. Wife (= she) → -s.]] coffee for me. I [[fly / am flying / flew ; Every month = toistuva tapa → yleispreesens.]] to Spain every month. At the moment I [[write / am writing / wrote ; At the moment = parhaillaan → kestopreesens (am + -ing).]] a book about flying, so right now my kids [[play / are playing / played ; Right now = juuri nyt → kestopreesens.]] in the garden. Look! A plane [[lands / is landing / landed ; Look! = tapahtuu nyt → kestopreesens.]] on the lake. My wife [[doesn't like / isn't liking / didn't like ; Like on tilaverbi → yleispreesens, ei kestomuotoa.]] flying, so she [[stays / is staying / stayed ; When I travel = toistuva tilanne → yleispreesens. She → -s.]] at home when I travel.` },
  { title: 'A visit from Canada', text: `My cousin Emma [[lives / is living / lived ; Pysyvä asia → yleispreesens.]] in Canada, but this month she [[is visiting / visits / visited ; This month = tilapäinen tilanne → kestopreesens.]] us in Finland. She usually [[drinks / is drinking / drank ; Usually = tapa → yleispreesens.]] tea, but right now she [[is drinking / drinks / drank ; Right now = juuri nyt → kestopreesens.]] coffee. Emma [[speaks / is speaking / spoke ; Pysyvä taito → yleispreesens.]] three languages. Listen! She [[is talking / talks / talked ; Listen! = tapahtuu nyt → kestopreesens.]] to my grandma in Finnish. Grandma [[doesn't understand / isn't understanding / didn't understand ; Understand on tilaverbi → yleispreesens.]] English, but she always [[smiles / is smiling / smiled ; Always = tapa → yleispreesens.]] at Emma.` },
];

const CLOZE_PAST = [
  { title: 'A snowy morning', text: `Last Monday I [[woke / wake / have woken ; Last Monday = päättynyt aika → imperfekti. Wake – woke.]] up early. It [[was snowing / snowed / is snowing ; Taustalla käynnissä ollut toiminta → past continuous: was + -ing.]] heavily when I [[looked / look / have looked ; Lyhyt tapahtuma menneisyydessä → imperfekti.]] out of the window. My dad [[was shovelling / shovelled / is shovelling ; Toiminta oli käynnissä, kun tulin alakertaan → past continuous.]] snow in the yard when I came downstairs. I [[put / puts / have put ; Kerronta menneessä → imperfekti. Put – put – put.]] on my warm clothes and [[went / go / have gone ; Kerronta menneessä → imperfekti. Go – went.]] out to help him. We [[built / build / have built ; Kerronta menneessä → imperfekti. Build – built.]] a snowman too.` },
  { title: 'The lost wallet', text: `Yesterday I [[lost / lose / have lost ; Yesterday → imperfekti. Lose – lost.]] my wallet. I [[was walking / walked / am walking ; Pidempi toiminta, jonka aikana jotain tapahtui → past continuous.]] home from school when it [[fell / falls / has fallen ; Lyhyt keskeyttävä tapahtuma → imperfekti. Fall – fell.]] out of my pocket. I [[didn't notice / don't notice / haven't noticed ; Imperfektin kielto: didn't + perusmuoto.]] anything. In the evening a woman [[rang / rings / has rung ; Kerronta menneessä → imperfekti. Ring – rang.]] our doorbell. When I opened the door, she [[was holding / held / is holding ; Tilanne oven avaamisen hetkellä → past continuous.]] my wallet in her hand. I [[thanked / thank / have thanked ; Kerronta menneessä → imperfekti.]] her many times.` },
  { title: 'A trip to Tallinn', text: `Last summer my family [[took / takes / has taken ; Last summer → imperfekti. Take – took.]] the ferry to Tallinn. The trip [[lasted / lasts / has lasted ; Kerronta menneessä → imperfekti.]] two hours. While my parents [[were drinking / drank / are drinking ; While + samaan aikaan käynnissä ollut toiminta → past continuous.]] coffee, my sister and I [[were watching / watch / are watching ; Samaan aikaan käynnissä ollut toiminta → past continuous.]] the sea. In Tallinn we [[visited / visit / have visited ; Kerronta menneessä → imperfekti.]] the Old Town. We [[ate / eat / have eaten ; Kerronta menneessä → imperfekti. Eat – ate.]] lunch in a medieval restaurant. I [[bought / buy / have bought ; Kerronta menneessä → imperfekti. Buy – bought.]] a small wooden toy for my cousin.` },
  { title: 'The power cut', text: `Last night there was a storm. We [[were watching / watched / are watching ; Toiminta oli käynnissä, kun sähköt katkesivat → past continuous.]] a film when the lights suddenly [[went / go / have gone ; Keskeyttävä tapahtuma → imperfekti. Go – went.]] out. My little brother [[started / starts / has started ; Kerronta menneessä → imperfekti.]] to cry. Dad [[found / finds / has found ; Kerronta menneessä → imperfekti. Find – found.]] some candles in the kitchen. While he [[was lighting / lit / is lighting ; While + käynnissä ollut toiminta → past continuous.]] them, Mum [[called / calls / has called ; Kerronta menneessä → imperfekti.]] the electricity company. The power [[came / comes / has come ; Kerronta menneessä → imperfekti. Come – came.]] back after two hours, but we [[didn't finish / don't finish / haven't finished ; Imperfektin kielto: didn't + perusmuoto.]] the film.` },
  { title: 'My first school day', text: `When I was seven, I [[started / start / have started ; Menneisyyden ajankohta (when I was seven) → imperfekti.]] school. My mum [[walked / walks / has walked ; Kerronta menneessä → imperfekti.]] with me to the school gate. I [[was crying / cried / am crying ; Toiminta oli käynnissä, kun opettaja tuli → past continuous.]] when my teacher [[came / comes / has come ; Keskeyttävä tapahtuma → imperfekti. Come – came.]] to say hello. She [[had / has / has had ; Kerronta menneessä → imperfekti. Have – had.]] a kind smile. When I walked into the classroom, the other children [[were drawing / drew / are drawing ; Toiminta oli käynnissä sisään tullessani → past continuous.]] pictures. I [[sat / sit / have sat ; Kerronta menneessä → imperfekti. Sit – sat.]] next to a girl called Lotta. We [[became / become / have become ; Kerronta menneessä → imperfekti. Become – became.]] best friends.` },
  { title: 'A bike accident', text: `Last week I [[had / have / have had ; Last week → imperfekti.]] a small accident. I [[was riding / rode / am riding ; Pidempi toiminta, jonka aikana jotain tapahtui → past continuous.]] my bike to school when a cat [[ran / runs / has run ; Keskeyttävä tapahtuma → imperfekti. Run – ran.]] in front of me. I [[braked / brake / have braked ; Kerronta menneessä → imperfekti.]] hard and [[fell / fall / have fallen ; Kerronta menneessä → imperfekti. Fall – fell.]] off. A man who [[was waiting / waited / is waiting ; Toiminta oli käynnissä onnettomuuden hetkellä → past continuous.]] at the bus stop helped me up. Luckily I [[didn't break / don't break / haven't broken ; Imperfektin kielto: didn't + perusmuoto.]] anything.` },
  { title: 'A Halloween party', text: `Last Friday my friend Ronja [[had / has / has had ; Last Friday → imperfekti.]] a Halloween party. Everyone [[wore / wears / has worn ; Kerronta menneessä → imperfekti. Wear – wore.]] a costume. When I [[arrived / arrive / have arrived ; Lyhyt tapahtuma menneisyydessä → imperfekti.]], the music [[was playing / played / is playing ; Taustalla käynnissä → past continuous.]] and people [[were dancing / danced / are dancing ; Taustalla käynnissä → past continuous. People = they → were.]] in the living room. Ronja's brother [[dressed / dresses / has dressed ; Kerronta menneessä → imperfekti.]] up as a vampire. At midnight we [[told / tell / have told ; Kerronta menneessä → imperfekti. Tell – told.]] ghost stories. I [[didn't sleep / don't sleep / haven't slept ; Imperfektin kielto: didn't + perusmuoto.]] well that night.` },
  { title: 'The class trip', text: `In May our class [[went / goes / has gone ; Päättynyt aika → imperfekti. Go – went.]] on a trip to Nuuksio. We [[walked / walk / have walked ; Kerronta menneessä → imperfekti.]] for hours in the forest. While we [[were having / had / are having ; While + käynnissä ollut toiminta → past continuous.]] lunch, it [[started / starts / has started ; Keskeyttävä tapahtuma → imperfekti.]] to rain. Our teacher [[forgot / forgets / has forgotten ; Kerronta menneessä → imperfekti. Forget – forgot.]] her umbrella. On the way back we [[saw / see / have seen ; Kerronta menneessä → imperfekti. See – saw.]] a fox. It [[was sitting / sat / is sitting ; Tilanne näkemishetkellä → past continuous.]] on a rock and watching us.` },
  { title: 'Grandpa\'s story', text: `When my grandpa [[was / is / were ; Be-verbin imperfekti: he → was.]] young, he [[lived / lives / has lived ; Menneisyyden aika → imperfekti.]] in a small village. He [[walked / walks / has walked ; Toistuva tapa menneisyydessä → imperfekti.]] five kilometres to school every day. One winter evening he [[was walking / walked / is walking ; Toiminta oli käynnissä, kun hän näki suden → past continuous.]] home when he [[saw / sees / has seen ; Keskeyttävä tapahtuma → imperfekti. See – saw.]] a wolf. He [[was / were / is ; Be-verbin imperfekti: he → was.]] very scared. The wolf [[looked / looks / has looked ; Kerronta menneessä → imperfekti.]] at him and then [[ran / runs / has run ; Kerronta menneessä → imperfekti. Run – ran.]] away.` },
  { title: 'A baking disaster', text: `Yesterday I [[tried / try / have tried ; Yesterday → imperfekti. Try → tried (konsonantin jälkeinen y → ied).]] to bake a cake. I [[was mixing / mixed / am mixing ; Toiminta oli käynnissä, kun puhelin soi → past continuous.]] the eggs and sugar when my phone [[rang / rings / has rung ; Keskeyttävä tapahtuma → imperfekti. Ring – rang.]]. I [[talked / talk / have talked ; Kerronta menneessä → imperfekti.]] to my friend for twenty minutes. I [[forgot / forget / have forgotten ; Kerronta menneessä → imperfekti. Forget – forgot.]] the cake in the oven, and it [[burned / burns / has burned ; Kerronta menneessä → imperfekti.]]. When my parents [[came / come / have come ; Kerronta menneessä → imperfekti. Come – came.]] home, the kitchen [[was / were / is ; Be-verbin imperfekti: kitchen (= it) → was.]] full of smoke.` },
  { title: 'My favourite band', text: `Last month I [[saw / see / have seen ; Last month → imperfekti. See – saw.]] my favourite band live. The concert hall [[was / were / is ; Be-verbin imperfekti: hall (= it) → was.]] full. When the band [[came / comes / has come ; Kerronta menneessä → imperfekti. Come – came.]] on stage, everyone [[screamed / screams / has screamed ; Kerronta menneessä → imperfekti.]]. While they [[were playing / played / are playing ; While + käynnissä ollut toiminta → past continuous.]] the last song, the singer [[jumped / jumps / has jumped ; Lyhyt tapahtuma → imperfekti.]] into the crowd. I [[didn't want / don't want / haven't wanted ; Imperfektin kielto: didn't + perusmuoto.]] the night to end.` },
  { title: 'The broken window', text: `Last Saturday my brother and I [[were playing / played / are playing ; Toiminta oli käynnissä, kun ikkuna rikkoutui → past continuous.]] football in the garden when the ball [[hit / hits / has hit ; Keskeyttävä tapahtuma → imperfekti. Hit – hit – hit.]] the kitchen window. The glass [[broke / breaks / has broken ; Kerronta menneessä → imperfekti. Break – broke.]]. At that moment Mum [[was cooking / cooked / is cooking ; At that moment = käynnissä tietyllä hetkellä → past continuous.]] in the kitchen. She [[wasn't / weren't / isn't ; Be-verbin imperfektin kielto: she → wasn't.]] happy. We [[paid / pay / have paid ; Kerronta menneessä → imperfekti. Pay – paid.]] for the new window with our pocket money.` },
  { title: 'A week in Saariselkä', text: `Last winter we [[spent / spend / have spent ; Last winter → imperfekti. Spend – spent.]] a week in Saariselkä. Every day we [[skied / ski / have skied ; Toistuva tapa menneisyydessä → imperfekti.]] for hours. One evening we [[were sitting / sat / are sitting ; Toiminta oli käynnissä, kun revontulet ilmestyivät → past continuous.]] in the hot tub when the northern lights [[appeared / appear / have appeared ; Keskeyttävä tapahtuma → imperfekti.]]. My dad [[took / takes / has taken ; Kerronta menneessä → imperfekti. Take – took.]] lots of photos. We [[saw / see / have seen ; Kerronta menneessä → imperfekti. See – saw.]] reindeer too. The cold [[didn't bother / doesn't bother / hasn't bothered ; Imperfektin kielto: didn't + perusmuoto.]] us at all.` },
  { title: 'A famous singer', text: `Last spring I [[met / meet / have met ; Last spring → imperfekti. Meet – met.]] a famous singer at Helsinki Airport. I [[was buying / bought / am buying ; Toiminta oli käynnissä, kun hän tuli → past continuous.]] a sandwich when she [[walked / walks / has walked ; Keskeyttävä tapahtuma → imperfekti.]] into the café. She [[was wearing / wears / is wearing ; Kuvaus siitä, mitä hänellä oli sillä hetkellä päällä → past continuous.]] big sunglasses. I [[asked / ask / have asked ; Kerronta menneessä → imperfekti.]] for a photo, and she [[said / says / has said ; Kerronta menneessä → imperfekti. Say – said.]] yes. My hands [[were shaking / are shaking / have shaken ; Kuvaa tilannetta kuvan ottamisen hetkellä → past continuous.]] while we took the photo.` },
  { title: 'Lost in the forest', text: `Last autumn my uncle and I [[went / go / have gone ; Last autumn → imperfekti.]] mushroom picking. We [[were walking / walked / are walking ; Toiminta oli käynnissä, kun sumu tuli → past continuous.]] deeper into the forest when the fog [[came / comes / has come ; Keskeyttävä tapahtuma → imperfekti.]]. Suddenly we [[didn't know / don't know / haven't known ; Imperfektin kielto: didn't + perusmuoto.]] where we were. My phone [[didn't work / doesn't work / hasn't worked ; Imperfektin kielto.]] there. After an hour we [[heard / hear / have heard ; Kerronta menneessä → imperfekti. Hear – heard.]] a dog. A farmer [[was looking / looked / is looking ; Toiminta oli käynnissä sillä hetkellä → past continuous.]] for his cows nearby, and he [[showed / shows / has shown ; Kerronta menneessä → imperfekti.]] us the way.` },
  { title: 'Moving house', text: `Two years ago my family [[moved / moves / has moved ; Ago → imperfekti.]] from Kuopio to Espoo. I [[didn't want / don't want / haven't wanted ; Imperfektin kielto: didn't + perusmuoto.]] to leave my friends. When the moving truck [[arrived / arrives / has arrived ; Lyhyt tapahtuma → imperfekti.]], it [[was raining / rained / is raining ; Taustalla käynnissä → past continuous.]]. The men [[carried / carry / have carried ; Kerronta menneessä → imperfekti. Carry → carried.]] our furniture into the truck. In Espoo, a girl from next door [[came / comes / has come ; Kerronta menneessä → imperfekti.]] to say hello. She [[brought / brings / has brought ; Kerronta menneessä → imperfekti. Bring – brought.]] us cookies.` },
  { title: 'The maths exam', text: `Last Thursday we [[had / have / have had ; Last Thursday → imperfekti.]] a big maths exam. I [[studied / study / have studied ; Kerronta menneessä → imperfekti. Study → studied.]] hard the night before. Everyone [[was writing / wrote / is writing ; Toiminta oli käynnissä, kun puhelin soi → past continuous.]] quietly when suddenly a phone [[rang / rings / has rung ; Keskeyttävä tapahtuma → imperfekti.]]. It [[was / is / were ; Be-verbin imperfekti: it → was.]] the teacher's phone! Everybody [[laughed / laughs / has laughed ; Kerronta menneessä → imperfekti.]]. I [[finished / finish / have finished ; Kerronta menneessä → imperfekti.]] the exam ten minutes early.` },
  { title: 'A day in Hanko', text: `Last July we [[drove / drive / have driven ; Last July → imperfekti. Drive – drove.]] to Hanko. When we got there, the sun [[was shining / shines / has shone ; Taustalla käynnissä → past continuous.]]. My sister [[built / builds / has built ; Kerronta menneessä → imperfekti. Build – built.]] a huge sandcastle. While I [[was swimming / swam / am swimming ; While + käynnissä ollut toiminta → past continuous.]], a seagull [[stole / steals / has stolen ; Keskeyttävä tapahtuma → imperfekti. Steal – stole.]] my sandwich. Dad [[laughed / laughs / has laughed ; Kerronta menneessä → imperfekti.]] so much. We [[stayed / stay / have stayed ; Kerronta menneessä → imperfekti.]] there until sunset.` },
  { title: 'The surprise party', text: `Last Saturday was Mum's 40th birthday. We [[planned / plan / have planned ; Kerronta menneessä → imperfekti. Plan → planned (konsonantti kahdentuu).]] a surprise party. While she [[was shopping / shopped / is shopping ; While + käynnissä ollut toiminta → past continuous.]], we [[decorated / decorate / have decorated ; Kerronta menneessä → imperfekti.]] the living room. When she [[opened / opens / has opened ; Lyhyt tapahtuma → imperfekti.]] the door, all her friends [[were hiding / hid / are hiding ; Toiminta oli käynnissä oven aukeamisen hetkellä → past continuous.]] behind the sofa. They [[jumped / jump / have jumped ; Kerronta menneessä → imperfekti.]] up and shouted "Surprise!" Mum [[cried / cries / has cried ; Kerronta menneessä → imperfekti. Cry → cried.]] with happiness.` },
  { title: 'An old photo', text: `Yesterday I [[found / find / have found ; Yesterday → imperfekti. Find – found.]] an old photo in the attic. In the photo my grandparents [[were dancing / danced / are dancing ; Kuvassa toiminta on käynnissä → past continuous.]] at their wedding. Grandma [[was wearing / wears / is wearing ; Kuvaus kuvan hetkestä → past continuous.]] a long white dress. I [[showed / show / have shown ; Kerronta menneessä → imperfekti.]] the photo to Grandma. She [[smiled / smiles / has smiled ; Kerronta menneessä → imperfekti.]] and [[told / tells / has told ; Kerronta menneessä → imperfekti. Tell – told.]] me the story of that day. They [[met / meet / have met ; Menneisyyden ajankohta (in 1965) → imperfekti.]] at a dance in 1965.` },
  { title: 'Football camp', text: `Last summer I [[went / go / have gone ; Last summer → imperfekti.]] to a football camp. We [[trained / train / have trained ; Toistuva tapa menneisyydessä → imperfekti.]] three times a day. One morning we [[were practising / practised / are practising ; Toiminta oli käynnissä, kun pelaaja tuli → past continuous.]] penalties when a famous player [[visited / visits / has visited ; Keskeyttävä tapahtuma → imperfekti.]] the camp. He [[gave / gives / has given ; Kerronta menneessä → imperfekti. Give – gave.]] us tips. I [[didn't believe / don't believe / haven't believed ; Imperfektin kielto: didn't + perusmuoto.]] my eyes. At the end of the camp, our team [[won / wins / has won ; Kerronta menneessä → imperfekti. Win – won.]] the tournament.` },
  { title: 'The noisy neighbour', text: `Last night I [[was trying / tried / am trying ; Toiminta oli käynnissä, kun meteli alkoi → past continuous.]] to sleep when loud music [[started / starts / has started ; Keskeyttävä tapahtuma → imperfekti.]] next door. The neighbour [[was having / had / is having ; Käynnissä ollut toiminta → past continuous.]] a party. I [[waited / wait / have waited ; Kerronta menneessä → imperfekti.]] for an hour. Then my dad [[knocked / knocks / has knocked ; Kerronta menneessä → imperfekti.]] on their door. The neighbour [[said / says / has said ; Kerronta menneessä → imperfekti. Say – said.]] sorry and turned the music down. At last I [[fell / fall / have fallen ; Kerronta menneessä → imperfekti. Fall – fell.]] asleep.` },
  { title: 'Skating on the lake', text: `Last Sunday my friends and I [[went / go / have gone ; Last Sunday → imperfekti.]] skating on the lake. The ice [[was / were / is ; Be-verbin imperfekti: ice (= it) → was.]] thick and smooth. While we [[were skating / skated / are skating ; While + käynnissä ollut toiminta → past continuous.]], we [[saw / see / have seen ; Kerronta menneessä → imperfekti. See – saw.]] an old man. He [[was fishing / fished / is fishing ; Toiminta oli käynnissä näkemishetkellä → past continuous.]] through a hole in the ice. Just then he [[caught / catches / has caught ; Lyhyt tapahtuma → imperfekti. Catch – caught.]] a big perch. He [[gave / gives / has given ; Kerronta menneessä → imperfekti. Give – gave.]] it to us.` },
  { title: 'A rainy holiday', text: `Last year we [[rented / rent / have rented ; Last year → imperfekti.]] a cottage in Savonlinna. It [[rained / rains / has rained ; Kerronta menneessä → imperfekti.]] almost every day. One afternoon we [[were playing / played / are playing ; Toiminta oli käynnissä, kun katto alkoi vuotaa → past continuous.]] cards when the roof [[started / starts / has started ; Keskeyttävä tapahtuma → imperfekti.]] to leak. Dad [[climbed / climbs / has climbed ; Kerronta menneessä → imperfekti.]] onto the roof to fix it. While he [[was working / worked / is working ; While + käynnissä ollut toiminta → past continuous.]], he [[slipped / slips / has slipped ; Keskeyttävä tapahtuma → imperfekti. Slip → slipped.]], but luckily he [[didn't fall / doesn't fall / hasn't fallen ; Imperfektin kielto: didn't + perusmuoto.]].` },
  { title: 'The Christmas concert', text: `Last December I [[played / play / have played ; Last December → imperfekti.]] the piano at our school's Christmas concert. I [[was / were / am ; Be-verbin imperfekti: I → was.]] very nervous. While I [[was waiting / waited / am waiting ; While + käynnissä ollut toiminta → past continuous.]] for my turn, my teacher [[gave / gives / has given ; Kerronta menneessä → imperfekti. Give – gave.]] me a glass of water. When I [[started / start / have started ; Kerronta menneessä → imperfekti.]] playing, I [[forgot / forget / have forgotten ; Kerronta menneessä → imperfekti. Forget – forgot.]] my nerves. Everyone [[clapped / claps / has clapped ; Kerronta menneessä → imperfekti. Clap → clapped.]] at the end.` },
  { title: 'The missing cat', text: `Last week our cat Misu [[disappeared / disappears / has disappeared ; Last week → imperfekti.]]. We [[looked / look / have looked ; Kerronta menneessä → imperfekti.]] for her everywhere. On the third day I [[was walking / walked / am walking ; Toiminta oli käynnissä, kun kuulin äänen → past continuous.]] past the neighbour's garage when I [[heard / hear / have heard ; Keskeyttävä tapahtuma → imperfekti. Hear – heard.]] a quiet meow. Misu [[was sitting / sat / is sitting ; Tilanne löytöhetkellä → past continuous.]] on a shelf inside. She [[was / were / is ; Be-verbin imperfekti: she → was.]] hungry but fine. The neighbour [[didn't know / doesn't know / hasn't known ; Imperfektin kielto: didn't + perusmuoto.]] that she was there.` },
  { title: 'At the dentist', text: `Yesterday I [[went / go / have gone ; Yesterday → imperfekti.]] to the dentist. While I [[was sitting / sat / am sitting ; While + käynnissä ollut toiminta → past continuous.]] in the waiting room, a little boy [[started / starts / has started ; Kerronta menneessä → imperfekti.]] to cry. The dentist [[checked / checks / has checked ; Kerronta menneessä → imperfekti.]] my teeth. She [[found / finds / has found ; Kerronta menneessä → imperfekti. Find – found.]] one small hole. I [[didn't feel / don't feel / haven't felt ; Imperfektin kielto: didn't + perusmuoto.]] any pain. After that I [[promised / promise / have promised ; Kerronta menneessä → imperfekti.]] to eat less candy.` },
  { title: 'The first snow', text: `Last November the first snow [[fell / falls / has fallen ; Last November → imperfekti. Fall – fell.]] at night. When I [[woke / wake / have woken ; Kerronta menneessä → imperfekti. Wake – woke.]] up, everything [[was / were / is ; Be-verbin imperfekti: everything (= it) → was.]] white. My little brother [[was already playing / already played / is already playing ; Toiminta oli jo käynnissä heräämishetkellä → past continuous.]] outside. Dad's car [[didn't start / doesn't start / hasn't started ; Imperfektin kielto: didn't + perusmuoto.]] because of the cold, so we [[walked / walk / have walked ; Kerronta menneessä → imperfekti.]] to school. On the way we [[threw / throw / have thrown ; Kerronta menneessä → imperfekti. Throw – threw.]] snowballs at each other.` },
  { title: 'An unlucky morning', text: `Last Tuesday [[was / is / were ; Be-verbin imperfekti: Tuesday (= it) → was.]] a terrible day. My alarm clock [[didn't ring / doesn't ring / hasn't rung ; Imperfektin kielto: didn't + perusmuoto.]], so I [[woke / wake / have woken ; Kerronta menneessä → imperfekti.]] up late. I [[was brushing / brushed / am brushing ; Toiminta oli käynnissä, kun näin bussin → past continuous.]] my teeth when I [[saw / see / have seen ; Keskeyttävä tapahtuma → imperfekti. See – saw.]] my bus go past. I [[ran / run / have run ; Kerronta menneessä → imperfekti. Run – ran.]] all the way to school. When I arrived, my class [[was already doing / already did / is already doing ; Toiminta oli jo käynnissä saapumishetkellä → past continuous.]] a test.` },
  { title: 'The village festival', text: `When I was small, our village [[had / has / has had ; Toistuva tapa menneisyydessä → imperfekti.]] a festival every summer. People [[sold / sell / have sold ; Kerronta menneessä → imperfekti. Sell – sold.]] homemade cakes and berries. One year, while the band [[was playing / played / is playing ; While + käynnissä ollut toiminta → past continuous.]], a goat [[escaped / escapes / has escaped ; Keskeyttävä tapahtuma → imperfekti.]] from a farm. It [[ran / runs / has run ; Kerronta menneessä → imperfekti. Run – ran.]] straight onto the dance floor. Everybody [[laughed / laughs / has laughed ; Kerronta menneessä → imperfekti.]]. The farmer [[caught / catches / has caught ; Kerronta menneessä → imperfekti. Catch – caught.]] it after ten minutes.` },
  { title: 'A day at the market', text: `Last Saturday I [[went / go / have gone ; Last Saturday = päättynyt aika → imperfekti. Go – went.]] to the market. The sun [[shone / shines / has shone ; Menneen tapahtuman kerronta → imperfekti.]] and many people [[bought / buy / have bought ; Kerronta menneessä → imperfekti. Buy – bought.]] fruit. I [[met / meet / have met ; Kerronta menneessä → imperfekti. Meet – met.]] my old teacher there. We [[were talking / talked / talk ; Pidempi toiminta, jonka toinen tapahtuma keskeytti (when …) → past continuous: were + -ing.]] when a dog suddenly [[stole / steals / has stolen ; Keskeyttävä lyhyt tapahtuma → imperfekti. Steal – stole.]] a sausage from a stall. The seller [[shouted / shouts / has shouted ; Kerronta menneessä → imperfekti.]] and [[ran / run / has run ; Kerronta menneessä → imperfekti. Run – ran.]] after it, but the dog [[didn't stop / doesn't stop / hasn't stopped ; Imperfektin kielto: didn't + perusmuoto.]].` },
  { title: 'Meeting the parents', text: `It was Thanksgiving last year when I [[met / meet / have met ; Last year → imperfekti. Meet – met.]] my spouse's parents for the first time. It [[snowed / snows / has snowed ; Kerronta menneessä → imperfekti.]] heavily, so we were late for dinner. When we finally [[arrived / arrive / have arrived ; Kerronta menneessä → imperfekti.]], I [[noticed / notice / have noticed ; Kerronta menneessä → imperfekti.]] that my spouse [[felt / feels / has felt ; Kerronta menneessä → imperfekti. Feel – felt.]] fine, but I [[wasn't / am not / haven't been ; Be-verbin imperfekti: I → wasn't.]] calm. My mother-in-law [[greeted / greets / has greeted ; Kerronta menneessä → imperfekti.]] us at the door while her husband [[set / sets / has set ; Kerronta menneessä → imperfekti. Set – set – set.]] the table.` },
];

const CLOZE_PERFECT = [
  { title: 'A young runner', text: `Tom is a young runner. He [[has won / has been winning / won ; So far = tähän asti, lukumäärä → perfekti: has + 3. muoto.]] six medals so far. He [[has been training / trained / is trained ; Since January, jatkuu yhä → kestoperfekti: has been + -ing.]] every day since January, and he [[hasn't missed / hasn't been missing / didn't miss ; Perfektin kielto: hasn't + 3. muoto. Yksittäinen tulos → ei kestomuotoa.]] a single session. This week he [[has run / has been running / ran ; Tämä viikko kestää yhä, kilometrimäärä (tulos) → perfekti: has + 3. muoto.]] 80 kilometres. His coach [[has been helping / helped / helps ; For two years, jatkuu yhä → kestoperfekti.]] him for two years. Tom [[has taken / has been taking / took ; Valmis teko (muutama vapaapäivä) → perfekti: has + 3. muoto.]] a few days off, and his parents [[have already booked / have already been booking / already books ; Already + valmis teko → perfekti: have + 3. muoto.]] a holiday for him.` },
  { title: 'New in town', text: `We [[have lived / lived / has lived ; Since January, jatkuu yhä → perfekti: we → have + 3. muoto.]] in Oulu since January and we [[haven't made / haven't make / hasn't made ; Yet = vielä → perfektin kielto: haven't + 3. muoto.]] many friends yet. My brother [[has joined / have joined / joined ; Perfekti: he → has + 3. muoto.]] a football team, and he [[has been training / is train / have been training ; For weeks, jatkuu yhä → has been + -ing. He → has.]] with them for weeks. My mum [[has found / have found / find ; Perfekti: she → has + 3. muoto. Find – found – found.]] a new job at a hospital. I [[have never been / never was / has never been ; Never + perfekti: I → have never been.]] to such a cold place before.` },
];

const CLOZE_PLUPERFECT = [
  { title: 'A new hobby', text: `I [[had been looking / looked / have been looking ; Toiminta oli jatkunut jo, kun toinen asia tapahtui → kestopluskvamperfekti: had been + -ing.]] for a new hobby for some time when I [[found / had found / have found ; Päätapahtuma menneisyydessä → imperfekti.]] parkour. I [[had been playing / have been playing / was played ; For 6 years ennen muutosta → had been + -ing.]] football for six years, but I thought the time [[had come / has come / comes ; Aikaisempi menneisyys → had + 3. muoto.]] to try something new. Football [[hadn't been giving / hasn't been giving / didn't be giving ; Aikaisempi tila → hadn't been + -ing.]] me much, and I felt that I [[hadn't been enjoying / haven't enjoyed / wasn't enjoy ; Aikaisempi jatkunut tila → hadn't been + -ing.]] it for a long time. I [[hadn't told / haven't told / didn't telled ; Aikaisempi teko → hadn't + 3. muoto.]] my coach about quitting, but I knew that he [[had seen / has seen / sees ; Aikaisempi teko → had + 3. muoto. See – saw – seen.]] the change in me.` },
  { title: 'The missing key', text: `When I got home, I realised that I [[had left / have left / leave ; Aikaisempi teko → had + 3. muoto. Leave – left – left.]] my keys at school. My parents [[had gone / have gone / go ; Aikaisempi teko → had + 3. muoto. Go – went – gone.]] to a party, so I couldn't get in. I [[had been waiting / have been waiting / was wait ; Jatkui, kun naapuri tuli → had been + -ing.]] for an hour when my neighbour [[came / had come / comes ; Päätapahtuma menneisyydessä → imperfekti.]] home. She [[hadn't heard / hasn't heard / didn't heard ; Aikaisempi tapahtuma → hadn't + 3. muoto.]] about my problem, but she [[offered / has offered / offers ; Päätapahtuma menneisyydessä → imperfekti.]] me a cup of tea. Luckily, my mum [[had put / has put / had putted ; Aikaisempi teko → had + 3. muoto.]] a spare key under the flowerpot, and I [[had never noticed / have never noticed / never notices ; Never + pluskvamperfekti → had never noticed.]] it before.` },
];

const CLOZE_MIXED = [
  { title: 'A summer job', text: `Last summer I [[worked / work / have worked ; Last summer → imperfekti.]] at a café in Helsinki. I [[have wanted / wanted / am wanting ; Want on tilaverbi. Tapa ja pitkäaikainen toive tähän asti → perfekti.]] to work there since I was twelve. Every day I [[made / make / have made ; Every day viittaa menneen kesän toistuvaan tapaan → imperfekti.]] coffee for hundreds of people. Right now I [[am studying / study / have studied ; Right now → kestopreesens.]] for my exams, but I [[have been thinking / was think / am thought ; Tähän asti jatkunut ajattelu → kestoperfekti.]] about my next summer job. My friend [[has already found / have already found / already finds ; Already + nyt voimassa oleva tilanne → perfekti.]] one. Before she got the job, she [[had sent / has sent / was sending ; Aikaisempi teko ennen työn saamista → pluskvamperfekti.]] twenty applications.` },
  { title: 'Weekend plans', text: `It [[is raining / rains / has rain ; Tapahtuu nyt → kestopreesens.]] outside, so we [[stay / are stay / stays ; Nykyhetken päätös → preesens. We → perusmuoto.]] at home today. Yesterday we [[went / go / had gone ; Yesterday → imperfekti.]] to the cinema, and the film [[was / is / has been ; Yesterday → imperfekti. Film (= it) → was.]] great. I [[have seen / saw / see ; Kokemus elämän varrella tähän asti → perfekti.]] it twice now. My sister [[hasn't watched / haven't watched / hadn't watched ; Perfektin kielto: hasn't + 3. muoto.]] it yet. When we [[arrived / have arrived / arrive ; Menneen tapahtuman kerronta → imperfekti.]] at the cinema, the film [[had already started / has already started / already starts ; Aikaisempi teko → pluskvamperfekti.]], so we [[missed / miss / have missed ; Menneen tapahtuman kerronta → imperfekti.]] the beginning.` },
];

// Muuttaa tekstin aukoiksi: { segments: [teksti, aukko, teksti, ...], gaps: [{ options, value, why }] }
function parseCloze(src) {
  const re = /\[\[(.+?)\]\]/g;
  const segments = [];
  const gaps = [];
  let last = 0, m;
  while ((m = re.exec(src)) !== null) {
    segments.push(src.slice(last, m.index));
    const [opts, why] = m[1].split(' ; ').map(s => s.trim());
    const options = opts.split(' / ');
    gaps.push({ options, value: options[0], why });
    last = m.index + m[0].length;
  }
  segments.push(src.slice(last));
  return { segments, gaps };
}

function clozeGen(label, passages, instruction = 'Valitse jokaiseen aukkoon oikea vaihtoehto.', fresh = 0) {
  const next = deck(passages, fresh);
  return () => {
    const { title, text } = next();
    const { segments, gaps } = parseCloze(text);
    const shuffled = gaps.map(g => ({ ...g, options: shuffle(g.options) }));
    const filled = segments.map((seg, i) => seg + (i < gaps.length ? `<strong>${gaps[i].value}</strong>` : '')).join('');
    return {
      label,
      text: true,
      why: '',
      prompt: `${instruction}<span class="fi">${title}</span>`,
      problem: '',
      answer: { type: 'cloze', segments, gaps: shuffled, filled },
      steps: gaps.map((g, i) => ({ text: `${i + 1}. ${g.why}`, math: [g.value] })),
      final: filled,
    };
  };
}

const ENGLISH_CATEGORIES = [
  {
    id: 'preesens', name: 'Preesens', short: 'Preesens',
    subs: [
      { id: 'preesens-normaali', name: 'Normaalimuodot', short: 'Normaali', gens: [[choiceGen('Preesens · normaali', ENG_PRESENT_POS), 1]] },
      { id: 'preesens-kielto', name: 'Kielteiset muodot', short: 'Kielteinen', gens: [[choiceGen('Preesens · kielteinen', ENG_PRESENT_NEG), 1]] },
      { id: 'preesens-kysymys', name: 'Kysymysmuoto', short: 'Kysymys', gens: [[choiceGen('Preesens · kysymys', ENG_PRESENT_Q), 1]] },
    ],
  },
  {
    id: 'kestopreesens', name: 'Kestopreesens', short: 'Kesto-pr.',
    subs: [
      { id: 'kestopreesens-normaali', name: 'Normaalimuodot', short: 'Normaali', gens: [[choiceGen('Kestopreesens · normaali', ENG_PROG_POS), 1]] },
      { id: 'kestopreesens-kielto', name: 'Kielteiset muodot', short: 'Kielteinen', gens: [[choiceGen('Kestopreesens · kielteinen', ENG_PROG_NEG), 1]] },
      { id: 'kestopreesens-kysymys', name: 'Kysymysmuoto', short: 'Kysymys', gens: [[choiceGen('Kestopreesens · kysymys', ENG_PROG_Q), 1]] },
    ],
  },
  {
    id: 'imperfekti', name: 'Imperfekti', short: 'Imperfekti',
    subs: [
      { id: 'imperfekti-normaali', name: 'Normaalimuodot', short: 'Normaali', gens: [[choiceGen('Imperfekti · normaali', ENG_PAST_POS), 1]] },
      { id: 'imperfekti-kielto', name: 'Kielteiset muodot', short: 'Kielteinen', gens: [[choiceGen('Imperfekti · kielteinen', ENG_PAST_NEG), 1]] },
      { id: 'imperfekti-kysymys', name: 'Kysymysmuoto', short: 'Kysymys', gens: [[choiceGen('Imperfekti · kysymys', ENG_PAST_Q), 1]] },
    ],
  },
  {
    id: 'perfekti', name: 'Perfekti', short: 'Perfekti',
    subs: [
      { id: 'perfekti-normaali', name: 'Normaalimuodot', short: 'Normaali', gens: [[choiceGen('Perfekti · normaali', ENG_PERF_POS), 1]] },
      { id: 'perfekti-kielto', name: 'Kielteiset muodot', short: 'Kielteinen', gens: [[choiceGen('Perfekti · kielteinen', ENG_PERF_NEG), 1]] },
      { id: 'perfekti-kysymys', name: 'Kysymysmuoto', short: 'Kysymys', gens: [[choiceGen('Perfekti · kysymys', ENG_PERF_Q), 1]] },
    ],
  },
  {
    id: 'kestoperfekti', name: 'Kestoperfekti', short: 'Kesto-perf.',
    subs: [
      { id: 'kestoperfekti-normaali', name: 'Normaalimuodot', short: 'Normaali', gens: [[choiceGen('Kestoperfekti · normaali', ENG_PERFPROG_POS), 1]] },
      { id: 'kestoperfekti-kielto', name: 'Kielteiset muodot', short: 'Kielteinen', gens: [[choiceGen('Kestoperfekti · kielteinen', ENG_PERFPROG_NEG), 1]] },
      { id: 'kestoperfekti-kysymys', name: 'Kysymysmuoto', short: 'Kysymys', gens: [[choiceGen('Kestoperfekti · kysymys', ENG_PERFPROG_Q), 1]] },
    ],
  },
  {
    id: 'pluskvamperfekti', name: 'Pluskvamperfekti', short: 'Pluskvam.',
    subs: [
      { id: 'pluskvamperfekti-normaali', name: 'Normaalimuodot', short: 'Normaali', gens: [[choiceGen('Pluskvamperfekti · normaali', ENG_PLUP_POS), 1]] },
      { id: 'pluskvamperfekti-kielto', name: 'Kielteiset muodot', short: 'Kielteinen', gens: [[choiceGen('Pluskvamperfekti · kielteinen', ENG_PLUP_NEG), 1]] },
      { id: 'pluskvamperfekti-kysymys', name: 'Kysymysmuoto', short: 'Kysymys', gens: [[choiceGen('Pluskvamperfekti · kysymys', ENG_PLUP_Q), 1]] },
    ],
  },
  {
    id: 'kestopluskvamperfekti', name: 'Kestopluskvamperfekti', short: 'Kesto-pluskv.',
    subs: [
      { id: 'kestopluskvamperfekti-normaali', name: 'Normaalimuodot', short: 'Normaali', gens: [[choiceGen('Kestopluskvamperfekti · normaali', ENG_PLUPPROG_POS), 1]] },
      { id: 'kestopluskvamperfekti-kielto', name: 'Kielteiset muodot', short: 'Kielteinen', gens: [[choiceGen('Kestopluskvamperfekti · kielteinen', ENG_PLUPPROG_NEG), 1]] },
      { id: 'kestopluskvamperfekti-kysymys', name: 'Kysymysmuoto', short: 'Kysymys', gens: [[choiceGen('Kestopluskvamperfekti · kysymys', ENG_PLUPPROG_Q), 1]] },
    ],
  },
  {
    id: 'aukko', name: 'Aukkotehtävät', short: 'Aukot',
    subs: [
      { id: 'aukko-preesens', name: 'Preesens', short: 'Preesens', gens: [[clozeGen('Aukkoteksti · preesens', CLOZE_PRESENT, 'Valitse oikea muoto (yleis- tai kestopreesens).', 30), 1]] },
      { id: 'aukko-imperfekti', name: 'Imperfekti', short: 'Imperfekti', gens: [[clozeGen('Aukkoteksti · imperfekti', CLOZE_PAST, 'Valitse oikea muoto (yleis- tai kestoimperfekti).', 30), 1]] },
      { id: 'aukko-perfekti', name: 'Perfekti', short: 'Perfekti', gens: [[clozeGen('Aukkoteksti · perfekti', CLOZE_PERFECT, 'Valitse paras vaihtoehto (yleis- tai kestoperfekti).'), 1]] },
      { id: 'aukko-pluskvamperfekti', name: 'Pluskvamperfekti', short: 'Pluskvam.', gens: [[clozeGen('Aukkoteksti · pluskvamperfekti', CLOZE_PLUPERFECT, 'Valitse paras vaihtoehto (yleis- tai kestopluskvamperfekti).'), 1]] },
      { id: 'aukko-kaikki', name: 'Kaikki aikamuodot', short: 'Kaikki', gens: [[clozeGen('Aukkoteksti · sekaisin', CLOZE_MIXED, 'Valitse oikea vaihtoehto (preesens, imperfekti, perfekti, pluskvamperfekti).'), 1]] },
    ],
  },
  { id: 'yleis', name: 'Yleisaikamuodot', short: 'Yleis', gens: [[choiceGen('Yleisaikamuodot', ENG_SIMPLE), 1]] },
  { id: 'kesto', name: 'Kestoaikamuodot', short: 'Kesto', gens: [[choiceGen('Kestoaikamuodot', ENG_CONTINUOUS), 1]] },
  { id: 'futuuri', name: 'Futuuri', short: 'Futuuri', gens: [[choiceGen('Futuuri', ENG_FUTURE), 1]] },
  { id: 'konditionaali', name: 'Konditionaali', short: 'Kondit.', gens: [[choiceGen('Konditionaali', ENG_CONDITIONAL), 1]] },
  { id: 'ehtolauseet', name: 'Ehtolauseet', short: 'If', gens: [[choiceGen('Ehtolauseet', ENG_IF), 1]] },
  { id: 'sanajarjestys', name: 'Sanajärjestys', short: 'Järjestys', gens: [[orderGen('Sanajärjestys', ENG_ORDER), 1]] },
];

if (typeof module !== 'undefined') {
  module.exports = { ENGLISH_CATEGORIES, parseCloze, CLOZE_PRESENT, CLOZE_PAST, CLOZE_PERFECT, CLOZE_PLUPERFECT, CLOZE_MIXED, ENG_PRESENT_POS, ENG_PRESENT_NEG, ENG_PRESENT_Q, ENG_PROG_POS, ENG_PROG_NEG, ENG_PROG_Q, ENG_PAST_POS, ENG_PAST_NEG, ENG_PAST_Q, ENG_PERF_POS, ENG_PERF_NEG, ENG_PERF_Q, ENG_PERFPROG_POS, ENG_PERFPROG_NEG, ENG_PERFPROG_Q, ENG_PLUP_POS, ENG_PLUP_NEG, ENG_PLUP_Q, ENG_PLUPPROG_POS, ENG_PLUPPROG_NEG, ENG_PLUPPROG_Q, ENG_SIMPLE, ENG_CONTINUOUS, ENG_FUTURE, ENG_CONDITIONAL, ENG_IF, ENG_ORDER, engRows };
}
