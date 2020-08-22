import Bomb from './bomb.js'


export function createBomb(vocab, position, height) {
    

    let bomb = new Bomb(position, height);
    let randomNumber = Math.floor(Math.random() * vocab.length)
    bomb.string = vocab[randomNumber];

    // console.log(bomb.string.length);

    bomb.speed = (1/bomb.string.length) * 6;
    vocab.splice(randomNumber, 1)

    return bomb

}




export const vocab3 = [
    'hey',
    'wow',
    'the',
    'top',
    'met',
    'cut',
    'can',
    'dog',
    'cow',
    'man',
    'cat',
    'pen',
    'say',
    'fit',
    'rod',
    'arm',
    'are',
    'bar',
    'big',
    'boy',
    'car',
    'cut',
    'cup',
    'due',
    'dry',
    'for',
    'fly',
    'fix',
    'fun',
    'gap',
    'gas',
    'gun',
    'hot',
    'how',
    'had',
    'job',
    'joy',
    'ice',
    'key',
    'kid',
    'kit',
    'lab',
    'law',
    'lay',
    'lot',
    'man',
    'met',
    'mix',
    'net',
    'new',
    'now',
    'old',
    'off',
    'oil',
    'pay',
    'pin',
    'put',
    'pot',
    'raw',
    'red',
    'sea',
    'six',
    'sky',
    'son',
    'tag',
    'tax',
    'try',
    'tip',
    'use',
    'war',
    'was',
    'win',
    'yes',
    'yet',
    'ink',
    'lid',
    'odd',
    'zoo',
    'ace',
    'fox',
]

export const vocab4 = [
    'quit',
    'mine',
    'hate',
    'what',
    'have',
    'make',
    'like',
    'this',
    'will',
    'your',
    'more',
    'with',
    'take',
    'loop',
    'look',
    'able','also','area','auto','acid','also','army','away',
    'bank','beer','base','bike','blog','belt','bill','boat','book',
    'call','care','cash','case','cell','clud','code','copy','cost','cute',
    'dark','data','date','desk','dish','door','down','draw','drop','drug','duty',
    'ease','easy','east','edit','exam','earn','even','edge','ever','else',
    'face','fact','fail','feel','feet','file','flag','food','four','feul',
    'gear','girl','gift','give','glad','goal','gone','grow','grab','game',
    'hair','half','hall','hard','have','hate','heat','here','help','hire','hero','hold',
    'icon','idea','iron','inch','item',
    'join','jump','just',
    'kind','king','know',
    'lady','lake','land','link','list','load','loan','look','lose','love','luck',
    'mail','male','main','make','meet','mile','milk','move','more','much','must',
    'near','neck','need','next','none','nine','note','name','news','nice',
    'only','open','oven','over','once',
    'pack','page','path','pain','peek','plus','poor','pool','push','pure','pump',
    'race','rain','rare','rate','read','real','rear','rely','rest','rice','rich','ride','ring','rise',
    'safe','sale','salt','same','sand','save','seat','seed','seek','seem','seen','self','sell','send','sent','ship',
    'take','talk','tall','tank','tape','task','team','tell','term','test','text','than','that','them','then','they','thin','thus','time','tiny','tone','took',
    'unit','upon',
    'used',
    'user',
    'uses',
    'vary',
    'vast',
    'very',
    'view',
    'visa',
    'vote',
    'wait',
    'walk',
    'wall',
    'want',
    'warm',
    'wars',
    'wave',
    'ways',
    'weak',
    'wear',
    'week',
    'well',
    'went',
    'were',
    'west',
    'what',
    'when',
    'whom',
    'wide','wife','wild','will','wind','wine','wire','wish','with','wood','word','work',
    'yard','yeah','year','your'
    ,'zone'
]

