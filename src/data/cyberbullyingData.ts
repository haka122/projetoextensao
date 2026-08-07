import { CyberType, LegalItem, ActionGuide, Scenario, QuizQuestion, EmergencyContact, AcademicProjectInfo } from '../types';

export const ACADEMIC_INFO: AcademicProjectInfo = {
  university: "Projeto de Extensão Universitária",
  course: "Direito / Psicologia / Tecnologia da Informação / Pedagogia",
  discipline: "Extensão Acadêmica e Responsabilidade Social Digital",
  advisor: "Prof. Dr. Orientador do Projeto",
  students: [
    "Estudante 1 (Adicione seu nome)",
    "Estudante 2 (Adicione o nome)",
    "Estudante 3 (Adicione o nome)"
  ],
  year: "2026"
};

export const EMERGENCY_CONTACTS: EmergencyContact[] = [
  {
    name: "Disque 100",
    phone: "100",
    description: "Disque Direitos Humanos. Canal federal gratuito para denúncias de violações de direitos de crianças e adolescentes.",
    badge: "Oficial - Governo Federal",
    is24h: true
  },
  {
    name: "Ligue 180",
    phone: "180",
    description: "Central de Atendimento à Mulher. Escuta e acolhimento para casos de violência, intimidação ou exposição de mulheres na rede.",
    badge: "Oficial - Proteção à Mulher",
    is24h: true
  },
  {
    name: "CVV - Centro de Valorização da Vida",
    phone: "188",
    description: "Apoio emocional gratuito e sigiloso para prevenção do suicídio e sofrimento psíquico decorrente de ataques online.",
    badge: "Apoio Emocional",
    url: "https://www.cvv.org.br",
    is24h: true
  },
  {
    name: "SaferNet Brasil",
    phone: "Canal Web",
    description: "Plataforma de denúncias de crimes cibernéticos e apoio psicológico e jurídico online para vítimas de cyberbullying.",
    badge: "ONG de Proteção Digital",
    url: "https://new.safernet.org.br/helpline",
    is24h: true
  },
  {
    name: "Polícia Civil - Delegacia Eletrônica",
    phone: "190 / Virtual",
    description: "Para registro imediato de Boletim de Ocorrência (BO) sobre ameaças, extorsão, calúnia, difamação ou perseguição digital.",
    badge: "Segurança Pública",
    is24h: true
  }
];

export const CYBER_TYPES: CyberType[] = [
  {
    id: "cyberstalking",
    title: "Cyberstalking (Perseguição Digital)",
    subtitle: "Monitoramento obsessivo e invasão de privacidade",
    description: "Consiste em perseguir, vigiar e intimidar reiteradamente uma pessoa na internet, utilizando redes sociais, e-mails e aplicativos de mensagem. Envolve envio de mensagens indesejadas constantes, rastreamento de localização e intimidação contínua.",
    examples: [
      "Mensagens compulsivas em todas as redes sociais mesmo após ser bloqueado",
      "Criação de novos perfis para seguir cada passo da vítima",
      "Comentários ameaçadores ou de vigilância sobre a rotina física da pessoa"
    ],
    severity: "critica",
    iconName: "Eye"
  },
  {
    id: "doxxing",
    title: "Doxxing (Vazamento de Dados)",
    subtitle: "Exposição maliciosa de dados pessoais privados",
    description: "Derivado de 'docs' (documentos), é a prática de pesquisar e publicar dados identificáveis de uma pessoa (como endereço residencial, CPF, telefone, local de trabalho ou fotos privadas) sem autorização, para incentivar ataques em massa.",
    examples: [
      "Divulgação do endereço e telefone de alguém em fóruns ou grupos para assédio",
      "Exposição de documentos pessoais com objetivo de causar prejuízo financeiro ou moral",
      "Publicação de histórico escolar ou médico sem consentimento"
    ],
    severity: "critica",
    iconName: "ShieldAlert"
  },
  {
    id: "impersonation",
    title: "Impersonation (Perfil Falso / Falsidade)",
    subtitle: "Usurpação de identidade para difamação",
    description: "Criação de contas fakes ou invasão de perfil real para se passar pela vítima e publicar conteúdos ofensivos, preconceituosos ou comprometedores, destruindo a reputação social e profissional do indivíduo.",
    examples: [
      "Criar perfil com foto e nome da vítima em sites adultos ou fóruns extremistas",
      "Usar conta hackeada para enviar ofensas aos amigos e familiares da vítima",
      "Simular declarações falsas e chocantes atribuídas à vítima"
    ],
    severity: "alta",
    iconName: "UserX"
  },
  {
    id: "flaming",
    title: "Flaming e Hostilização Aberta",
    subtitle: "Ataques verbais diretos e inflamados",
    description: "Discussões inflamadas, com linguagem agressiva, xingamentos, profanidades e humilhações públicas em caixas de comentários, salas de bate-papo ou jogos online, com o intuito deliberado de desestabilizar a vítima.",
    examples: [
      "Ataques em massa em fotos no Instagram ou comentários no TikTok",
      "Linchamento virtual em grupos de WhatsApp ou servidores do Discord",
      "Insultos coordenados durante partidas de jogos eletrônicos multiplayer"
    ],
    severity: "moderada",
    iconName: "Flame"
  },
  {
    id: "exclusion",
    title: "Exclusão Digital Sistemática (Ostracismo)",
    subtitle: "Isolamento social intencional no ambiente virtual",
    description: "Ação de remover ou banir intencionalmente um indivíduo de grupos sociais, turmas de estudo, chats e comunidades virtuais onde a participação é relevante para seu convívio, gerando sentimento de inferioridade e rejeição.",
    examples: [
      "Criar um grupo paralelo da sala de aula onde apenas uma pessoa é excluída para piadas",
      "Remover a pessoa de trabalhos em equipe de forma maldosa e secreta",
      "Proibir participantes de interagirem com as postagens de determinado colega"
    ],
    severity: "moderada",
    iconName: "UserMinus"
  },
  {
    id: "outing",
    title: "Outing e Revelação de Segredos",
    subtitle: "Exposição de intimidades ou orientação sem autorização",
    description: "Consiste em revelar publicamente informações íntimas, fotografias sensíveis, segredos ou a orientação sexual/identidade de gênero de alguém sem seu consentimento prévio, visando expô-la ao julgamento público.",
    examples: [
      "Vazar prints de conversas privadas confiadas em segredo",
      "Revelar a orientação sexual de um jovem para a escola ou família sem permissão",
      "Compartilhar diários, áudios íntimos ou histórico pessoal em redes abertas"
    ],
    severity: "critica",
    iconName: "Lock"
  }
];

