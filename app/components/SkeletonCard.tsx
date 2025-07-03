

import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function SkeletonCard() {
  return (
    <Card className="animate-pulse">
      <CardHeader>
        <div className="h-48 w-full bg-secondary rounded-lg"></div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="h-6 w-3/4 bg-secondary rounded"></div>
        <div className="h-4 w-full bg-secondary rounded"></div>
        <div className="h-4 w-5/6 bg-secondary rounded"></div>
      </CardContent>
    </Card>
  );
}