export const vocab5 = [
    'class',
    'print',
    'chair',
    'often',
    'later',
    'about',
    'again',
    'alert',
    'below',
    'snail',
    'spare',
    'resin',

    'ahead',
'album',
'alive',
'allow',
'alone',
'along',
'among',
'angle',
'apart',
'apple',
'apply',
'areas',
'array',
'aside',
'asked',
'asset',
'audio',
'avoid',
'award',
'aware',
'banks',
'based',
'basic',
'basis',
'beach',
'began',
'begin',
'being',
'below',
'bible',
'bills',
'birds',
'birth',
'black',
'blade',
'block',
'blood',
'board',
'bonus',
'books',
'boxes',
'brain',
'brand',
'bread',
'break',
'brief',
'bring',
'broad',

'click',
'close',
'cloud',

'coach',
'coast',

'color',


'could',
'count',
'court',
'cover',,
'craft',
'crazy',
'cream',
'crime',
'cross',
'crowd',
'crown',
'cycle',
'daily',
'dance',


'depth',


'doubt',
'draft',
'drawn',
'dream',
'dress',
'drink',,
'drive',

'early',
'earth',
'eight',
'email',
'empty',

'enemy',
'enjoy',
'enter',
'entry',
'equal',
'error',
'event',
'every',
'exact',
'exist',
'extra',

'faith',

'fewer',
'field',
'fifth',
'fight',



'final',

'first',
'floor',
'fluid',
'focus',


'force',

'forth',
'forum',
'found',
'frame',
'fresh',
'front',
'fruit',
'fully',

'funny',



'given',

'glass',

'going',

'grade',
'grand',
'great',
'green',
'group',
'grown',
'guard',
'guess',
'guest',
'guide',

'happy',

'heard',
'heart',
'heavy',
'hello',

'hence',



'honor',
'horse',
'hotel',

'house',
'human',
'ideal',

'image',
'index',
'inner',
'input',
'issue',

'joint',
'judge',
'juice',


'knife',
'known',

'label',
'labor',
'large',
'later',
'layer',

'learn',
'least',
'leave',
'legal',
'level',
'light',

'limit',





'local',



'lower',
'lucky',
'lunch',
'magic',
'major',

'match',
'maybe',

'meant',
'media',
'metal',
'might',

'minor',
'model',
'money',
'month',
'motor',
'mount',
'mouse',
'mouth',

'movie',
'music',
'named',
'needs',
'never',
'newly',
'night',
'noise',
'north',
'noted',
'notes',
'nurse',
'occur',
'ocean',
'offer',
'often',
'older',
'opens',
'order',
'other',
'owned',
'owner',
'pages',
'paint',
'panel',
'paper',

'party',
'peace',
'phase',
'phone',
'photo',
'piece',
'pilot',
'pitch',
'place',
'plane',
'plant',
'plate',
'point',
'power',
'press',
'price',
'prime',
'print',
'prior',
'prize',
'proof',
'proud',
'prove',
'queen',
'quick',
'quiet',
'quite',
'radio',
'raise',
'range',
'rated',
'rates',
'ratio',
'reach',
'ready',
'refer',
'right',
'river',

'round',
'route',
'royal',
'rules',
'rural',
'sales',
'sauce',
'saved',
'scale',
'scene',
'scope',
'score',
'seats',
'seeds',
'seems',
'sense',
'serve',
'setup',
'seven',
'shall',
'shape',
'share',
'sharp',
'sheet',

'shoot',

'short',
    

]
export const vocab6 = [
    'manual',
    'iphone',
    'papper',
    'amazon',
    'basket',
    'bridge',
    'define',
    'delete',
    'finger',
    'holder',
    'leader',
    'python',


    'animal',
'annual',
'answer',
'anyone',
'anyway',
'appeal',
'appear',
'around',
'arrive',
'artist',
'asking',
'aspect',

'assist',
'assume',
'attack',
'attend',
'author',
'avenue',

'backup',
'battle',
'beauty',

'become',
'before',

'behind',
'belief',
'better',
'beyond',
'bigger',


'client',

'closer',
'coffee',


'column',

'common',

'corner',
'county',
'couple',
'course',


'create',
'credit',
'crisis',
'custom',
'damage',
'debate',
'decade',
'decent',
'decide',
'define',
'degree',
'delete',
'demand',
'design',
'desire',
'detail',
'device',
'dining',
'dinner',
'direct',
'doctor',
'dollar',
'domain',
'double',


'driver',
'during',



'easily',
'eating',
'editor',
'effect',
'effort',
'either',

'enable',
'energy',
'engage',
'engine',
'enough',
'ensure',
'entire',
'equity',

'estate',

'except',

'expand',
'expect',
'expert',
'extend',
'extent',
'fabric',

'factor',


'family',
'famous',

'father',
'fellow',
'female',

'figure',
'filter',
'finish',

'flight',
'folder',
'follow',


'forest',
'forget',
'formal',
'format',

'former',


'friend',
'future',

'garage',
'garden',
'gender',


'global',
'golden',

'ground',

'growth',

'guilty',
'guitar',
'handle',
'happen',

'health',
'heaven',
'height',



'honest',





'impact',

'income',
'indeed',
'injury',
'inside',
'invest',
'island',




'junior',

'laptop',
'larger',
'latest',
'launch',

'layout',
'leader',
'league',

'length',
'lesson',
'letter',






'listen',
'little',

'longer',


'lovely',


'manage',
'manner',
'marine',
'market',
'master',
'matter',
'medium',
'member',
'memory',
'mental',
'method',
'middle',
'minute',

'mobile',

'modern',

'nation',
'native',
'nature',
'nearly',


'nobody',
'normal',
'notice',
'number',
'object',
'obtain',


'office',
'online',

'option',

'origin',
'output',


'parent',


'people',
'period',
'person',






'planet',


'player',
'please',
'plenty',
'pocket',
'relief',
'remain',
'remote',
'remove',
'rental',
'repair',
'repeat',
'report',
'resort',
'result',
'retail',
'return',
'review',

'safety',
'salary',
'sample',
'saving',


'scheme',
'school',
'threat',
'ticket',
'tissue',


'toward',

'travel',

'trying',

'unable',
'unique',

'unless',
'update',
'useful',
'valley',

'victim',

'vision',
'visual',
'volume',


'wealth',
'weapon',
'weekly',
'weight',

'whilst',
'widely',
'window',
'winner',
'winter',



]