export const LEGAL_FRAMEWORK: LegalItem[] = [
  {
    law: "Lei nº 14.811/2024",
    year: "Janeiro de 2024",
    title: "Criminalização do Bullying e Cyberbullying no Código Penal",
    description: "Marco histórico na legislação brasileira. Incluiu o Art. 146-A no Código Penal. Tipifica expressamente o crime de intimidação sistemática (bullying) e intimidação sistemática virtual (cyberbullying).",
    penalties: "Cyberbullying: Reclusão de 2 a 4 anos e multa, se a conduta não constituir crime mais grave.",
    impact: "Tornou o cyberbullying um crime específico e mais grave do que o bullying físico, além de incluir crimes contra crianças e adolescentes no rol de crimes hediondos quando aplicável."
  },
  {
    law: "Marco Civil da Internet (Lei nº 12.965/2014)",
    year: "2014",
    title: "Direitos, Deveres e Remoção de Conteúdo",
    description: "Estabelece os princípios e garantias do uso da internet no Brasil. Prevê a responsabilidade de provedores pela remoção de conteúdos mediante ordem judicial e a obrigação de guardar registros de acesso (IPs) para identificação dos agressores.",
    penalties: "Remoção compulsória de links e responsabilização civil de redes sociais que descumprirem ordens de exclusão.",
    impact: "Garante a preservação dos dados de conexão para que a polícia possa rastrear o autor de perfis falsos ou ofensas sob sigilo."
  },
  {
    law: "Estatuto da Criança e do Adolescente - ECA (Lei nº 8.069/1990)",
    year: "Atualizada",
    title: "Proteção Integral e Responsabilidade dos Pais",
    description: "Garante o direito do jovem à dignidade, ao respeito e à preservação da imagem. Aos pais e responsáveis cabe o dever de fiscalizar o comportamento digital dos filhos menores.",
    penalties: "Atos infracionais para adolescentes infratores (medidas socioeducativas) e reparação civil/financeira por danos morais aplicada aos pais.",
    impact: "Reforça que a menoridade de idade não significa impunidade e responsabiliza a família e a escola no dever de prevenção."
  },
  {
    law: "Código Penal - Crimes Contra a Honra",
    year: "Vigente",
    title: "Calúnia, Difamação e Injúria na Rede (Arts. 138, 139 e 140)",
    description: "Crimes praticados na internet que atentam contra a reputação e a dignidade de alguém. Possuem causa de aumento de pena (Art. 141) por serem cometidos em meio que facilita a divulgação (redes sociais e grupos de mensagem).",
    penalties: "Detenção, reclusão e multa, com penas triplicadas devido ao meio de divulgação em massa.",
    impact: "Ofensas virtuais e boatos inverídicos configuram ilícitos penais passíveis de indenização por danos morais na esfera cível."
  }
];

