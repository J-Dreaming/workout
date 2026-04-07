import { useState } from "react";

const plan = [
  {
    day: "Monday",
    label: "Chest & Back",
    color: "#4F46E5",
    light: "#EEF2FF",
    icon: "💪",
    focus: "Chest · Back · Full Body Burn",
    style: "Circuit",
    styleDesc: "3 rounds of 4 blocks. Each strength set flows immediately into a plyo blast, then rest.",
    warmup: "3 min — arm circles × 20, band pull-aparts × 15, 20 jumping jacks",
    blocks: [
      {
        lift: { name: "Barbell Bench Press", sets: "3 × 10", tip: "Control descent 2 sec down, drive explosively up" },
        hiit: { name: "Plyo Push-Up Bursts", duration: "30 sec", tip: "Hands leave floor each rep — scale to fast push-ups if needed" },
        rest: "45 sec",
      },
      {
        lift: { name: "Bent-Over Barbell Row", sets: "3 × 10", tip: "Chest proud, elbows drive back — not up" },
        hiit: { name: "Jump Squats", duration: "30 sec", tip: "Land soft with bent knees — protect the joints" },
        rest: "45 sec",
      },
      {
        lift: { name: "Incline Dumbbell Press", sets: "3 × 10", tip: "45° bench, squeeze pecs at top — don't lock out" },
        hiit: { name: "Mountain Climbers", duration: "30 sec", tip: "Drive knees to chest fast — hips stay level" },
        rest: "45 sec",
      },
      {
        lift: { name: "Seated Cable Row", sets: "3 × 12", tip: "Full stretch forward, drive elbows back to ribs" },
        hiit: { name: "Lateral Hop Overs", duration: "30 sec", tip: "Side to side over a dumbbell or line — stay light on feet" },
        rest: "45 sec",
      },
    ],
    core: "Dead bugs × 15 → Plank 30 sec → Repeat × 3",
  },
  {
    day: "Tuesday",
    label: "Legs",
    color: "#059669",
    light: "#ECFDF5",
    icon: "🦵",
    focus: "Quads · Hamstrings · Glutes",
    style: "50/50",
    styleDesc: "Heavy lifting first, then plyometric blast. Legs need more recovery — take the full 60 sec rest.",
    warmup: "3 min — leg swings × 20 each, bodyweight squats × 15, hip circles",
    blocks: [
      {
        lift: { name: "Barbell Back Squat", sets: "4 × 10", tip: "Sit back into heels, knees track toes — go heavy" },
        hiit: { name: "Jump Squats", duration: "30 sec", tip: "Use squat depth, explode up — arms drive overhead" },
        rest: "60 sec",
      },
      {
        lift: { name: "Romanian Deadlift (RDL)", sets: "4 × 10", tip: "Hip hinge — feel hamstring stretch, not your lower back" },
        hiit: { name: "Jump Lunges", duration: "30 sec", tip: "Switch legs mid-air — land soft every time" },
        rest: "60 sec",
      },
      {
        lift: { name: "Bulgarian Split Squat", sets: "3 × 10 each", tip: "Rear foot elevated, front foot far forward to stay upright" },
        hiit: { name: "Skater Hops", duration: "30 sec", tip: "One leg landing, reach opposite hand to foot, load the glute" },
        rest: "60 sec",
      },
      {
        lift: { name: "Leg Press", sets: "3 × 12", tip: "Higher foot = more glutes. Don't lock knees at top." },
        hiit: { name: "Tuck Jumps", duration: "20 sec", tip: "Drive knees to chest — quality over speed" },
        rest: "45 sec",
      },
    ],
    core: "Hanging Knee Raises × 15 → Ab wheel 30 sec (or plank) → Repeat × 3",
  },
  {
    day: "Thursday",
    label: "Shoulders & Arms",
    color: "#DC2626",
    light: "#FEF2F2",
    icon: "🏋️",
    focus: "Delts · Biceps · Triceps",
    style: "Intervals",
    styleDesc: "Alternating between classic lifting and a 30-sec HIIT move. Heart rate stays high the whole time.",
    warmup: "3 min — thoracic rotations, band pull-aparts × 15, light lateral raises × 12",
    blocks: [
      {
        lift: { name: "Dumbbell Shoulder Press", sets: "3 × 10", tip: "Don't lock elbows at top — keep tension on the delt" },
        hiit: { name: "Star Jumps", duration: "30 sec", tip: "Explode arms and legs wide simultaneously — full range" },
        rest: "45 sec",
      },
      {
        lift: { name: "Lateral Raise + Arnold Press", sets: "3 × 12 / 10", tip: "Light on laterals — lead with elbows. Arnold: rotate palms out as you press." },
        hiit: { name: "High Knees", duration: "30 sec", tip: "Drive knees above hip height — pump arms hard" },
        rest: "45 sec",
      },
      {
        lift: { name: "Barbell Bicep Curl", sets: "3 × 10", tip: "Full ROM — all the way down, hard squeeze at top" },
        hiit: { name: "Burpees", duration: "30 sec", tip: "Chest to floor each rep — scale to no-jump if needed" },
        rest: "45 sec",
      },
      {
        lift: { name: "Overhead Tricep Extension", sets: "3 × 12", tip: "EZ bar or rope — elbows stay tight, only forearms move" },
        hiit: { name: "Skaters (Lateral Bounds)", duration: "30 sec", tip: "Low athletic stance, load the outside leg on each landing" },
        rest: "45 sec",
      },
    ],
    core: "Cable crunches × 15 → Bicycle crunches × 20 → Repeat × 3",
  },
  {
    day: "Friday",
    label: "Full Body Plyo",
    color: "#D97706",
    light: "#FFFBEB",
    icon: "🔥",
    focus: "Full Body · Max Burn · End Strong",
    style: "HIIT + Strength",
    styleDesc: "Heavy compounds up top, then pure plyo circuit to close the week. This one leaves a mark.",
    warmup: "3 min — hip hinges × 15, glute bridges × 15, lateral band walks × 20",
    blocks: [
      {
        lift: { name: "Deadlift or RDL", sets: "4 × 8", tip: "Go heavy here — this is your biggest compound move of the week" },
        hiit: { name: "Box Jumps", duration: "30 sec", tip: "Land fully on box with soft knees — step down, don't jump down" },
        rest: "60 sec",
      },
      {
        lift: { name: "Barbell Hip Thrust", sets: "3 × 12", tip: "Back on bench, drive through heels — hard squeeze at top" },
        hiit: { name: "Jump Lunges", duration: "30 sec", tip: "Explosive switch — keep chest tall, land quiet" },
        rest: "45 sec",
      },
      {
        lift: { name: "Walking Lunges (weighted DBs)", sets: "3 × 12 each", tip: "Stay tall — front knee doesn't drift past toes" },
        hiit: { name: "180° Squat Jumps", duration: "30 sec", tip: "Jump, rotate 180° — absorb landing and go right back" },
        rest: "45 sec",
      },
      {
        lift: { name: "Goblet Squat", sets: "3 × 15", tip: "Lighter weight, full depth — this is a burner, not a max lift" },
        hiit: { name: "Plyo Push-Up Bursts", duration: "30 sec", tip: "Chest to floor, explosive press — clap optional" },
        rest: "30 sec",
      },
    ],
    core: "AMRAP 4 min — Burpees × 5 → Tuck Jumps × 8 → Mountain Climbers × 20 → Rest 20 sec",
  },
];