export const vocab7 = [
    'clothes',
    'college',
    'complex',
    'discuss',
    'evident',
    'forward',
    'however',
    'million',
    'pension',
    'regular',
    'strange',
    'without',


    

'article',



'attempt',

'average',

'awesome',
'balance',

'battery',
'because',

'bedroom',
'believe',
'benefit',
'between',
'biggest',
'billion',
'brother',
'brought',
'browser',



'capable',
'capital',
'captain',
'capture',
'careful',



'central',

'certain',

'correct',
'council',
'country',




'crucial',
'culture',
'current',




'default',
'defense',


'deliver',


'desktop',
'despite',

'develop',

'digital',

'exactly',
'example',
'excited',

'explain',
'explore',
'extreme',

'factory',
'faculty',
'failure',
'falling',

'fashion',
'feature',
'federal',
'feeling',

'finally',
'finance',

'general',





'healthy',


'helpful',



'highway',

'history',

'holiday',

'improve',
'include',
'initial',
'insight',
'install',
'instead',
'intense',


'journal',
'journey',
'justice',

'kitchen',





'leather',



'library',
'license',



'machine',

'manager',


'massive',

'maximum',
'meaning',
'measure',
'medical',
'meeting',

'mention',
'message',

'neither',
'network',
'nothing',
'noticed',
'nuclear',


'obvious',

'officer',



'operate',
'opinion',


'organic',

'program',
'project',
'promote',
'protect',
'protein',
'provide',
'purpose',

'quality',
'quarter',





'reality',


'receive',



'reflect',

'student',

'subject',
'success',
'suggest',
'summary',
'support',
'supreme',
'surface',
'surgery',
'survive',


'teacher',


'texture',

'therapy',
'thought',
'through',
'version',

'victory',
'village',
'virtual',
'visible',

'vitamin',







'weather',
'website',
'wedding',
'weekend',
'welcome',
'western',


]

