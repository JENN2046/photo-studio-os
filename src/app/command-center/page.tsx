import { SidebarNavigation } from "@/components/layout/SidebarNavigation";
import { TopStatusBar } from "@/components/layout/TopStatusBar";
import { RightOperationsRail } from "@/components/layout/RightOperationsRail";
import { GaugeHeroSection } from "@/components/dashboard/GaugeHeroSection";
import { ProjectExecutionCard } from "@/components/dashboard/ProjectExecutionCard";
import { ActivityTimelineCard } from "@/components/dashboard/ActivityTimelineCard";
import { AIInspectionFeedCard } from "@/components/dashboard/AIInspectionFeedCard";
import { getCommandCenterSnapshot } from "@/data/command-center-service";

export default async function CommandCenterPage() {
  const snapshot = await getCommandCenterSnapshot();

  return (
    <main className="psos-shell">
      <SidebarNavigation active="dashboard" />
      <section className="psos-main">
        <TopStatusBar
          studio={snapshot.studio.name}
          date={snapshot.studio.dateLabel}
          time={snapshot.studio.timeLabel}
          live={snapshot.studio.isLive}
        />
        <GaugeHeroSection gauges={snapshot.gauges} />
        <section className="psos-bottom-grid">
          <ProjectExecutionCard projects={snapshot.projects} />
          <ActivityTimelineCard events={snapshot.timeline} />
          <AIInspectionFeedCard items={snapshot.inspections} />
        </section>
      </section>
      <RightOperationsRail risks={snapshot.risks} approvals={snapshot.approvals} miniStatus={snapshot.miniStatus} />
    </main>
  );
}
