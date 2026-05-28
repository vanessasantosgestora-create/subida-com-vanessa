export interface Faq {
  q: string;
  a: string;
}

// Fonte única das perguntas frequentes — renderizadas na seção FAQ e no
// dado estruturado FAQPage (precisam ser idênticas para o Google validar o rich result).
export const faqs: Faq[] = [
  {
    q: "Quanto tempo demora para minha landing ficar pronta?",
    a: "O prazo máximo é de 15 dias úteis a partir do envio das informações. Projetos com material organizado costumam ficar prontos em menos tempo. Você acompanha o processo de perto e aprova cada etapa.",
  },
  {
    q: "Funciona bem no celular?",
    a: "Sim — toda landing é construída com abordagem mobile-first. Isso significa que ela é desenhada primeiro pensando no celular, depois adaptada para tablet e desktop. Cerca de 85% do tráfego brasileiro vem do mobile, e a experiência precisa ser impecável nesse ambiente.",
  },
  {
    q: "Vocês hospedam o site? Como funciona?",
    a: "Sim. A publicação está inclusa no pacote, usando infraestrutura premium da Vercel (a mesma que grandes startups usam). Você não precisa se preocupar com servidor, certificado SSL ou configurações técnicas — tudo é entregue rodando.",
  },
  {
    q: "Posso pedir alterações depois da entrega?",
    a: "Pequenos ajustes de texto, troca de imagens ou correções estão sempre disponíveis. Mudanças estruturais maiores podem ter custo adicional, mas tudo é alinhado com transparência antes de qualquer cobrança extra.",
  },
  {
    q: "Preciso ter um domínio próprio?",
    a: "Não é obrigatório no início — sua landing pode entrar no ar em um subdomínio premium da Subida com Vanessa enquanto você adquire o domínio. Se já tem um (.com.br, .com, .digital, etc.), eu cuido de toda a configuração para você.",
  },
  {
    q: "Que tipo de empresa essa landing serve?",
    a: "Qualquer negócio que queira ser percebido como premium: estética, advocacia, consultoria, infoprodutos, e-commerce, escritório de contabilidade, clínicas, prestadores de serviço, agências, startups. O foco está em pequenas empresas e MEIs que precisam vender mais com uma imagem profissional de verdade.",
  },
];