export const vocab8 = [
    'absolute',
    'addition',
    'creative',
    'critical',
    'football',
    'dominate',
    'eligible',
    'external',
    'mobility',
    'platform',
    'surprise',
    'violence',
    'wireless',
    'yourself',
    'tomorrow',
    
    'assembly',
    
    'attitude',
    'attorney',
    'audience',
    'bacteria',
    'baseball',
    'bathroom',
    
    'birthday',
    
    
    'building',
    'business',
    'calendar',
    'campaign',
    'capacity',
    'carrying',
    'category',
    'chairman',
    'champion',
    
    'chemical',
    'children',
    
    'director',
'discount',
'discover',

'distance',
'district',
'division',
'document',
'domestic',
'download',
'economic',
'election',
'electric',

'eligible',
'employee',
'employer',




'entitled',
'entrance',

'everyday',
'everyone',
'evidence',

'exchange',
'exciting',


'flexible',


'football',
'friendly',
'function',
'generate',
'graduate',


'guidance',

'hardware',
'heritage',
'historic',


'hospital',

'identify',
'identity',

'incident',


'increase',
'indicate',
'industry',



'lifetime',
'lighting',
'location',

'magazine',
'maintain',
'majority',

'marriage',
'material',

'medicine',



'military',

'normally',
'northern',
'numerous',




'official',
'opposite',
'optional',
'original',

'overview',

'painting',

'password',



'personal',
'physical',

'required',

'research',
'resource',
'response',



'schedule',

'security',

'sentence',
'separate',
'sequence',
'tomorrow',
'training',
'transfer',
'tutorial',
'ultimate',
'universe',
'upcoming',
'vacation',
'valuable',


'violence',


'warranty',


'whatever',
'whenever',

'wireless',
'yourself',




]

export const vocab9 = [
    'apartment',
'attention',
'authority',
'automatic',
'available',
'awareness',
'basically',

'beautiful',
'beginning',
'breakfast',
'brilliant',

'candidate',
'carefully',
'celebrate',
'certainly',

'challenge',
'character',
'childhood',
'chocolate',
'classroom',

'discovery',


'diversity',

'education',
'effective',
'efficient',
'elsewhere',
'emergency',
'emotional',

'financial',

'framework',
'frequency',

'furniture',
'generally',



'household',
'immediate',
'implement',
'important',




'infection',
'influence',
'initially',

'institute',
'insurance',


'liability',
'lifestyle',
'literally',

'marketing',

'meanwhile',



'necessary',
'nutrition',
'obviously',


'operation',
'otherwise',

'ownership',


'permanent',


'political',
'portfolio',

'potential',
'practical',

'pregnancy',

'represent',





'secondary',
'secretary',
'selection',
'sensitive',
'signature',
'situation',

'something',
'sometimes',
'somewhere',

'therefore',

'tradition',
'transport',

'treatment',

'universal',
'wonderful',

'yesterday',

]


export const vocab10 = [
    'appreciate',
'assessment',
'assistance',

'atmosphere',
'attractive',
'background',
'basketball',





'collection',
'commercial',
'commission',
'commitment',
'comparison',
'compatible',
'completely',
'completion',




'difference',
'difficulty',


'discussion',
'efficiency',
'electrical',
'electronic',
'employment',

'engagement',

'especially',
'evaluation',
'eventually',
'everything',
'everywhere',
'experience',


'foundation',
'frequently',
'functional',
'generation',
'government',

'historical',

'importance',
'impossible',
'impressive',

'incredible',

'individual',
'industrial',

'leadership',
'literature',
'management',
'medication',
'membership',


'particular',
'percentage',


'personally',
'philosophy',
'population',
'prevention',
'previously',

'regardless',
'relatively',

'reputation',
'resistance',
'resolution',
'restaurant',
'retirement',
'scientific',


'specialist',



'successful',
'sufficient',


'technology',
'television',

'throughout',
'tournament',
'transition',

'ultimately',
'understand',

'university',





]