export default function WorkoutPlan() {
  const [activeDay, setActiveDay] = useState(0);
  const [expanded, setExpanded] = useState(null);
  const [showTips, setShowTips] = useState(false);
  const w = plan[activeDay];

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: "#F1F5F9", minHeight: "100vh", paddingBottom: 48 }}>

      {/* Header */}
      <div style={{ background: `linear-gradient(135deg, ${w.color} 0%, ${w.color}BB 100%)`, padding: "22px 20px 18px", color: "white" }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2.5, opacity: 0.75, textTransform: "uppercase", marginBottom: 2 }}>LIIFT4-Style · 4× Week · Mon/Tue/Thu/Fri</div>
        <div style={{ fontSize: 24, fontWeight: 800, lineHeight: 1.2 }}>{w.icon} {w.label}</div>
        <div style={{ fontSize: 13, opacity: 0.8, marginTop: 3 }}>{w.focus}</div>
        <div style={{ marginTop: 12, display: "flex", gap: 8, flexWrap: "wrap" }}>
          <span style={{ background: "rgba(255,255,255,0.25)", border: "1px solid rgba(255,255,255,0.4)", borderRadius: 20, padding: "3px 11px", fontSize: 11, fontWeight: 700, letterSpacing: 0.5 }}>
            {w.style}
          </span>
          <span style={{ background: "rgba(255,255,255,0.15)", borderRadius: 20, padding: "3px 11px", fontSize: 11, fontWeight: 600 }}>30–45 min</span>
          <span style={{ background: "rgba(255,255,255,0.15)", borderRadius: 20, padding: "3px 11px", fontSize: 11, fontWeight: 600 }}>Lift → HIIT → Rest</span>
        </div>
      </div>

      {/* Day Tabs */}
      <div style={{ display: "flex", background: "white", borderBottom: "2px solid #E2E8F0" }}>
        {plan.map((d, i) => (
          <button key={i} onClick={() => { setActiveDay(i); setExpanded(null); }}
            style={{ flex: 1, padding: "10px 2px 8px", border: "none", background: "none", cursor: "pointer",
              borderBottom: i === activeDay ? `3px solid ${d.color}` : "3px solid transparent",
              color: i === activeDay ? d.color : "#94A3B8",
              fontWeight: i === activeDay ? 800 : 500, fontSize: 11, lineHeight: 1.5 }}>
            <div style={{ fontSize: 16 }}>{d.icon}</div>
            <div>{d.day.slice(0, 3)}</div>
          </button>
        ))}
      </div>

      <div style={{ padding: "14px 14px 0" }}>

        {/* Style callout */}
        <div style={{ background: "white", borderLeft: `4px solid ${w.color}`, borderRadius: "0 10px 10px 0", padding: "10px 14px", marginBottom: 12, boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
          <div style={{ fontSize: 10, fontWeight: 800, color: w.color, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 3 }}>{w.style} Format</div>
          <div style={{ fontSize: 12, color: "#475569", lineHeight: 1.5 }}>{w.styleDesc}</div>
        </div>

        {/* Warmup */}
        <div style={{ background: "white", borderRadius: 10, padding: "10px 14px", marginBottom: 12, display: "flex", gap: 10, alignItems: "flex-start", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
          <span style={{ fontSize: 18 }}>🔥</span>
          <div>
            <div style={{ fontSize: 10, fontWeight: 700, color: "#94A3B8", textTransform: "uppercase", letterSpacing: 1 }}>Warm-Up</div>
            <div style={{ fontSize: 12, color: "#374151", marginTop: 2, lineHeight: 1.5 }}>{w.warmup}</div>
          </div>
        </div>

        {/* Blocks */}
        {w.blocks.map((block, i) => (
          <div key={i} onClick={() => setExpanded(expanded === i ? null : i)}
            style={{ background: "white", borderRadius: 12, marginBottom: 10, overflow: "hidden", boxShadow: "0 1px 4px rgba(0,0,0,0.07)", cursor: "pointer" }}>

            {/* Block header bar */}
            <div style={{ background: w.light, padding: "7px 14px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: `1px solid ${w.color}20` }}>
              <span style={{ fontSize: 11, fontWeight: 800, color: w.color, textTransform: "uppercase", letterSpacing: 1 }}>Block {i + 1}</span>
              <span style={{ fontSize: 11, color: "#94A3B8" }}>{expanded === i ? "▲ hide tips" : "▼ form tips"}</span>
            </div>

            <div style={{ padding: "12px 14px 0" }}>

              {/* Lift */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 6 }}>
                <div style={{ background: w.color, color: "white", borderRadius: 7, padding: "4px 9px", fontSize: 11, fontWeight: 800, whiteSpace: "nowrap", marginTop: 2, flexShrink: 0 }}>
                  {block.lift.sets}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#1E293B" }}>{block.lift.name}</div>
                  {expanded === i && <div style={{ fontSize: 12, color: "#64748B", marginTop: 3, lineHeight: 1.4 }}>📌 {block.lift.tip}</div>}
                </div>
              </div>

              {/* Arrow */}
              <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 0 6px 2px" }}>
                <div style={{ width: 16, height: 1.5, background: `${w.color}50`, borderRadius: 2 }} />
                <span style={{ fontSize: 10, fontWeight: 800, color: w.color, textTransform: "uppercase", letterSpacing: 1.5, whiteSpace: "nowrap" }}>↓ immediately into</span>
                <div style={{ flex: 1, height: 1.5, background: `${w.color}50`, borderRadius: 2 }} />
              </div>

              {/* HIIT */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 12 }}>
                <div style={{ background: `${w.color}15`, border: `2px solid ${w.color}`, color: w.color, borderRadius: 7, padding: "4px 9px", fontSize: 11, fontWeight: 800, whiteSpace: "nowrap", marginTop: 2, flexShrink: 0 }}>
                  {block.hiit.duration}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#1E293B" }}>{block.hiit.name}</div>
                  <div style={{ fontSize: 10, fontWeight: 800, color: "#F59E0B", letterSpacing: 1, marginTop: 2 }}>⚡ PLYO BLAST</div>
                  {expanded === i && <div style={{ fontSize: 12, color: "#64748B", marginTop: 3, lineHeight: 1.4 }}>📌 {block.hiit.tip}</div>}
                </div>
              </div>

              {/* Rest */}
              <div style={{ borderTop: "1px solid #F1F5F9", padding: "8px 0", display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ fontSize: 12 }}>⏱</span>
                <span style={{ fontSize: 11, fontWeight: 700, color: "#94A3B8" }}>REST {block.rest} — then repeat block</span>
              </div>
            </div>
          </div>
        ))}

        {/* Core Finisher */}
        <div style={{ background: `linear-gradient(135deg, ${w.color}12, ${w.color}05)`, border: `2px solid ${w.color}30`, borderRadius: 12, padding: "14px", marginBottom: 12 }}>
          <div style={{ fontSize: 10, fontWeight: 800, color: w.color, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 6 }}>🏁 Core Finisher</div>
          <div style={{ fontSize: 13, color: "#374151", fontWeight: 500, lineHeight: 1.5 }}>{w.core}</div>
        </div>

        {/* Formula bar */}
        <div style={{ background: "#0F172A", borderRadius: 12, padding: "12px 16px", marginBottom: 12, display: "flex", justifyContent: "space-around", alignItems: "center" }}>
          {["LIFT", "→", "HIIT", "→", "REST", "→", "REPEAT"].map((word, i) => (
            <span key={i} style={{
              fontSize: i % 2 === 0 ? 10 : 11,
              fontWeight: i % 2 === 0 ? 800 : 400,
              color: i % 2 === 0 ? w.color : "#475569",
              letterSpacing: i % 2 === 0 ? 1.5 : 0,
              textTransform: "uppercase"
            }}>{word}</span>
          ))}
        </div>

        {/* Tips Toggle */}
        <button onClick={() => setShowTips(!showTips)}
          style={{ width: "100%", background: "white", border: "1px solid #E2E8F0", borderRadius: 10, padding: "11px", fontSize: 13, fontWeight: 700, color: "#374151", cursor: "pointer", marginBottom: 10 }}>
          {showTips ? "▲ Hide" : "▼ Show"} Recomp & Nutrition Tips
        </button>

        {showTips && (
          <div style={{ background: "white", borderRadius: 12, padding: "14px", marginBottom: 16 }}>
            {[
              { icon: "⚖️", text: "Eat near maintenance on workout days, ~200–300 cal deficit on rest days. This drives recomp without stalling muscle." },
              { icon: "🥩", text: "Target 180–200g of protein daily. At 220 lbs, protein is your most important variable — it protects muscle while burning fat." },
              { icon: "⚡", text: "The plyo blasts are where the fat burn happens. Push them — that's the whole LIIFT formula working." },
              { icon: "📈", text: "Track your lifts. When you hit the top of the rep range with clean form two sessions in a row, add weight." },
              { icon: "😴", text: "7–8 hrs of sleep. Muscle is built during recovery, not during the workout." },
              { icon: "🚶", text: "7,000–10,000 steps on rest days. Low effort, high fat-burn payoff over weeks." },
            ].map((t, i, arr) => (
              <div key={i} style={{ display: "flex", gap: 10, marginBottom: i < arr.length - 1 ? 12 : 0, paddingBottom: i < arr.length - 1 ? 12 : 0, borderBottom: i < arr.length - 1 ? "1px solid #F1F5F9" : "none" }}>
                <span style={{ fontSize: 18 }}>{t.icon}</span>
                <span style={{ fontSize: 12, color: "#374151", lineHeight: 1.5 }}>{t.text}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