export const ACTION_GUIDES: ActionGuide[] = [
  {
    id: "victims",
    role: "Vítimas de Cyberbullying",
    title: "O que fazer se você está sofrendo ataques virtuais",
    icon: "Shield",
    summary: "A culpa nunca é sua. Não responda aos agressores, preserve todas as evidências digitais e busque ajuda de pessoas de confiança e canais oficiais imediatos.",
    steps: [
      {
        title: "1. Não Reaja nem Revide",
        description: "Os agressores alimentam-se da reação emotiva da vítima. Responder às ofensas pode escalar a violência e ser usado contra você.",
        importantBadge: "Regra de Ouro"
      },
      {
        title: "2. Registre Tudo (Cadeia de Custódia)",
        description: "Tire prints completos mostrando a data, hora, nome de usuário, número de telefone e a URL da página. Não apague as mensagens originais."
      },
      {
        title: "3. Bloqueie o Agressor nas Redes",
        description: "Utilize as ferramentas de bloqueio, restrição de comentários e denúncia da própria plataforma (Instagram, WhatsApp, TikTok, X, Discord)."
      },
      {
        title: "4. Avise Pessoas de Confiança",
        description: "Converse com pais, professores, coordenadores pedagógicos ou um profissional de psicologia. O silêncio aumenta o isolamento."
      },
      {
        title: "5. Registre o Boletim de Ocorrência",
        description: "Procure a Delegacia Eletrônica do seu estado ou uma delegacia comum/especializada em crimes cibernéticos acompanhado de um responsável se for menor."
      }
    ],
    donits: [
      "Não apague o histórico de conversas antes de salvar as provas.",
      "Não repasse a nenhum colega o conteúdo difamatório recebido.",
      "Não tente se vingar criando um perfil falso contra o agressor.",
      "Não enfrente o problema sozinho no isolamento."
    ]
  },
  {
    id: "parents",
    role: "Pais e Responsáveis",
    title: "Como identificar, acolher e proteger seus filhos",
    icon: "HeartHandshake",
    summary: "Fique atento a mudanças repentinas de comportamento, isolamento e queda no rendimento escolar. O acolhimento sem julgamentos é o primeiro passo.",
    steps: [
      {
        title: "1. Identifique os Sinais de Alerta",
        description: "Mudanças bruscas de humor ao usar o celular, isolamento no quarto, recusa em ir à escola/faculdade, insônia e alteração no apetite."
      },
      {
        title: "2. Ofereça Escuta Empática",
        description: "Garanta ao jovem que ele não será punido com a perda do celular por ter contado a verdade. Evite culpar a vítima pelo conteúdo exposto."
      },
      {
        title: "3. Documente o Material Ofensivo",
        description: "Guarde os links e capturas de tela. Caso necessário, realize uma Ata Notarial em cartório para dar fé pública às provas."
      },
      {
        title: "4. Notifique a Instituição de Ensino",
        description: "Agende uma reunião com a direção ou coordenação da escola/faculdade para exigir a aplicação dos protocolos da Lei 14.811/2024 e Lei do Bullying."
      },
      {
        title: "5. Busque Apoio Psicológico e Jurídico",
        description: "Acompanhamento terapêutico ajuda a restaurar a autoestima. Na esfera legal, pode-se exigir a remoção de links e reparação moral."
      }
    ],
    donits: [
      "Não tome o celular como forma de 'castigo' após a revelação.",
      "Não minimize a dor do jovem dizendo que é 'só uma brincadeira de internet'.",
      "Não ataque a família do agressor impulsivamente nas redes sociais."
    ]
  },
  {
    id: "schools",
    role: "Escolas e Educadores",
    title: "Protocolos institucionais de prevenção e intervenção",
    icon: "GraduationCap",
    summary: "A Lei 14.811/2024 exige que escolas implementem medidas preventivas contínuas contra a intimidação sistemática virtual.",
    steps: [
      {
        title: "1. Estabeleça um Protocolo Claro de Denúncia",
        description: "Crie um canal anônimo e seguro para que estudantes possam comunicar episódios de cyberbullying sem medo de retaliação."
      },
      {
        title: "2. Promova Letramento Digital e Cidadania",
        description: "Insira nos projetos pedagógicos oficinas permanentes sobre empatia digital, pegada digital, LGPD e respeito nas redes."
      },
      {
        title: "3. Acolhimento Imediato sem Exposição",
        description: "Atenda a vítima e a família com sigilo absoluto. Ofereça flexibilidade acadêmica durante o período de crise psicológica."
      },
      {
        title: "4. Intervenção Educativa com os Envolvidos",
        description: "Avoque os agressores e seus responsáveis para mediação educativa, conscientização sobre as consequências legais e reparação simbólica."
      },
      {
        title: "5. Parceria com os Órgãos de Proteção",
        description: "Encaminhe casos graves ao Conselho Tutelar, Ministério Público e redes de saúde mental do município."
      }
    ],
    donits: [
      "Não ignore denúncias sob o pretexto de que o ato ocorreu fora do horário escolar.",
      "Não promova acareações forçadas e humilhantes entre vítima e agressores.",
      "Não varra o problema para debaixo do tapete para preservar a imagem da instituição."
    ]
  },
  {
    id: "witnesses",
    role: "Testemunhas e Amigos",
    title: "Como ser um aliado ativo e romper a cadeia do ódio",
    icon: "Users",
    summary: "Quem assiste em silêncio ou compartilha piadas torna-se cúmplice do ataques. A atitude de uma única testemunha pode salvar uma vida.",
    steps: [
      {
        title: "1. Não Curta, Não Comente e Não Compartilhe",
        description: "O algoritmo amplia publicações com engajamento. Negue visibilidade ao conteúdo difamatório não interagindo."
      },
      {
        title: "2. Envie uma Mensagem Privada de Apoio à Vítima",
        description: "Mostre que a pessoa não está sozinha. Um simples 'Estou aqui por você e sei que isso é mentira' renova as forças de quem sofre."
      },
      {
        title: "3. Denuncie a Publicação na Plataforma",
        description: "Utilize o botão de denúncia do Instagram, WhatsApp, TikTok ou X por 'Assédio', 'Discurso de Ódio' ou 'Intimidação'."
      },
      {
        title: "4. Comunique Autoridades da Escola ou Faculdade",
        description: "Relate o ocorrido à coordenação, professores ou psicólogos da instituição para que intervenham antes que piore."
      }
    ],
    donits: [
      "Não repasse 'memes' ou prints difamatórios para outros grupos de WhatsApp.",
      "Não incentive o linchamento virtual com risadas ou emojis em comentários.",
      "Não isole o colega que está sendo atacado por medo de virar alvo."
    ]
  }
];

