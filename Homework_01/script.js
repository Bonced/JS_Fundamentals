const T={
vcs:["СКВ","система контролю версій · Version Control System","Система, що зберігає історію змін файлів, дає змогу порівнювати й відкочувати версії та працювати над проєктом командою.",["repo","commit"],[]],
repo:["Репозиторій","repository","Проєкт разом з усією історією змін. Буває [[local|локальний]] і [[remote|віддалений]].",["local","remote"],["init"]],
local:["Локальний репозиторій","","Сховище Git на твоєму комп’ютері в прихованій теці .git. Працює без інтернету.",["repo","workdir"],["init"]],
remote:["Віддалений репозиторій","remote","Репозиторій у мережі (наприклад, GitHub). Потрібен для обміну кодом і командної роботи. Для особистого проєкту не обов’язковий.",["origin","push"],["remote","push","pull"]],
origin:["origin","","Типова назва віддаленого репозиторію. Це просто псевдонім адреси.",["remote"],["remote"]],
workdir:["Робочий каталог","working directory","Тека з файлами проєкту, де ти правиш код. Зміни самі до історії не потрапляють: потрібні [[staging|add]] і [[commit|commit]].",["staging","untracked"],["status"]],
staging:["Індекс","область індексації · staging area","Проміжна зона, де збирається вміст наступного коміту. Дає змогу включити лише потрібні зміни.",["commit","workdir"],["add"]],
untracked:["Untracked","не відстежується","Файл, який Git ще не відстежує. Після git add він стає staged.",["staging"],["status","add"]],
commit:["Коміт","commit","Зафіксований [[snapshot|знімок]] проєкту з автором, датою, повідомленням і посиланням на попередній коміт. Повідомлення має описувати, що змінилося.",["snapshot","hash"],["commit","log"]],
snapshot:["Знімок","снапшот · snapshot","Стан файлів на момент коміту. Незмінені файли не копіюються, а посилаються на вже збережені.",["commit"],[]],
hash:["Хеш","hash","Довгий ідентифікатор коміту, обчислений за вмістом. Змінюється від будь-якої правки, тому історію не можна непомітно підмінити.",["commit"],["log"]],
branch:["Гілка","branch","Рухомий вказівник на коміт і незалежний ланцюжок комітів. Створення гілки не копіює теку проєкту.",["main","head","merge"],["branch","switch"]],
main:["main","","Основна гілка проєкту. Напряму в неї не пушать: працюють в окремих гілках і вливають через [[pr|pull request]].",["branch","pr"],["init"]],
head:["HEAD","","Вказівник на поточне місце в історії, зазвичай на активну гілку. У git log видно «HEAD -> main».",["branch"],["log"]],
push:["push","","Надсилання локальних комітів до [[remote|віддаленого репозиторію]].",["remote","upstream"],["push"]],
pull:["pull","","Отримання змін із віддаленого репозиторію та одразу злиття в поточну гілку. Це [[fetch|fetch]] плюс merge.",["fetch","ff"],["pull"]],
fetch:["fetch","","Лише завантажити нові коміти, не вливаючи їх у поточну гілку.",["pull"],["fetch"]],
ff:["Fast-forward","","Прискорене злиття: вказівник гілки просто зсувається до новішого коміту, без коміту злиття. Можливе, коли в локальній гілці немає власних комітів.",["pull","merge"],["pull"]],
merge:["Злиття","merge","Об’єднання змін однієї гілки з іншою. Результат може містити окремий коміт злиття.",["pr","conflict"],[]],
pr:["Pull request","","Запит на включення змін з однієї гілки в іншу. Створюється на GitHub. Дає перегляд, обговорення та [[review|code review]]. Сам нічого не зливає, доки ти не підтвердиш.",["review","merge","branch"],[]],
review:["Code review","","Перевірка коду іншими розробниками: коментарі до рядків у pull request, зауваження, правки.",["pr"],[]],
upstream:["upstream","","Зв’язок локальної гілки з віддаленою. Задається прапорцем -u під час першого push, після чого досить git push і git pull.",["push","branch"],["push"]],
gitignore:[".gitignore","","Файл зі списком того, що Git не має відстежувати: системне сміття, залежності, секрети.",["untracked"],[]],
conflict:["Конфлікт","","Ситуація, коли правки несумісні й Git не може об’єднати їх сам. Розбір на наступній лекції.",["merge"],[]],
marker:["Маркери конфлікту","conflict markers","Службові рядки (&lt;&lt;&lt;&lt;&lt;&lt;&lt;, =======, &gt;&gt;&gt;&gt;&gt;&gt;&gt;), якими Git позначає суперечливі версії у файлі. Їх треба видалити, залишивши остаточний вміст. Це не просто стирання маркерів, а свідоме узгодження змін.",["conflict"],["diff"]],
workflow:["Workflow","воркфлоу","Послідовність дій у роботі з Git: оновити main → створити гілку → змінити файли → перевірити status → add і commit → push → pull request → злиття → синхронізація й видалення гілки.",["branch","pr"],["status","commit","push"]],
dom:["DOM","Document Object Model","Об’єктне подання документа в браузері. Не те саме, що HTML-файл: HTML це розмітка, а DOM її представлення, з яким працює браузер.",["semantic"],[]],
semantic:["Семантична розмітка","semantic HTML","Теги описують зміст і ієрархію документа, а не лише вигляд. Наприклад, заголовки h1–h6 будують структуру, і h1 на сторінці має бути один.",["dom"],[]],
selector:["Селектор","CSS selector","Частина CSS-правила, що визначає, до яких елементів воно застосовується. Правило складається з селектора й оголошень «властивість: значення».",["cascade","boxmodel"],[]],
cascade:["Каскад і специфічність","cascade, specificity","Коли кілька правил CSS стосуються одного елемента, браузер обирає за специфічністю селекторів, а за рівності за порядком запису. Не завжди перемагає останнє правило.",["selector"],[]],
boxmodel:["Box model","блокова модель","Кожен елемент це прямокутник: вміст, внутрішні відступи (padding), рамка (border) і зовнішні відступи (margin). Padding усередині елемента, margin за його межами.",["selector"],[]],
flex:["Flexbox","","Одновимірна модель макета: елементи розташовуються вздовж однієї осі (рядок або стовпець). Підходить для меню, груп кнопок, карток. display: flex задають контейнеру, його прямі діти стають flex-елементами.",["grid"],[]],
grid:["Grid","CSS Grid","Двовимірна модель макета: керує рядками й стовпцями одночасно. Зручна для галерей, карток і каркаса сторінки.",["flex"],[]],
idclass:["id і class","","id це унікальний ідентифікатор одного елемента на сторінці, class можна застосовувати до багатьох. Різницю важливо розуміти для селекторів у CSS.",["selector"],[]],
dyntype:["Динамічна типізація","dynamic typing","Тип даних визначається під час виконання й пов’язаний зі значенням, а не зі змінною. Одна змінна може послідовно зберігати число, рядок і логічне значення.",["primitive"],[]],
ecma:["ECMAScript","","Міжнародний стандарт мови: синтаксис, типи, оператори, функції, правила виконання. Його розвиває технічний комітет TC39. JavaScript — мова, реалізована за цим стандартом.",["engine","runtime"],[]],
engine:["Рушій JavaScript","engine","Програмний компонент, що розбирає й виконує код. Приклади: V8 (Chrome), SpiderMonkey (Firefox), JavaScriptCore (Safari). Усі реалізують стандарт, тож поведінка узгоджена.",["ecma","ast"],[]],
runtime:["Середовище виконання","runtime","Рушій плюс додаткові можливості (API): у браузері це DOM, події, мережа; у Node.js це файли, мережа, процеси. Синтаксис однаковий, набір API різний.",["engine","node"],[]],
ast:["Парсинг і AST","parsing, abstract syntax tree","Рушій перевіряє синтаксис і будує абстрактне синтаксичне дерево, а потім компілює й виконує код. Схема спрощена: сучасні рушії поєднують інтерпретацію з компіляцією під час виконання.",["engine"],[]],
node:["Node.js","","Середовище виконання JavaScript поза браузером на рушії V8. Підходить для серверів, роботи з файлами й мережею. Об’єкта document там немає.",["runtime"],[]],
gc:["Збирання сміття","garbage collection","Автоматичне керування пам’яттю: рушій звільняє пам’ять, зайняту об’єктами, які стали недосяжними.",["engine"],[]],
defer:["defer","","Атрибут тега script: браузер завантажує файл паралельно з обробкою документа, а виконує після завершення розбору, зберігаючи порядок скриптів.",["runtime"],[]],
let:["let","","Змінна, значення якої можна змінювати. Має блокову [[scope|область видимості]]. Повторне оголошення в тій самій області заборонене.",["const","var","scope"],[]],
const:["const","","Прив’язка, якій не можна присвоїти нове значення (TypeError). Початкове значення обов’язкове. Обмежує прив’язку, а не вміст об’єкта: властивості об’єкта змінювати можна. Object.freeze дає лише поверхове обмеження.",["let","var"],[]],
var:["var","","Старий спосіб оголошення: функціональна область видимості, дозволене повторне оголошення, підняття зі значенням undefined. У нових проєктах не рекомендований, зустрічається в старому коді.",["let","const","hoisting"],[]],
scope:["Область видимості","scope","Частина коду, де ідентифікатор доступний. Для let і const вона блокова (фігурні дужки, умова, тіло циклу), для var функціональна.",["let","hoisting"],[]],
hoisting:["Підняття оголошень","hoisting","Умовний термін: перед виконанням середовище створює прив’язки. Код фізично не переміщується. Для let і const прив’язка недоступна до ініціалізації, для var вона має значення undefined.",["tdz","var"],[]],
tdz:["Тимчасова мертва зона","TDZ","Період, коли прив’язка let або const уже існує, але ще не ініціалізована. Звернення до змінної в цей час дає ReferenceError. Змінна не відсутня в пам’яті: доступ до значення ще заборонений.",["hoisting","referr"],[]],
primitive:["Примітивні типи","primitive types","Сім незмінних типів: string, number, bigint, boolean, undefined, null, symbol. Операції створюють нові значення, а не змінюють наявні.",["objtype","dyntype"],[]],
objtype:["Об’єктний тип","object","Об’єкти з властивостями «ключ: значення», масиви, функції (об’єкти з можливістю виклику), Date, RegExp, Map, Set. На відміну від примітивів, мають ідентичність і можуть змінюватися.",["primitive"],[]],
referr:["ReferenceError","","Помилка під час звернення до неоголошеної змінної або до let/const у тимчасовій мертвій зоні.",["tdz"],[]],
typeerr:["TypeError","","Помилка, коли операція неможлива для значення. Наприклад, спроба повторно присвоїти значення const.",["const"],[]],
clone:["git clone","","Копіювання наявного віддаленого репозиторію разом з усією історією. Створює теку й автоматично налаштовує origin. Потрібен, коли проєкт уже існує.",["remote","repo"],["clone"]],
rebase:["Rebase","перебазування","Перенесення комітів гілки поверх актуальної історії іншої гілки. Історія стає лінійною, але коміти переписуються, тому не застосовуй до гілок, над якими працюють інші.",["merge","pr"],[]],
ssh:["SSH-ключ","","Пара ключів для входу на GitHub без пароля: приватний лишається в тебе, публічний (.pub) додається в налаштуваннях GitHub. Адреса репозиторію має вигляд git@github.com:логін/репозиторій.git.",["token","remote"],[]],
token:["Персональний токен","Personal Access Token","Рядок, який вводять замість пароля під час push по HTTPS. Створюється в налаштуваннях GitHub; зберігай його як пароль.",["ssh","remote"],[]],
ieee:["IEEE 754","binary64","Формат 64-бітних чисел з рухомою комою, який використовує тип number: 1 біт знаку, 11 біт експоненти (зі зміщенням 1023), 52 біти дробової частини. Неявний старший біт дає точність 53 біти. Через двійкове подання деякі десяткові дроби неточні (0.1 + 0.2).",["nan","safeint"],[]],
nan:["NaN","not a number","Спеціальне значення типу number для невизначеного числового результату (наприклад, 0 / 0 або невдале перетворення). Не дорівнює жодному числу, навіть собі, тому перевіряється через Number.isNaN().",["infinity","ieee"],[]],
infinity:["Infinity","нескінченність","Результат ділення ненульового числа на нуль або переповнення. Є -Infinity. Ділення на нуль не кидає помилку, значення непомітно поширюються в обчисленнях. Тип: number.",["nan"],[]],
bigint:["BigInt","","Тип для точних цілих довільної розрядності. Літерал із суфіксом n (10n) або функція BigInt(). Немає дробових і Infinity/NaN. З number не змішується: 10n + 5 дає TypeError.",["safeint","primitive"],[]],
safeint:["Безпечне ціле","MAX_SAFE_INTEGER","Number.MAX_SAFE_INTEGER (2^53 − 1) — найбільше ціле, до якого всі цілі подаються точно й однозначно. За межами цілі втрачають точність без жодної помилки. Для таких значень використовують BigInt.",["bigint","ieee"],[]],
typeofop:["typeof","","Унарний оператор: повертає рядок із назвою типу значення під час виконання. Для NaN та Infinity результат «number».",["primitive"],[]],
unary:["Унарний і бінарний оператор","","Унарний діє на один операнд (−a), бінарний на два (a − b). Той самий символ може бути різним оператором залежно від контексту.",["assoc"],[]],
assoc:["Асоціативність","","Правило групування однакових за пріоритетом операторів. Оператор ** має правосторонню асоціативність: 3 ** 2 ** 4 обчислюється як 3 ** (2 ** 4). Дужки змінюють порядок.",["unary"],[]],
incr:["Інкремент і декремент","++ і --","Збільшення чи зменшення на одиницю. Префікс (++a) спочатку змінює значення й повертає нове, постфікс (a++) повертає старе й лише потім змінює.",["compound"],[]],
compound:["Складені оператори присвоєння","+=, -=, *=","Поєднують операцію й присвоєння: a += 5 це a = a + 5. Вигода в компактності й читабельності, а не в швидкості.",["incr"],[]],
conversion:["Перетворення типів","type conversion","Явне виконує сам розробник (Number(), String(), parseInt(), parseFloat()), неявне відбувається автоматично за правилами операції. number і bigint в арифметиці автоматично не перетворюються.",["bigint"],[]]};
const C=[
["terminal","pwd",[["pwd","показати поточну теку"]]],
["terminal","ls -a",[["ls","список файлів"],["-a","all: показати й приховані, наприклад .git"]]],
["terminal","cd шлях",[["cd","перейти до теки"],["шлях","куди; «..» — тека на рівень вище"]]],
["terminal","mkdir ім’я",[["mkdir","створити теку"]]],
["terminal","touch index.html",[["touch","створити порожній файл"],["index.html","ім’я файлу"]]],
["version","git --version",[["--version","показати версію; так перевіряють, що Git встановлено"]]],
["config","git config --global user.name \"Ім’я\"",[["config","налаштування Git"],["--global","для всіх репозиторіїв користувача"],["user.name","ім’я автора комітів"]]],
["config","git config --list",[["--list","показати всі налаштування"]]],
["init","git init -b main",[["init","створити репозиторій, з’явиться тека .git"],["-b main","branch: назвати першу гілку main"]]],
["status","git status",[["status","стан робочого каталогу й індексу. Перевіряй перед кожною командою"]]],
["add","git add .",[["add","підготувати зміни до коміту"],[".","усе в поточній теці"]]],
["commit","git commit -m \"текст\"",[["commit","зафіксувати підготовлене"],["-m","message: повідомлення просто в команді, без редактора"]]],
["log","git log --oneline --graph --all",[["log","історія комітів"],["--oneline","один коміт на рядок"],["--graph","малювати зв’язки гілок"],["--all","показати всі гілки, не лише поточну"]]],
["remote","git remote add origin URL",[["remote add","додати зв’язок із віддаленим репозиторієм"],["origin","назва цього зв’язку"],["URL","адреса з GitHub"]]],
["remote","git remote -v",[["-v","verbose: показати адреси, видно fetch і push"]]],
["push","git push -u origin main",[["push","надіслати коміти"],["-u","upstream: запам’ятати зв’язок гілки"],["origin","куди"],["main","яку гілку"]]],
["pull","git pull",[["pull","забрати зміни та влити в поточну гілку"]]],
["fetch","git fetch",[["fetch","лише завантажити нове, без злиття"]]],
["branch","git branch",[["branch","без аргументів: список локальних гілок, активна зі зірочкою"],["-a","all: ще й посилання на віддалені"]]],
["branch","git branch ім’я",[["branch ім’я","створити гілку, але не перемикатися на неї"],["-d","delete: безпечно видалити влиту гілку"]]],
["switch","git switch ім’я",[["switch","перейти на гілку"],["-c","create: створити й одразу перейти"]]],
["diff","git diff",[["diff","показати, що саме змінилося у файлах (нове зелене, видалене червоне)"],["--staged","показати вже підготовлене, тобто те, що потрапить у коміт"]]],
["branch","git branch -D ім’я",[["-D","примусове видалення гілки, навіть якщо її не влито. Можна втратити зміни"]]],
["delete","git push origin --delete ім’я",[["push origin","надіслати у віддалений репозиторій"],["--delete","видалити віддалену гілку"],["ім’я","назва гілки"]]],
["prune","git fetch --prune",[["fetch","завантажити відомості про віддалені гілки"],["--prune","прибрати застарілі локальні посилання на віддалені гілки, яких уже немає"]]],
["clone","git clone URL",[["clone","скопіювати віддалений репозиторій разом з історією"],["URL","адреса репозиторію з GitHub"]]],
["restore","git restore файл",[["restore","відкинути незакомічені зміни у файлі (незворотно)"],["--staged","лише прибрати файл з індексу, зміни лишаються"]]],
["amend","git commit --amend -m \"текст\"",[["commit","створення коміту"],["--amend","змінити останній коміт замість створення нового. Лише до push"],["-m","нове повідомлення"]]],
["revert","git revert ХЕШ",[["revert","створити новий коміт, що скасовує зміни вказаного. Безпечно для спільної історії"],["ХЕШ","ідентифікатор коміту з git log"]]]];
const q=s=>document.querySelector(s);
const lnk=s=>s.replace(/\[\[(\w+)\|([^\]]+)\]\]/g,(m,k,t)=>`<span class="t" data-k="${k}" tabindex="0" role="button">${t}</span>`);
const T_="[[vcs|СКВ]] зберігає історію проєкту. У Git кожен має повний [[local|локальний репозиторій]]; шлях змін такий: [[workdir|робочий каталог]] → [[staging|індекс]] → [[commit|коміт]] → [[remote|віддалений репозиторій]]. Працювати прийнято в окремій [[branch|гілці]], а в [[main|main]] зміни потрапляють через [[pr|pull request]].";
q("#intro").innerHTML=lnk(T_);
q("#s1").innerHTML=Object.entries(T).map(([k,v])=>`<div class="card" id="t-${k}"><h3>${v[0]}</h3>${v[1]?`<div class="alt">${v[1]}</div>`:""}<div>${lnk(v[2])}</div></div>`).join("");
q("#s2").innerHTML=C.map((c,i)=>`<div class="card" id="c-${c[0]}${i}" data-id="${c[0]}"><span class="cmd" tabindex="0" role="button">${c[1].replace(/</g,"&lt;")}</span><ul class="bd" hidden>${c[2].map(p=>`<li><code>${p[0]}</code> — ${p[1]}</li>`).join("")}</ul></div>`).join("");
window.cur=0;function tab(n){window.cur=n;q("main").classList.toggle("wide",n==3);[0,1,2,3,4].forEach(i=>{q("#s"+i).classList.toggle("hide",n!=i);q("#b"+i).classList.toggle("on",n==i)})}
q("#b0").onclick=()=>tab(0);q("#b3").onclick=()=>tab(3);q("#b4").onclick=()=>tab(4);q("#b1").onclick=()=>tab(1);q("#b2").onclick=()=>tab(2);
function openT(k){const v=T[k];if(!v)return;
q("#pc").innerHTML=`<h3 style="margin:0">${v[0]}</h3>${v[1]?`<div class="alt">${v[1]}</div>`:""}<p>${lnk(v[2])}</p>`+(v[3].length?`<div class="alt">Пов’язані терміни</div>`+v[3].map(r=>`<span class="chip t2" data-k="${r}">${T[r][0]}</span>`).join(""):"")+(v[4].length?`<div class="alt" style="margin-top:8px">Команди</div>`+v[4].map(r=>`<span class="chip cc" data-c="${r}"><code>${r}</code></span>`).join(""):"");
q("#pop").hidden=false}
function showC(id){tab(2);q("#q").value="";filter();const el=[...document.querySelectorAll("#s2 .card")].find(e=>e.dataset.id==id);if(el){el.querySelector(".bd").hidden=false;el.scrollIntoView({block:"center"})}q("#pop").hidden=true}
document.addEventListener("click",e=>{const t=e.target.closest(".t,.t2"),c=e.target.closest(".cc"),m=e.target.closest(".cmd");
if(t)openT(t.dataset.k);else if(c)showC(c.dataset.c);else if(m){const u=m.parentNode.querySelector(".bd");u.hidden=!u.hidden}});
document.addEventListener("keydown",e=>{if(e.key==="Enter"&&e.target.matches(".t,.cmd"))e.target.click();if(e.key==="Escape")q("#pop").hidden=true});
q("#x").onclick=()=>q("#pop").hidden=true;
function filter(){const v=q("#q").value.toLowerCase();document.querySelectorAll("#s1 .card,#s2 .card").forEach(e=>e.classList.toggle("hide",!!v&&!e.textContent.toLowerCase().includes(v)))}
q("#q").oninput=filter;

