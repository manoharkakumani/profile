import { Card, CardContent } from '@/components/ui/card';

export function SkillCard({ icon: IconComponent, title, skills }) {
  return (
    <Card className="hover-card group">
      <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
        <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
          <IconComponent className="w-8 h-8 text-primary" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-bold tracking-tight">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{skills}</p>
        </div>
      </CardContent>
    </Card>
  );
}