export const SCENARIOS: Scenario[] = [
  {
    id: "fake_profile",
    title: "Perfil Falso Criado no Meu Nome",
    situation: "Alguém usou suas fotos e nome para criar um perfil fake que está enviando ofensas e postando fotos constrangedoras.",
    immediateActions: [
      "Faça capturas de tela (prints) da página principal do perfil fake, do link da URL exata e de todas as postagens feiitas por ele.",
      "Peça para amigos e conhecidos entrarem na página e denunciarem o perfil por 'Falsidade Ideológica / Fingindo ser outra pessoa'.",
      "Publique um aviso simples em seu perfil oficial informando aos contatos que há uma conta falsa operando e que providências legais já foram tomadas."
    ],
    legalSteps: [
      "Registre Boletim de Ocorrência por Falsidade Ideológica (Art. 307 do CP) e Cyberbullying (Art. 146-A do CP).",
      "A notificação judicial ou extrajudicial ao provedor da aplicação (ex: Meta/Instagram) obriga a entrega do endereço IP utilizado para criar a conta."
    ],
    psychologicalAdvice: "Lembre-se de que seus amigos verdadeiros sabem quem você é. A criação de fakes revela o desespero e a covardia do agressor em se esconder no anonimato."
  },
  {
    id: "leaked_photos",
    title: "Fotos Privadas ou Íntimas Vazadas em Grupos",
    situation: "Imagens ou conversas íntimas que você enviou confidencialmente foram compartilhadas em grupos de WhatsApp ou redes sociais sem sua autorização.",
    immediateActions: [
      "Não apague o chat onde a imagem foi recebida/enviada originalmente; ele contém os metadados e o número do remetente.",
      "No WhatsApp, ative a opção de relatar o grupo e bloquear os administradores.",
      "Acesse a plataforma SaferNet (helpline) ou a ferramenta 'Take It Down' (da NCMEC) para bloquear a propagação automática das imagens de menores na rede."
    ],
    legalSteps: [
      "A divulgação de cena de sexo, nudez ou pornografia sem consentimento é CRIME previsto no Art. 218-C do Código Penal (pena de 1 a 5 anos de reclusão).",
      "Se envolver menor de 18 anos, configura crime grave do Estatuto da Criança e do Adolescente (ECA Art. 241-A)."
    ],
    psychologicalAdvice: "A exposição da intimidade gera choque e vulnerabilidade. A culpa é EXCLUSIVAMENTE de quem vazou e repassou o conteúdo. Procure amparo emocional imediato (Ligue 188 / CVV)."
  },
  {
    id: "whatsapp_group",
    title: "Linchaço Virtual em Grupo de Turma ou Faculdade",
    situation: "Criação de um grupo no WhatsApp para zombar de um colega, fazer figurinhas (stickers) pejorativas ou divulgar mentiras sobre a vida dele.",
    immediateActions: [
      "Exporte o histórico da conversa do WhatsApp em arquivo de texto (com mídias inclusas).",
      "Tire prints que mostrem claramente os NÚMEROS DE TELEFONE dos administradores do grupo e dos participantes ativos nos ataques.",
      "Leve o caso imediatamente à direção pedagógica ou ouvidoria da faculdade/escola."
    ],
    legalSteps: [
      "A criação e distribuição de figurinhas (stickers) com cunho difamatório gera dever de indenizar por Dano Moral (Art. 186 e 927 do Código Civil).",
      "Os administradores do grupo que incentivam ou permitem o assédio moral continuado podem ser responsabilizados civilmente."
    ],
    psychologicalAdvice: "O efeito de manada faz com que pessoas normais ajam de forma cruel na internet. Saia do grupo tóxico e busque o apoio da direção e da sua família."
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "Um grupo de colegas criou um sticker (figurinha) zombando de uma foto que um colega postou e passou a repassar em vários grupos. Isso é cyberbullying?",
    options: [
      {
        label: "Sim, é uma forma de humilhação pública e difamação sistemática.",
        isCyberbullying: true,
        explanation: "Correto! Mesmo em tom de 'brincadeira', usar a imagem de alguém para ridicularizá-lo e espalhar em grupos gera constrangimento e fere a dignidade, configurando cyberbullying segundo a Lei 14.811/2024."
      },
      {
        label: "Não, figurinhas no WhatsApp são apenas memes inofensivos da internet.",
        isCyberbullying: false,
        explanation: "Incorreto. Memes e figurinhas que ridicularizam pessoas reais provocam danos à saúde mental e à reputação, podendo gerar processos por danos morais."
      }
    ]
  },
  {
    id: 2,
    question: "O que você deve fazer ao receber uma mensagem ofensiva ou ameaçadora no seu chat privado?",
    options: [
      {
        label: "Excluir o chat imediatamente para não ter que ler aquilo nunca mais.",
        isCyberbullying: false,
        explanation: "Cuidado! Apagar as conversas apaga também a única prova jurídica que você possui para responsabilizar o agressor perante a justiça."
      },
      {
        label: "Tirar prints legíveis com data/hora, exportar a conversa, salvar o link/número e buscar apoio.",
        isCyberbullying: true,
        explanation: "Exato! Salvar as evidências é o passo fundamental para a coleta de provas (Ata Notarial / BO) antes de bloquear o infrator."
      }
    ]
  },
  {
    id: 3,
    question: "Alguém divulga no Twitter o endereço residencial e o telefone particular de um colega para que outros o perturbem. Como se chama essa prática?",
    options: [
      {
        label: "Doxxing (Vazamento de dados privados com intenção maliciosa).",
        isCyberbullying: true,
        explanation: "Exato! O Doxxing viola a privacidade, o Marco Civil da Internet e a LGPD, colocando a integridade física da vítima em risco real."
      },
      {
        label: "Networking aberto.",
        isCyberbullying: false,
        explanation: "Incorreto. Divulgar dados sem consentimento para expor a pessoa a ataques é uma violação grave de direitos."
      }
    ]
  }
];

export const STATS_HIGHLIGHTS = [
  {
    number: "66%",
    label: "dos adolescentes brasileiros",
    description: "já testemunharam episódios de violência, intimidação ou discursos de ódio nas redes sociais (Dados UNICEF/SaferNet)."
  },
  {
    number: "Art. 146-A",
    label: "do Código Penal Brasileiro",
    description: "Tipifica o Cyberbullying com pena de até 4 anos de reclusão mais multa (Lei nº 14.811/2024)."
  },
  {
    number: "24h / 7 dias",
    label: "Invasão sem Fronteiras",
    description: "Diferente do bullying tradicional, a agressão virtual persegue a vítima dentro do próprio quarto através do celular."
  },
  {
    number: "+100 mil",
    label: "atendimentos e denúncias",
    description: "registrados anualmente por plataformas de proteção digital de direitos no Brasil como a SaferNet."
  }
];
