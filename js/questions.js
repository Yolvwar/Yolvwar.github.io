// creer tableau avec valeur question,réponse,options et explications
let questions = [
  {
    question: " Quel est le meilleur mot de passe ?",
    answer: "Bo!te0lettre75",
    options: [
      "123456",
      "Bo!te0lettre75",
      "Passw0rd",
      "Fanny75"
    ],
    explication: "Explication : 'Bo!te0lettre75' est un mot de passe fort avec une combinaison de lettres minuscules et majuscules, de chiffres et de caractères spéciaux. Cela rend plus difficile pour les pirates informatiques de deviner le mot de passe et protège mieux vos informations personnelles en ligne",
  },
  {
    question: " Pourquoi est-il important de ne pas partager d'informations personnelles en ligne ?",
    answer: "Parce que cela peut causer des ennuis à vous-même",
    options: [
      "Parce que cela peut causer des ennuis à vos amis",
      "Parce que cela peut causer des ennuis à vous-même",
      " Parce que cela peut causer des ennuis à votre famille",
    ],
    explication: "Explication : Il est important de ne pas partager d'informations personnelles en ligne car cela peut causer des ennuis à vous-même. Les informations personnelles peuvent être utilisées pour l'usurpation d'identité, le vol d'informations ou d'argent et d'autres activités malveillantes",
  },
  {
    question: "Que devez-vous faire si vous recevez un message étrange d'un inconnu en ligne ?",
    answer: "Demander à vos parents ou à un adulte de confiance ce qu'il faut faire",
    options: [
      "Répondre immédiatement",
      "Ignorer le message",
      "Faire une enquête sur la personne",
      "Demander à vos parents ou à un adulte de confiance ce qu'il faut faire",
    ],
    explication: "Explication : Si vous recevez un message étrange d'un inconnu en ligne, vous devriez demander à vos parents ou à un adulte de confiance ce qu'il faut faire. Il est important de ne jamais répondre immédiatement à un message d'un inconnu en ligne et de ne pas partager d'informations personnelles ou sensibles",
  },
  {
    question: "Comment pouvez-vous protéger votre ordinateur contre les virus ?",
    answer: "En téléchargeant des logiciels antivirus",
    options: [
      "En téléchargeant des logiciels antivirus",
      "En ne visitant que des sites web connus",
      "En partageant votre ordinateur avec vos amis",
    ],
    explication: "Explication : Pour protéger votre ordinateur contre les virus, vous devez télécharger et installer un logiciel antivirus fiable. Il est également important de maintenir votre logiciel antivirus à jour en installant régulièrement les mises à jour disponibles",
  },
  {
    question: "Qu'est-ce que tu devrais faire si tu vois quelque chose d'inapproprié en ligne ?",
    answer: "Tu devrais signaler ce que tu as vu à tes parents ou à un adulte de confiance",
    options: [
      "Tu devrais ignorer ce que tu as vu et continuer à naviguer sur le site",
      "Tu devrais signaler ce que tu as vu à tes parents ou à un adulte de confiance",
      "Tu devrais partager ce que tu as vu avec tes amis en ligne",
    ],
    explication: "Explication : Si vous voyez quelque chose d'inapproprié en ligne, vous devriez signaler ce que vous avez vu à un adulte de confiance, tel que vos parents ou un enseignant. Les adultes peuvent vous aider à comprendre ce que vous avez vu et à vous guider sur la meilleure façon de réagir",
  },
  {
    question: "Qu'est-ce que l'hameçonnage ?",
    answer: "Une technique pour obtenir des informations personnelles en se faisant passer pour une personne ou une entreprise de confiance sur internet",
    options: [
      "Une technique pour attraper des poissons",
      "Une technique pour obtenir des informations personnelles en se faisant passer pour une personne ou une entreprise de confiance sur internet",
      "Une technique pour pêcher en ligne",
    ],
    explication: "Explication : Le hameçonnage est une technique utilisée par les pirates informatiques pour obtenir des informations personnelles en se faisant passer pour des sources fiables. Il est important de ne jamais fournir d'informations personnelles à moins d'être sûr que la source est fiable",
  },
  {
    question: "Que devez-vous faire si vous pensez que votre compte en ligne a été piraté ?",
    answer: "Changer immédiatement votre mot de passe",
    options: [
      "Changer immédiatement votre mot de passe",
      "Changer immédiatement de pseudo",
      "Ne rien faire et espérer que le problème se résoudra de lui-même",
    ],
    explication: "Explication : Si vous pensez que votre compte en ligne a été piraté, il est important de changer immédiatement votre mot de passe pour empêcher le pirate d'accéder à votre compte. En changeant votre mot de passe, vous pouvez renforcer la sécurité de votre compte et empêcher le pirate d'utiliser vos informations pour des activités malveillantes. Il est également important de vérifier vos informations de compte et de surveiller les activités suspectes pour vous assurer que votre compte est sécurisé",
  },
  {
    question: "Que devriez-vous faire si vous recevez un e-mail ou un message qui prétend provenir d'une entreprise connue, mais qui semble suspect ?",
    answer: "En parler à un adulte de confiance et signaler le faux mail si l’adulte vous le conseille",
    options: [
      "Répondre immédiatement pour régler le problème",
      "Cliquer sur les liens fournis dans le message pour vérifier l'authenticité",
      "En parler à un adulte de confiance et signaler le faux mail si l’adulte vous le conseille",
    ],
    explication: "Réponse : Si vous recevez un e-mail suspect prétendant provenir d'une entreprise connue, il est important d'en parler à un adulte de confiance et de signaler le faux mail si l'adulte vous le conseille. Il ne faut pas répondre au message, cliquer sur les liens fournis ou fournir des informations personnelles",
  },
];