import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

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
            <a href="#services" className="text-foreground hover:text-primary transition">Услуги</a>
            <a href="#cases" className="text-foreground hover:text-primary transition">Кейсы</a>
            <a href="#blog" className="text-foreground hover:text-primary transition">Блог</a>
            <a href="#team" className="text-foreground hover:text-primary transition">Команда</a>
            <a href="#contact" className="text-foreground hover:text-primary transition">Контакты</a>
          </div>
          <Button className="hidden md:flex">
            <Icon name="Mail" className="mr-2" size={16} />
            Связаться
          </Button>
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

      <section id="cases" className="py-20 px-4">
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

      <section id="team" className="py-20 px-4">
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
              <p className="text-sm text-gray-300">
                Агентство технических специалистов email и мессенджер маркетинга
              </p>
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
    </div>
  );
};

export default Index;
