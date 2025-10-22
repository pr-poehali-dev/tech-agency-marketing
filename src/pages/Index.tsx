import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Icon from "@/components/ui/icon";
import AnimatedCounter from "@/components/AnimatedCounter";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: "", email: "", message: "" });
    setIsDialogOpen(false);
  };

  const partners = [
    { name: "Yandex", icon: "Building" },
    { name: "Sberbank", icon: "Landmark" },
    { name: "VK", icon: "MessageSquare" },
    { name: "MTS", icon: "Radio" },
    { name: "Tinkoff", icon: "CreditCard" },
    { name: "Ozon", icon: "ShoppingCart" }
  ];

  const services = [
    {
      icon: "Mail",
      title: "Email-маркетинг",
      description: "Создание эффективных email-кампаний с высокой конверсией и автоматизацией рассылок"
    },
    {
      icon: "MessageCircle",
      title: "Мессенджер-маркетинг",
      description: "Автоматизация коммуникаций в Telegram, WhatsApp и других мессенджерах"
    },
    {
      icon: "TrendingUp",
      title: "Аналитика и оптимизация",
      description: "Глубокий анализ метрик, A/B тестирование и повышение показателей эффективности"
    },
    {
      icon: "Zap",
      title: "Автоматизация воронок",
      description: "Настройка автоматических воронок продаж с персонализированными сценариями"
    }
  ];

  const cases = [
    {
      title: "E-commerce проект",
      metric: "+340%",
      description: "Рост продаж",
      detail: "Интернет-магазин одежды"
    },
    {
      title: "Финтех стартап",
      metric: "85%",
      description: "Open Rate",
      detail: "Банковское приложение"
    },
    {
      title: "EdTech платформа",
      metric: "12x",
      description: "ROI",
      detail: "Онлайн-образование"
    }
  ];

  const blogPosts = [
    {
      title: "Будущее мессенджер-маркетинга в 2024",
      date: "15 окт 2024",
      category: "Тренды"
    },
    {
      title: "10 метрик email-кампаний, которые важны",
      date: "08 окт 2024",
      category: "Аналитика"
    },
    {
      title: "Как автоматизировать 90% коммуникаций",
      date: "01 окт 2024",
      category: "Автоматизация"
    }
  ];

  const team = [
    { name: "Анна Петрова", role: "Email-стратег", icon: "User" },
    { name: "Дмитрий Иванов", role: "Аналитик данных", icon: "User" },
    { name: "Мария Сидорова", role: "Мессенджер-эксперт", icon: "User" },
    { name: "Алексей Козлов", role: "Технический директор", icon: "User" }
  ];

  const stats = [
    { value: "500+", label: "Проектов запущено" },
    { value: "98%", label: "Довольных клиентов" },
    { value: "250%", label: "Средний рост конверсии" },
    { value: "24/7", label: "Поддержка клиентов" }
  ];

  const benefits = [
    {
      icon: "Target",
      title: "Точное попадание в аудиторию",
      description: "Сегментация и персонализация для максимальной релевантности"
    },
    {
      icon: "BarChart3",
      title: "Прозрачная аналитика",
      description: "Детальные отчеты и дашборды в режиме реального времени"
    },
    {
      icon: "Shield",
      title: "Защита репутации",
      description: "Соблюдение GDPR, CAN-SPAM и лучших практик отправки"
    },
    {
      icon: "Rocket",
      title: "Быстрый запуск",
      description: "Первые результаты уже через 2 недели после старта"
    },
    {
      icon: "Users",
      title: "Экспертная команда",
      description: "15+ лет совокупного опыта в digital-маркетинге"
    },
    {
      icon: "LineChart",
      title: "Масштабируемость",
      description: "От 1000 до 1 млн контактов без потери качества"
    }
  ];

  const testimonials = [
    {
      name: "Елена Смирнова",
      role: "CMO, TechStore",
      text: "За 3 месяца работы с TechComm мы увеличили конверсию email-рассылок в 4 раза. Профессиональный подход и видимые результаты!",
      rating: 5
    },
    {
      name: "Игорь Волков",
      role: "Основатель, FinApp",
      text: "Автоматизация мессенджер-маркетинга помогла нам сэкономить 20 часов в неделю и увеличить вовлеченность на 180%.",
      rating: 5
    },
    {
      name: "Ольга Кузнецова",
      role: "Директор по маркетингу, EduPlatform",
      text: "Лучшее агентство, с которым мы работали. Глубокая экспертиза, быстрая реакция и постоянная оптимизация кампаний.",
      rating: 5
    }
  ];

  const socialLinks = [
    { name: "Telegram", icon: "Send", url: "#" },
    { name: "VK", icon: "MessageSquare", url: "#" },
    { name: "WhatsApp", icon: "MessageCircle", url: "#" },
    { name: "YouTube", icon: "Youtube", url: "#" }
  ];

  const faqItems = [
    {
      question: "Сколько времени занимает запуск первой кампании?",
      answer: "Обычно от 1 до 2 недель в зависимости от сложности. Мы начинаем с аудита текущих процессов, разработки стратегии и настройки технической инфраструктуры."
    },
    {
      question: "Какие платформы и инструменты вы используете?",
      answer: "Мы работаем с ведущими ESP (SendGrid, Mailchimp, SendPulse), мессенджерами (Telegram, WhatsApp Business API) и аналитическими системами (Google Analytics, Amplitude). Выбор инструментов зависит от задач клиента."
    },
    {
      question: "Какова средняя стоимость ваших услуг?",
      answer: "Стоимость зависит от объема работ и сложности проекта. Базовый пакет email-маркетинга начинается от 50 000 ₽/месяц, мессенджер-маркетинг — от 40 000 ₽/месяц. Предлагаем бесплатную консультацию для оценки."
    },
    {
      question: "Предоставляете ли вы гарантии результата?",
      answer: "Мы не даем абсолютных гарантий роста, так как результаты зависят от многих факторов. Однако у нас есть четкие KPI и в 95% проектов мы достигаем запланированных показателей в первые 3 месяца."
    },
    {
      question: "Можно ли начать с тестового проекта?",
      answer: "Да, мы предлагаем пилотные проекты на 1-2 месяца для новых клиентов. Это позволяет оценить эффективность нашей работы без долгосрочных обязательств."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Icon name="Zap" className="text-white" size={24} />
            </div>
            <span className="text-xl font-bold">TechComm</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#services" onClick={(e) => smoothScroll(e, '#services')} className="text-foreground hover:text-primary transition cursor-pointer">Услуги</a>
            <a href="#cases" onClick={(e) => smoothScroll(e, '#cases')} className="text-foreground hover:text-primary transition cursor-pointer">Кейсы</a>
            <a href="#blog" onClick={(e) => smoothScroll(e, '#blog')} className="text-foreground hover:text-primary transition cursor-pointer">Блог</a>
            <a href="#team" onClick={(e) => smoothScroll(e, '#team')} className="text-foreground hover:text-primary transition cursor-pointer">Команда</a>
            <a href="#contact" onClick={(e) => smoothScroll(e, '#contact')} className="text-foreground hover:text-primary transition cursor-pointer">Контакты</a>
          </div>
          <div className="flex items-center gap-2">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="hidden md:flex">
                  <Icon name="Mail" className="mr-2" size={16} />
                  Связаться
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Бесплатная консультация</DialogTitle>
                  <DialogDescription>
                    Оставьте заявку и получите персональную стратегию для вашего бизнеса
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="modal-name">Имя</Label>
                    <Input
                      id="modal-name"
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="modal-email">Email</Label>
                    <Input
                      id="modal-email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="modal-message">Сообщение</Label>
                    <Textarea
                      id="modal-message"
                      placeholder="Расскажите о вашем проекте..."
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    <Icon name="Send" className="mr-2" size={16} />
                    Отправить заявку
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col space-y-4 mt-8">
                  <a href="#services" onClick={(e) => smoothScroll(e, '#services')} className="text-lg font-medium hover:text-primary transition">Услуги</a>
                  <a href="#cases" onClick={(e) => smoothScroll(e, '#cases')} className="text-lg font-medium hover:text-primary transition">Кейсы</a>
                  <a href="#blog" onClick={(e) => smoothScroll(e, '#blog')} className="text-lg font-medium hover:text-primary transition">Блог</a>
                  <a href="#team" onClick={(e) => smoothScroll(e, '#team')} className="text-lg font-medium hover:text-primary transition">Команда</a>
                  <a href="#contact" onClick={(e) => smoothScroll(e, '#contact')} className="text-lg font-medium hover:text-primary transition">Контакты</a>
                  <Button className="w-full mt-4" onClick={() => { setMobileMenuOpen(false); setIsDialogOpen(true); }}>
                    <Icon name="Mail" className="mr-2" size={16} />
                    Связаться
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6 animate-fade-in">
            <Icon name="Sparkles" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Инновационные решения в маркетинге</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent animate-fade-in">
            Технологичный маркетинг<br />нового поколения
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            Превращаем email и мессенджеры в мощные инструменты роста вашего бизнеса с помощью AI и автоматизации
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button size="lg" className="text-lg px-8">
              <Icon name="Rocket" className="mr-2" size={20} />
              Начать проект
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              <Icon name="Play" className="mr-2" size={20} />
              Смотреть кейсы
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <AnimatedCounter 
                  end={stat.value} 
                  className="text-4xl md:text-5xl font-bold text-primary mb-2"
                />
                <p className="text-sm md:text-base text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">Полный спектр решений для технического маркетинга</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-muted-foreground">Преимущества работы с TechComm</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <Icon name={benefit.icon as any} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Кейсы и результаты</h2>
            <p className="text-xl text-muted-foreground">Измеримые результаты для наших клиентов</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {cases.map((caseItem, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardHeader className="relative">
                  <CardDescription className="text-sm">{caseItem.detail}</CardDescription>
                  <CardTitle className="text-2xl">{caseItem.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <div className="text-5xl font-bold text-primary mb-2">{caseItem.metric}</div>
                  <p className="text-lg text-muted-foreground">{caseItem.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Блог</h2>
            <p className="text-xl text-muted-foreground">Полезные материалы и инсайты</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-all cursor-pointer group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="p-0 h-auto">
                    Читать далее
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground">Что говорят о нас</p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-xl transition-all animate-fade-in">
                  <CardContent className="pt-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6 italic">&ldquo;{testimonial.text}&rdquo;</p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mr-3">
                        <Icon name="User" className="text-white" size={20} />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Нам доверяют</h2>
            <p className="text-lg text-muted-foreground">Партнеры и клиенты</p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="flex flex-col items-center justify-center p-4 hover:scale-110 transition-transform">
                <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mb-2">
                  <Icon name={partner.icon as any} className="text-muted-foreground" size={32} />
                </div>
                <span className="text-sm font-medium text-muted-foreground">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Часто задаваемые вопросы</h2>
            <p className="text-xl text-muted-foreground">Ответы на популярные вопросы</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Готовы увеличить конверсию вашего бизнеса?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Запишитесь на бесплатную консультацию и получите персональную стратегию развития
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8">
            <Icon name="Calendar" className="mr-2" size={20} />
            Записаться на консультацию
          </Button>
        </div>
      </section>

      <section id="team" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наша команда</h2>
            <p className="text-xl text-muted-foreground">Эксперты с многолетним опытом</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-4">
                    <Icon name={member.icon as any} className="text-white" size={40} />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Бесплатная консультация</h2>
            <p className="text-xl text-muted-foreground">
              Оставьте заявку и получите персональную стратегию для вашего бизнеса
            </p>
          </div>
          <Card className="border-2">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя</Label>
                  <Input
                    id="name"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea
                    id="message"
                    placeholder="Расскажите о вашем проекте..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <Icon name="Zap" className="text-white" size={24} />
                </div>
                <span className="text-xl font-bold">TechComm</span>
              </div>
              <p className="text-sm text-gray-300 mb-4">
                Агентство технических специалистов email и мессенджер маркетинга
              </p>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition"
                    aria-label={social.name}
                  >
                    <Icon name={social.icon as any} size={20} />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Email-маркетинг</li>
                <li>Мессенджер-маркетинг</li>
                <li>Аналитика</li>
                <li>Автоматизация</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>О нас</li>
                <li>Кейсы</li>
                <li>Блог</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <Icon name="Mail" className="mr-2" size={16} />
                  hello@techcomm.ru
                </li>
                <li className="flex items-center">
                  <Icon name="Phone" className="mr-2" size={16} />
                  +7 (495) 123-45-67
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-600 pt-8 text-center text-sm text-gray-300">
            © 2024 TechComm. Все права защищены.
          </div>
        </div>
      </footer>

      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed bottom-8 right-8 z-50 rounded-full shadow-lg animate-fade-in"
          aria-label="Наверх"
        >
          <Icon name="ArrowUp" size={20} />
        </Button>
      )}
    </div>
  );
};

export default Index;