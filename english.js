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
function deck(items) {
  let queue = [];
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
  { id: 'yleis', name: 'Yleisaikamuodot', short: 'Yleis', gens: [[choiceGen('Yleisaikamuodot', ENG_SIMPLE), 1]] },
  { id: 'kesto', name: 'Kestoaikamuodot', short: 'Kesto', gens: [[choiceGen('Kestoaikamuodot', ENG_CONTINUOUS), 1]] },
  { id: 'futuuri', name: 'Futuuri', short: 'Futuuri', gens: [[choiceGen('Futuuri', ENG_FUTURE), 1]] },
  { id: 'konditionaali', name: 'Konditionaali', short: 'Kondit.', gens: [[choiceGen('Konditionaali', ENG_CONDITIONAL), 1]] },
  { id: 'ehtolauseet', name: 'Ehtolauseet', short: 'If', gens: [[choiceGen('Ehtolauseet', ENG_IF), 1]] },
  { id: 'sanajarjestys', name: 'Sanajärjestys', short: 'Järjestys', gens: [[orderGen('Sanajärjestys', ENG_ORDER), 1]] },
];

if (typeof module !== 'undefined') {
  module.exports = { ENGLISH_CATEGORIES, ENG_PRESENT_POS, ENG_PRESENT_NEG, ENG_PRESENT_Q, ENG_PROG_POS, ENG_PROG_NEG, ENG_PROG_Q, ENG_PAST_POS, ENG_PAST_NEG, ENG_PAST_Q, ENG_SIMPLE, ENG_CONTINUOUS, ENG_FUTURE, ENG_CONDITIONAL, ENG_IF, ENG_ORDER, engRows };
}
