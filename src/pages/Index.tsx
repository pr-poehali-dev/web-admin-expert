import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const skills = [
  "1С-Битрикс", "PHP", "HTML/CSS", "JavaScript", "MySQL", 
  "Joomla", "SEO", "Google Analytics", "Яндекс.Метрика", 
  "Photoshop", "Excel", "Битрикс24"
];

const experiences = [
  {
    title: "Администратор сайтов на 1С-Битрикс",
    period: "2019 - настоящее время",
    description: "Профессиональное администрирование сайтов, работа с каталогами до 50,000 товаров, настройка интеграций",
    tech: ["1С-Битрикс", "PHP", "MySQL", "API"]
  },
  {
    title: "Веб-разработчик",
    period: "2010 - настоящее время",
    description: "Создание и поддержка веб-сайтов, интеграция с маркетплейсами, SEO-оптимизация",
    tech: ["HTML", "CSS", "JavaScript", "CMS"]
  },
  {
    title: "B2B продажи",
    period: "15 лет опыта",
    description: "Успешный опыт продаж в корпоративном сегменте, понимание бизнес-процессов клиентов",
    tech: ["CRM", "Аналитика", "Презентации"]
  }
];

const blogPosts = [
  {
    title: "Оптимизация производительности 1С-Битрикс",
    excerpt: "Практические советы по ускорению работы интернет-магазинов на платформе Битрикс",
    date: "15 июля 2024",
    readTime: "8 мин",
    category: "Битрикс"
  },
  {
    title: "Интеграция с маркетплейсами: полное руководство",
    excerpt: "Пошаговая настройка выгрузки товаров на Озон, Яндекс.Маркет и МегаМаркет",
    date: "28 июня 2024", 
    readTime: "12 мин",
    category: "E-commerce"
  },
  {
    title: "SEO-оптимизация для технических специалистов",
    excerpt: "Технические аспекты SEO, которые должен знать каждый веб-разработчик",
    date: "10 июня 2024",
    readTime: "6 мин",
    category: "SEO"
  }
];

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <Icon name="Code" size={24} />
              <span className="hidden font-bold sm:inline-block">Ринат Фаизов</span>
            </a>
          </div>
          <nav className="flex items-center space-x-6 text-sm font-medium ml-auto">
            <a href="#about" className="transition-colors hover:text-primary">Обо мне</a>
            <a href="#experience" className="transition-colors hover:text-primary">Опыт</a>
            <a href="#blog" className="transition-colors hover:text-primary">Блог</a>
            <Button size="sm">Связаться</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Ринат Фаизов
              </h1>
              <h2 className="text-xl text-muted-foreground md:text-2xl">
                Администратор 1С-Битрикс & Веб-разработчик
              </h2>
            </div>
            <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">
              Более 15 лет в IT-сфере. Специализируюсь на создании и администрировании 
              интернет-магазинов на платформе 1С-Битрикс с каталогами до 50,000 товаров.
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.slice(0, 6).map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
            <div className="flex gap-4">
              <Button size="lg">
                <Icon name="Mail" size={18} className="mr-2" />
                teplo-watt@mail.ru
              </Button>
              <Button variant="outline" size="lg">
                <Icon name="Phone" size={18} className="mr-2" />
                +7 920 155 52 05
              </Button>
            </div>
          </div>
          <div className="flex justify-center animate-scale-in">
            <div className="relative">
              <img
                src="/img/0100bdd9-1e57-4c16-b2d9-e68c18c9a097.jpg"
                alt="Ринат Фаизов"
                className="rounded-2xl shadow-2xl max-w-sm w-full"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-3 rounded-full shadow-lg">
                <Icon name="Trophy" size={24} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Профессиональный опыт
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-[600px] mx-auto">
              Более 15 лет успешной работы в сфере веб-разработки и администрирования
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {experiences.map((exp, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow animate-fade-in" 
                    style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <CardTitle className="text-lg">{exp.title}</CardTitle>
                  <CardDescription className="text-primary font-semibold">
                    {exp.period}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{exp.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {exp.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-16 grid gap-4 md:grid-cols-4 text-center">
            <div className="p-6">
              <div className="text-2xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">лет в IT</div>
            </div>
            <div className="p-6">
              <div className="text-2xl font-bold text-primary">50K+</div>
              <div className="text-sm text-muted-foreground">товарных позиций</div>
            </div>
            <div className="p-6">
              <div className="text-2xl font-bold text-primary">100+</div>
              <div className="text-sm text-muted-foreground">проектов</div>
            </div>
            <div className="p-6">
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">поддержка</div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Blog Section */}
      <section id="blog" className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Технический блог
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-[600px] mx-auto">
              Делюсь опытом и знаниями в области веб-разработки и администрирования
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow cursor-pointer group animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-xs text-muted-foreground">
                    {post.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
                  <Button variant="ghost" size="sm" className="p-0 h-auto">
                    Читать далее
                    <Icon name="ArrowRight" size={14} className="ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              <Icon name="BookOpen" size={18} className="mr-2" />
              Все статьи блога
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 bg-muted/30">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-2">
              <Icon name="Code" size={20} />
              <span className="font-semibold">Ринат Фаизов</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="mailto:teplo-watt@mail.ru" className="hover:text-primary transition-colors">
                teplo-watt@mail.ru
              </a>
              <a href="tel:+79201555205" className="hover:text-primary transition-colors">
                +7 920 155 52 05
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024. Профессиональное портфолио
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}