const A=[[/СКВ/,"vcs"],[/code review/i,"review"],[/pull request/i,"pr"],[/fast-forward/,"ff"],[/коммит[а-яё]*/i,"commit"],[/ветк[а-яё]*/i,"branch"],[/репозитори[а-яё]*/i,"repo"],[/индекс[а-яё]*/i,"staging"],[/снимк[а-яё]*|снапшот[а-яё]*/i,"snapshot"],[/хэш[а-яё]*/i,"hash"],[/origin/,"origin"],[/HEAD/,"head"],[/конфликт[а-яё]*/i,"conflict"],[/слияни[а-яё]*/i,"merge"],[/fetch/,"fetch"],[/\.gitignore/,"gitignore"],[/untracked/i,"untracked"],[/рабоч[а-яё]+ каталог[а-яё]*/i,"workdir"],[/upstream/,"upstream"],[/push/,"push"],[/pull(?! request)/,"pull"]];
A.push([/коміт[а-яіїєґ]*/i,"commit"],[/гілк[а-яіїєґ]*/i,"branch"],[/індекс[а-яіїєґ]*/i,"staging"],[/знімк[а-яіїєґ]*|снапшот[а-яіїєґ]*/i,"snapshot"],[/хеш[а-яіїєґ]*/i,"hash"],[/конфлікт[а-яіїєґ]*/i,"conflict"],[/злитт[а-яіїєґ]*/i,"merge"],[/робоч[а-яіїєґ]+ каталог[а-яіїєґ]*/i,"workdir"],[/система контролю версій/i,"vcs"]);
A.unshift([/маркер[а-яіїєґ]* конфлікт[а-яіїєґ]*/i,"marker"]);A.push([/workflow|воркфлоу/i,"workflow"],[/\bDOM\b/,"dom"],[/семантик[а-яіїєґ]*/i,"semantic"],[/селектор[а-яіїєґ]*/i,"selector"],[/box model/i,"boxmodel"],[/специфічн[а-яіїєґ]*/i,"cascade"],[/flexbox/i,"flex"],[/\bGrid\b/,"grid"]);
A.push([/динамічн[а-яіїєґ]* типізаці[а-яіїєґ]*/i,"dyntype"],[/ECMAScript/,"ecma"],[/руші[а-яіїєґ]*/i,"engine"],[/середовищ[а-яіїєґ]* виконання/i,"runtime"],[/парсинг|parsing|синтаксичн[а-яіїєґ]* дерев[а-яіїєґ]*/i,"ast"],[/Node\.js/,"node"],[/збирання сміття/i,"gc"],[/\bdefer\b/,"defer"],[/\blet\b/,"let"],[/\bconst\b/,"const"],[/\bvar\b/,"var"],[/област[а-яіїєґ]* видимості/i,"scope"],[/підняття оголошень/i,"hoisting"],[/тимчасов[а-яіїєґ]* мертв[а-яіїєґ]* зон[а-яіїєґ]*/i,"tdz"],[/примітивн[а-яіїєґ]*/i,"primitive"],[/ReferenceError/,"referr"],[/TypeError/,"typeerr"]);
A.push([/\bclone\b/,"clone"],[/rebase|перебазуванн[а-яіїєґ]*/i,"rebase"],[/\bSSH\b/,"ssh"],[/токен[а-яіїєґ]*|Personal Access Token/i,"token"]);
A.push([/IEEE ?754/,"ieee"],[/\bNaN\b/,"nan"],[/Infinity/,"infinity"],[/BigInt/i,"bigint"],[/MAX_SAFE_INTEGER|безпечн[а-яіїєґ]* цілі/,"safeint"],[/\btypeof\b/,"typeofop"],[/унарн[а-яіїєґ]*/i,"unary"],[/асоціативн[а-яіїєґ]*/i,"assoc"],[/інкремент[а-яіїєґ]*|декремент[а-яіїєґ]*/i,"incr"],[/складен[а-яіїєґ]* оператор[а-яіїєґ]*/i,"compound"],[/перетворенн[а-яіїєґ]* типів/i,"conversion"]);
const esc=s=>s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
function inl(s,seen){return s.split(/(`[^`]*`)/).map((p,i)=>{if(i%2)return"<code>"+esc(p.slice(1,-1))+"</code>";let t=esc(p),sp=[];
for(const[re,k]of A){if(seen.has(k))continue;const m=re.exec(t);if(m){seen.add(k);sp.push(`<span class="t" data-k="${k}" tabindex="0" role="button">${m[0]}</span>`);t=t.slice(0,m.index)+"\u0001"+(sp.length-1)+"\u0002"+t.slice(m.index+m[0].length)}}
return t.replace(/\u0001(\d+)\u0002/g,(x,n)=>sp[n]).replace(/\*\*([^*]+)\*\*/g,"<b>$1</b>")}).join("")}
function findC(line){const L=line.trim().split(/\s+/);let best=-1,bs=0;
C.forEach((c,i)=>{const ct=c[1].split(/\s+/),ph=ct.filter(x=>/[а-яё]|^URL$|^"/i.test(x)),np=ct.filter(x=>!ph.includes(x));if(np[0]!==L[0])return;
const ok=np.filter(x=>L.includes(x)).length,extra=L.filter(x=>!np.includes(x)).length;let s=ok-(np.length-ok);
s+=(ph.length&&extra>0)?ph.length:-ph.length*.5;s+=c[2].filter(p=>p[0].startsWith("-")&&L.includes(p[0].split(" ")[0])).length;if(ok>0&&(bs===0||s>bs)){bs=s;best=i}});return best}
function codeLine(l){const k=l.search(/\s#\s/),cmd=k<0?l:l.slice(0,k),cm=k<0?"":l.slice(k);const i=cmd.trim()?findC(cmd):-1;
return(i>=0?`<span class="ln" data-i="${i}" tabindex="0" role="button">${esc(cmd)}</span>`:esc(cmd))+`<span class="cm">${esc(cm)}</span>\n`}
function md(src){src=src.replace(/scr_ipt/g,"script");let out="",list=null,seen=new Set();const cl=()=>{if(list){out+=`</${list}>`;list=null}};const L=src.split("\n");
for(let i=0;i<L.length;i++){const l=L[i];let m;
if(l.startsWith("```")){cl();const c=[];for(i++;i<L.length&&!L[i].startsWith("```");i++)c.push(L[i]);out+="<pre>"+c.map(codeLine).join("")+"</pre>";continue}
if(!l.trim()){cl();continue}
if(l.startsWith("## ")){cl();out+=`<h3>${esc(l.slice(3))}</h3>`;continue}
if(l.startsWith("# ")){cl();seen=new Set();out+=`<h2 class="sec">${esc(l.slice(2))}</h2>`;continue}
if(l.startsWith("> ")){cl();out+=`<div class="note">${inl(l.slice(2).replace(/^Пояснення:/,"**Пояснення:**"),seen)}</div>`;continue}
if(m=/^- \[ \] (.*)/.exec(l)){if(list!=="ul"){cl();out+="<ul>";list="ul"}out+=`<li class="ck"><label><input type="checkbox"> ${inl(m[1],seen)}</label></li>`;continue}
const t=/^\d+\. /.test(l)?"ol":l.startsWith("- ")?"ul":"";
if(t){if(list!==t){cl();out+=`<${t}>`;list=t}out+=`<li>${inl(l.replace(/^(\d+\. |- )/,""),seen)}</li>`;continue}
cl();out+=`<p>${inl(l,seen)}</p>`}cl();return out}
q("#s0").innerHTML=md(q("#doc").textContent);
function openC(i){const c=C[i];q("#pc").innerHTML=`<code>${esc(c[1])}</code><ul class="bd">${c[2].map(p=>`<li><code>${p[0]}</code> — ${p[1]}</li>`).join("")}</ul><span class="chip cc" data-c="${c[0]}">Відкрити в розділі «Команди»</span>`;q("#pop").hidden=false}
document.addEventListener("click",e=>{const n=e.target.closest(".ln");if(n)openC(+n.dataset.i)});
document.addEventListener("keydown",e=>{if(e.key==="Enter"&&e.target.matches(".ln"))e.target.click()});

(function(){const s=q("#s3"),parts=q("#lec").textContent.split(/^(?=# ▶ )/m).filter(x=>x.trim()),pages=parts.map(p=>md(p)),names=parts.map(p=>p.split("\n")[0].replace("# ▶ ","").split(" · "));
s.innerHTML=`<p class="srcn"> Розділи з позначкою ✓ уже відредаговано вручну: виправлено помилки розпізнавання й покращено оформлення.</p><div class="lay"><div class="lside"></div><div class="lbody"></div></div>`;
const sd=s.querySelector(".lside"),bd=s.querySelector(".lbody");
let cur=0,open=false;function show(i,o){cur=i;open=!!o;bd.innerHTML=pages[i];const hs=[...bd.querySelectorAll("h2.sec")];hs.forEach((e,k)=>{e.id="ch"+k});
sd.innerHTML=names.map((n,j)=>`<button data-l="${j}" class="${j==i?"on":""}">${j==i&&open?"▾":"▸"} ${n[0]}<small>${n[1]||""}</small></button>`+(j==i&&open?`<div class="chs">${hs.slice(1).map((e,k)=>`<a data-h="ch${k+1}">${e.textContent}</a>`).join("")}</div>`:"")).join("");}
sd.addEventListener("click",e=>{const b=e.target.closest("[data-l]"),c=e.target.closest("[data-h]");if(b){const j=+b.dataset.l;if(j===cur)show(j,!open);else{show(j,true);window.scrollTo({top:s.offsetTop})}}else if(c)document.getElementById(c.dataset.h).scrollIntoView({behavior:"smooth"})});
show(0,false)})();


const Q=[["Лекція 02 · Основи Git і GitHub",[
["Де зберігається історія змін у локальному репозиторії Git?",["У робочому каталозі","У прихованій теці .git","Лише на GitHub","В області індексації"],1,"Локальний репозиторій лежить у прихованій теці .git у корені проєкту."],
["Яка команда переносить зміни з робочого каталогу в індекс?",["git commit","git add","git push","git pull"],1,"git add готує зміни до коміту: переносить їх в область індексації."],
["Що робить git commit -m «текст»?",["Надсилає зміни на GitHub","Створює коміт у локальному репозиторії з повідомленням","Створює нову гілку","Завантажує зміни з GitHub"],1,"Коміт створюється локально, а -m дає змогу вказати повідомлення прямо в команді."],
["Для чого прапорець -u в git push -u origin main?",["Видаляє гілку","Запам’ятовує зв’язок локальної й віддаленої гілки","Примусово перезаписує історію","Оновлює main"],1,"-u (upstream) пов’язує гілки, тож далі достатньо git push і git pull."],
["До якого типу належить система контролю версій Git?",["Локальна","Централізована","Розподілена","Хмарна"],2,"У Git у кожного розробника повна копія репозиторію з історією."]]],
["Лекція 03 · Гілки та pull request",[
["Що таке гілка в Git?",["Копія теки проєкту","Рухомий вказівник на коміт","Окремий репозиторій","Архів проєкту"],1,"Створення гілки не копіює файли: це лише вказівник на коміт і нова послідовність комітів."],
["Яка команда створює гілку й одразу переходить на неї?",["git branch name","git switch -c name","git merge name","git pull name"],1,"-c (create) створює гілку та перемикає на неї."],
["Коли git pull працює як fast-forward?",["Коли в локальній гілці немає власних комітів","Коли є конфлікти","Коли гілок багато","Завжди"],0,"Вказівник гілки просто зсувається до новішого коміту, без коміту злиття."],
["Що відбувається після створення pull request?",["Гілки зливаються автоматично","Зміни доступні для перегляду, злиття лише після підтвердження","Гілку видаляють","Зміни одразу потрапляють у main"],1,"Створення PR нічого не зливає: спочатку перегляд і code review."],
["Яка команда безпечно видаляє локальну гілку?",["git branch -D","git branch -d","git push -d","git delete"],1,"-d перевіряє, що гілку злито. -D видаляє примусово й може втратити зміни."]]],
["Лекція 04 · Конфлікти, HTML і CSS",[
["З чого починають кожне нове завдання за базовим workflow?",["Зі створення pull request","З оновлення main (switch і pull)","З git push","З видалення гілки"],1,"Застарілий main це одна з головних причин зайвих конфліктів."],
["Коли виникає конфлікт під час злиття?",["Коли дві гілки змінили ті самі рядки файлу","Коли забули git add","Коли створили багато гілок","Коли гілка називається main"],0,"Git не може автоматично поєднати суперечливі зміни тих самих рядків."],
["Що найважливіше під час розв’язання конфлікту?",["Просто видалити маркери","Свідомо узгодити зміни й перевірити, що проєкт працює","Видалити гілку","Зробити push примусово"],1,"Розв’язання конфлікту це не стирання маркерів, а узгодження змін."],
["Яка різниця між HTML і CSS?",["HTML відповідає за вигляд, CSS за структуру","HTML описує структуру, CSS оформлення","Обидва описують логіку","HTML це стилі, CSS це розмітка"],1,"HTML визначає, що є на сторінці, CSS визначає, як це виглядає."],
["Чим padding відрізняється від margin?",["padding усередині елемента, margin за його межами","padding за межами, margin усередині","Це одне й те саме","padding лише для тексту"],0,"padding це внутрішній відступ між вмістом і рамкою, margin це відстань до інших елементів."]]],
["Лекція 05 · JavaScript",[
["Що таке ECMAScript?",["Рушій JavaScript","Стандарт мови","Браузер","Бібліотека функцій"],1,"ECMAScript це міжнародний стандарт, за яким реалізовано JavaScript."],
["З чим у JavaScript пов’язаний тип даних?",["Зі змінною","Зі значенням","З файлом","З рушієм"],1,"Динамічна типізація: тип визначається значенням, а змінна може отримати значення іншого типу."],
["Що станеться: const pi = 3.14; pi = 3;?",["Нічого","ReferenceError","TypeError","SyntaxError"],2,"Повторне присвоєння const спричиняє TypeError."],
["Що дасть звернення до let-змінної до її оголошення (тимчасова мертва зона)?",["undefined","ReferenceError","0","null"],1,"Для let і const до ініціалізації доступ заборонений, виникає ReferenceError."],
["Скільки примітивних типів у JavaScript?",["5","6","7","8"],2,"string, number, bigint, boolean, undefined, null, symbol."]]]];

Q.push(["Лекція 06 · Числа й арифметичні операції",[
["Чому 0.1 + 0.2 не дорівнює точно 0.3?",["Це помилка рушія","Деякі десяткові дроби в двійковій системі нескінченні, тому їх округлюють","Тип number не підтримує дробів","Оператор + працює некоректно"],1,"Формат IEEE 754 має обмежену кількість бітів, тому результат містить похибку округлення."],
["Що поверне 10 / 0 у JavaScript?",["Помилку DivisionByZero","Infinity","0","NaN"],1,"Ділення на нуль не спричиняє виняток: результат Infinity (або -Infinity, NaN)."],
["Як правильно перевірити, що значення це NaN?",["x === NaN","Number.isNaN(x)","x == 0","typeof x === «NaN»"],1,"NaN не дорівнює навіть собі, тому порівняння не працює, потрібен Number.isNaN."],
["Що станеться: 10n + 5?",["15n","15","TypeError","NaN"],2,"BigInt і number не змішуються в арифметиці без явного перетворення."],
["Чому дорівнює 3 ** 2 ** 4 (правостороння асоціативність)?",["(3 ** 2) ** 4","3 ** (2 ** 4)","3 ** 6","24"],1,"Оператор ** групується справа наліво: спочатку 2 ** 4 = 16, потім 3 ** 16."]]]);
(function(){const s=q("#s4");let ok=0,done=0,tot=0;Q.forEach(g=>tot+=g[1].length);
s.innerHTML=`<div id="sc"></div>`+Q.map((g,gi)=>`<h2 class="sec">${g[0]}</h2>`+g[1].map((x,qi)=>`<div class="q" data-g="${gi}" data-q="${qi}"><p>${qi+1}. ${x[0]}</p>${x[1].map((o,oi)=>`<button class="o" data-o="${oi}">${o}</button>`).join("")}<div class="ex" hidden></div></div>`).join("")).join("");
function sc(){q("#sc").innerHTML=`Правильно: ${ok} з ${tot} (відповіли на ${done}) <button id="rs">Почати знову</button>`}sc();
s.addEventListener("click",e=>{if(e.target.id==="rs"){ok=0;done=0;s.querySelectorAll(".o").forEach(b=>{b.className="o";b.disabled=false});s.querySelectorAll(".ex").forEach(x=>x.hidden=true);sc();return}
const b=e.target.closest(".o");if(!b||b.disabled)return;const c=b.closest(".q"),x=Q[c.dataset.g][1][c.dataset.q],i=+b.dataset.o;
c.querySelectorAll(".o").forEach(y=>{y.disabled=true;if(+y.dataset.o===x[2])y.classList.add("ok")});if(i!==x[2])b.classList.add("bad");else ok++;done++;
const ex=c.querySelector(".ex");ex.textContent=x[3];ex.hidden=false;sc()})})();
