// AP World History: Modern Exam Simulator — App.jsx
import React, { useState, useEffect, useRef } from "react";
import ALL_TESTS from "./data/tests.js";
import { renderVisual } from "./figures/SimFigures.jsx";

// ── Brand System (matches ap-exam-simulator-hub) ───────────────────────────
const C = {
  bg:     "#060B14",
  mid:    "#0D1A2D",
  dark:   "#081022",
  g:      "#00F5A0",
  b:      "#38BDF8",
  r:      "#FF4757",
  gold:   "#FFD60A",
  white:  "#FFFFFF",
  muted:  "#94A3B8",
  border: "#1E293B",
};
const font = "'DM Sans', 'Segoe UI', system-ui, sans-serif";
const gradient = "linear-gradient(135deg, #060b14 0%, #0d1a2d 50%, #081022 100%)";

function useMobile() {
  const [mob, setMob] = useState(()=>window.innerWidth<640);
  useEffect(()=>{
    const fn=()=>setMob(window.innerWidth<640);
    window.addEventListener("resize",fn);
    return ()=>window.removeEventListener("resize",fn);
  },[]);
  return mob;
}

// ── Inject Google Font + global styles ────────────────────────────────────
if (typeof document !== "undefined" && !document.getElementById("ap-wh-styles")) {
  const lk = document.createElement("link");
  lk.rel = "stylesheet";
  lk.href = "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap";
  document.head.appendChild(lk);
  const st = document.createElement("style");
  st.id = "ap-wh-styles";
  st.textContent = `
    *, *::before, *::after { box-sizing: border-box; }
    body { margin: 0; background: #060b14; }
    textarea { outline: none !important; }
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: #0d1a2d; }
    ::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 3px; }
    @keyframes pulse-dot { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(.7)} }
    @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
    @keyframes spin { to{transform:rotate(360deg)} }
    @keyframes blink { 0%,100%{opacity:1} 50%{opacity:.4} }
  `;
  document.head.appendChild(st);
}

// ── Shared constants ──────────────────────────────────────────────────────
const noiseBg = {
  position:"fixed",inset:0,zIndex:0,opacity:0.02,
  backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
  backgroundSize:"200px",pointerEvents:"none"
};

const backBtn = {
  background:"rgba(255,255,255,0.08)",color:C.muted,
  border:"1px solid rgba(255,255,255,0.12)",borderRadius:8,
  padding:"6px 14px",cursor:"pointer",fontSize:13,
  fontFamily:font,fontWeight:600
};

// ── Timer ─────────────────────────────────────────────────────────────────
function Timer({ totalSeconds }) {
  const [remaining, setRemaining] = useState(totalSeconds);
  const ref = useRef();
  useEffect(() => {
    ref.current = setInterval(() => setRemaining(p => p > 0 ? p-1 : 0), 1000);
    return () => clearInterval(ref.current);
  }, []);
  const pct = remaining / totalSeconds;
  const col = pct < 0.25 ? C.r : pct < 0.5 ? "#FB923C" : C.g;
  const bg  = pct < 0.25 ? "rgba(255,71,87,0.12)" : pct < 0.5 ? "rgba(251,146,60,0.12)" : "rgba(0,245,160,0.1)";
  const m = Math.floor(remaining/60).toString().padStart(2,"0");
  const s = (remaining%60).toString().padStart(2,"0");
  return (
    <div style={{background:bg,border:`1px solid ${col}40`,borderRadius:8,padding:"6px 14px",
      fontFamily:font,fontWeight:700,fontSize:"0.95rem",color:col,
      display:"flex",alignItems:"center",gap:6,
      animation:pct<0.25?"blink 1.2s ease infinite":"none"}}>
      ⏱ {m}:{s}
    </div>
  );
}

// ── FeedbackBox ───────────────────────────────────────────────────────────
function FeedbackBox({ text, loading }) {
  return (
    <div style={{marginTop:10,padding:"14px 16px",
      background:"rgba(56,189,248,0.07)",border:"1px solid rgba(56,189,248,0.2)",
      borderRadius:8,fontSize:13,lineHeight:1.65,color:"rgba(255,255,255,0.8)"}}>
      <div style={{fontSize:10,fontWeight:700,letterSpacing:"0.1em",
        textTransform:"uppercase",color:C.b,marginBottom:6,display:"flex",alignItems:"center",gap:8}}>
        {loading
          ? <><span style={{width:10,height:10,borderRadius:"50%",border:`2px solid ${C.b}`,
              borderTopColor:"transparent",animation:"spin 0.8s linear infinite",display:"inline-block"}}/> Generating AI Feedback...</>
          : <>✦ AI Feedback</>}
      </div>
      {!loading && text}
    </div>
  );
}

// ── AP Score Conversion ───────────────────────────────────────────────────
function calcAPScore(mcCorrect, saqTotal, dbqTotal, leqTotal) {
  const composite = (mcCorrect / 55 * 40) + (saqTotal / 9 * 20) + (dbqTotal / 7 * 25) + (leqTotal / 6 * 15);
  if (composite >= 75) return 5;
  if (composite >= 60) return 4;
  if (composite >= 45) return 3;
  if (composite >= 25) return 2;
  return 1;
}

function calcAPScoreFRQOnly(frqEarned, frqPossible) {
  if (!frqPossible) return 1;
  const pct = frqEarned / frqPossible;
  if (pct >= 0.82) return 5;
  if (pct >= 0.67) return 4;
  if (pct >= 0.50) return 3;
  if (pct >= 0.33) return 2;
  return 1;
}

const AP_SCORE_LABELS = {
  5: "Extremely Well Qualified",
  4: "Well Qualified",
  3: "Qualified",
  2: "Possibly Qualified",
  1: "No Recommendation",
};

const AP_SCORE_COLORS = {
  5: C.g,
  4: "#4ADE80",
  3: C.b,
  2: "#FB923C",
  1: C.r,
};

// ── Subject Config ────────────────────────────────────────────────────────
const SUBJECT_CONFIG = {
  name: "AP World History: Modern",
  shortName: "AP World History",
  emoji: "🌍",
  hasAudio: false,
  hasConversation: false,
  mcCount: 55,
  mcTime: 55,
  mcWeight: 40,
  saqCount: 3,
  saqTime: 40,
  saqWeight: 20,
  dbqCount: 1,
  dbqTime: 60,
  dbqWeight: 25,
  leqCount: 1,
  leqTime: 40,
  leqWeight: 15,
  totalTime: "3 hours 15 minutes",
};

// ── Source Display for SAQ / DBQ documents ─────────────────────────────────
function SourceDisplay({ sources, label }) {
  const [expanded, setExpanded] = useState({});
  return (
    <div style={{marginBottom:20}}>
      <div style={{fontSize:11,fontWeight:700,letterSpacing:"0.1em",
        textTransform:"uppercase",color:C.b,marginBottom:12}}>{label || "📚 Sources"}</div>
      {sources.map((src,i)=>(
        <div key={i} style={{background:C.mid,border:`1px solid ${C.border}`,
          borderRadius:10,marginBottom:8,overflow:"hidden"}}>
          <button onClick={()=>setExpanded(p=>({...p,[i]:!p[i]}))}
            style={{width:"100%",display:"flex",alignItems:"center",gap:12,
              padding:"12px 16px",background:"none",border:"none",cursor:"pointer",
              fontFamily:font,color:C.white,textAlign:"left"}}>
            <span style={{background:"rgba(56,189,248,0.15)",color:C.b,
              borderRadius:6,padding:"2px 8px",fontSize:11,fontWeight:800,flexShrink:0}}>
              {src.label}
            </span>
            <span style={{flex:1,fontSize:13,fontWeight:600}}>{src.title || src.source}</span>
            {src.figureId && <span style={{fontSize:10,color:C.gold,fontWeight:700,
              background:"rgba(255,214,10,0.12)",padding:"2px 8px",borderRadius:4}}>VISUAL</span>}
            <span style={{color:C.muted,fontSize:14}}>{expanded[i]?"▾":"▸"}</span>
          </button>
          {expanded[i] && (
            <div style={{padding:"0 16px 14px",fontSize:13,lineHeight:1.75,
              color:"rgba(255,255,255,0.78)",
              borderTop:`1px solid ${C.border}`}}>
              <div style={{padding:"12px 0"}}>
                {src.description && (
                  <div style={{fontSize:11,color:C.muted,marginBottom:8,fontStyle:"italic"}}>
                    {src.description}
                  </div>
                )}
                {src.figureId && renderVisual(src.figureId)}
                {!src.figureId && src.text && (
                  <div style={{whiteSpace:"pre-wrap"}}>{src.text}</div>
                )}
                {src.figureId && src.text && !src.text.includes("See ") && (
                  <div style={{whiteSpace:"pre-wrap",marginTop:10}}>{src.text}</div>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ── Document Display for DBQ ──────────────────────────────────────────────
function DocumentDisplay({ documents }) {
  const [expanded, setExpanded] = useState({});
  return (
    <div style={{marginBottom:20}}>
      <div style={{fontSize:11,fontWeight:700,letterSpacing:"0.1em",
        textTransform:"uppercase",color:C.b,marginBottom:12}}>📄 Documents</div>
      {documents.map((doc,i)=>(
        <div key={i} style={{background:C.mid,border:`1px solid ${C.border}`,
          borderRadius:10,marginBottom:8,overflow:"hidden"}}>
          <button onClick={()=>setExpanded(p=>({...p,[i]:!p[i]}))}
            style={{width:"100%",display:"flex",alignItems:"center",gap:12,
              padding:"12px 16px",background:"none",border:"none",cursor:"pointer",
              fontFamily:font,color:C.white,textAlign:"left"}}>
            <span style={{background:"rgba(56,189,248,0.15)",color:C.b,
              borderRadius:6,padding:"2px 8px",fontSize:11,fontWeight:800,flexShrink:0}}>
              Doc {doc.num}
            </span>
            <span style={{flex:1,fontSize:13,fontWeight:600}}>{doc.source}</span>
            {doc.figureId && <span style={{fontSize:10,color:C.gold,fontWeight:700,
              background:"rgba(255,214,10,0.12)",padding:"2px 8px",borderRadius:4}}>VISUAL</span>}
            <span style={{color:C.muted,fontSize:14}}>{expanded[i]?"▾":"▸"}</span>
          </button>
          {expanded[i] && (
            <div style={{padding:"0 16px 14px",fontSize:13,lineHeight:1.75,
              color:"rgba(255,255,255,0.78)",
              borderTop:`1px solid ${C.border}`}}>
              <div style={{padding:"12px 0"}}>
                {doc.figureId && renderVisual(doc.figureId)}
                {doc.text && (
                  <div style={{whiteSpace:"pre-wrap",marginTop:doc.figureId?10:0}}>{doc.text}</div>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ── SAQ Task Component ────────────────────────────────────────────────────
function SAQTask({ q, answers, onAnswer }) {
  return (
    <div>
      {q.sources && q.sources.length > 0 && (
        <SourceDisplay sources={q.sources} label={`📚 ${q.stimulusType === "secondary" ? "Secondary Sources" : q.stimulusType === "primary" ? "Primary Source" : "Sources"}`}/>
      )}
      {q.parts.map(part => (
        <div key={part.letter} style={{background:C.mid,border:`1px solid ${C.border}`,borderRadius:12,
          padding:"20px 24px",marginBottom:16}}>
          <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:12}}>
            <span style={{width:28,height:28,borderRadius:6,
              background:"rgba(0,245,160,0.12)",border:`1.5px solid ${C.g}`,
              display:"flex",alignItems:"center",justifyContent:"center",
              fontWeight:800,fontSize:13,color:C.g,flexShrink:0}}>{part.letter}</span>
            <span style={{fontSize:11,fontWeight:700,letterSpacing:"0.1em",
              textTransform:"uppercase",color:C.muted}}>Part {part.letter} (1 point)</span>
          </div>
          <div style={{fontSize:"0.92rem",lineHeight:1.75,color:"rgba(255,255,255,0.88)",
            marginBottom:14,whiteSpace:"pre-wrap"}}>{part.prompt}</div>
          <textarea
            value={(answers && answers[part.letter]) || ""}
            onChange={e=>onAnswer(part.letter, e.target.value)}
            placeholder={`Write your response to Part ${part.letter} here...`}
            style={{width:"100%",minHeight:120,padding:14,background:"rgba(255,255,255,0.04)",
              border:`1px solid ${C.border}`,borderRadius:8,fontSize:15,fontFamily:font,
              lineHeight:1.75,resize:"vertical",color:C.white,boxSizing:"border-box"}}/>
          <div style={{display:"flex",justifyContent:"flex-end",marginTop:6}}>
            <span style={{fontSize:12,color:C.muted}}>
              {((answers && answers[part.letter]) || "").split(/\s+/).filter(Boolean).length} words
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── DBQ Task Component ────────────────────────────────────────────────────
function DBQTask({ q, answer, onAnswer }) {
  return (
    <div>
      <div style={{background:C.mid,border:`1px solid ${C.border}`,borderRadius:12,
        padding:"20px 24px",marginBottom:20}}>
        <div style={{fontSize:11,fontWeight:700,letterSpacing:"0.1em",
          textTransform:"uppercase",color:C.g,marginBottom:10}}>Document-Based Question Prompt</div>
        <div style={{fontSize:"0.92rem",lineHeight:1.75,color:"rgba(255,255,255,0.88)",
          whiteSpace:"pre-wrap"}}>{q.prompt}</div>
      </div>
      <div style={{background:"rgba(255,214,10,0.06)",border:"1px solid rgba(255,214,10,0.15)",
        borderRadius:10,padding:"14px 18px",marginBottom:20}}>
        <div style={{fontSize:11,fontWeight:700,letterSpacing:"0.1em",
          textTransform:"uppercase",color:C.gold,marginBottom:8}}>DBQ Instructions</div>
        <ul style={{margin:0,paddingLeft:18,fontSize:13,color:"rgba(255,255,255,0.72)",lineHeight:1.75}}>
          <li>Respond to the prompt with a historically defensible <strong style={{color:C.white}}>thesis or claim</strong></li>
          <li>Describe a broader <strong style={{color:C.white}}>historical context</strong> relevant to the prompt</li>
          <li>Support your argument with at least <strong style={{color:C.white}}>four documents</strong></li>
          <li>Use at least <strong style={{color:C.white}}>one piece of outside evidence</strong> beyond the documents</li>
          <li>For at least <strong style={{color:C.white}}>two documents</strong>, explain the significance of point of view, purpose, historical situation, or audience (sourcing)</li>
          <li>Demonstrate a <strong style={{color:C.white}}>complex understanding</strong> of the historical development</li>
        </ul>
      </div>
      <DocumentDisplay documents={q.documents}/>
      <div style={{background:C.mid,border:`1px solid ${C.border}`,borderRadius:12,padding:20}}>
        <label style={{display:"block",fontSize:13,fontWeight:700,color:C.muted,marginBottom:10}}>
          Your DBQ Essay <span style={{fontWeight:400}}>({q.points} points)</span>
        </label>
        <textarea value={answer||""} onChange={e=>onAnswer(e.target.value)}
          placeholder="Write your document-based question essay here. Remember to use at least four documents, provide outside evidence, and demonstrate complex understanding..."
          style={{width:"100%",minHeight:400,padding:14,background:"rgba(255,255,255,0.04)",
            border:`1px solid ${C.border}`,borderRadius:8,fontSize:15,fontFamily:font,
            lineHeight:1.75,resize:"vertical",color:C.white,boxSizing:"border-box"}}/>
        <div style={{display:"flex",justifyContent:"flex-end",marginTop:6}}>
          <span style={{fontSize:12,color:C.muted}}>
            {(answer||"").split(/\s+/).filter(Boolean).length} words
          </span>
        </div>
      </div>
    </div>
  );
}

// ── LEQ Task Component ────────────────────────────────────────────────────
function LEQTask({ q, selectedOption, onSelectOption, answer, onAnswer }) {
  return (
    <div>
      <div style={{background:C.mid,border:`1px solid ${C.border}`,borderRadius:12,
        padding:"20px 24px",marginBottom:20}}>
        <div style={{fontSize:11,fontWeight:700,letterSpacing:"0.1em",
          textTransform:"uppercase",color:C.g,marginBottom:14}}>Choose ONE of the following prompts</div>
        <div style={{display:"flex",flexDirection:"column",gap:10}}>
          {q.options.map(opt=>{
            const selected = selectedOption === opt.id;
            return (
              <button key={opt.id} onClick={()=>onSelectOption(opt.id)}
                style={{display:"flex",alignItems:"flex-start",gap:14,
                  background:selected?"rgba(0,245,160,0.12)":"rgba(255,255,255,0.03)",
                  border:`1.5px solid ${selected?C.g:"rgba(255,255,255,0.08)"}`,
                  borderRadius:10,padding:"14px 18px",cursor:"pointer",
                  textAlign:"left",transition:"all 0.15s",width:"100%",
                  boxShadow:selected?`0 0 16px rgba(0,245,160,0.15)`:"none"}}>
                <span style={{width:28,height:28,borderRadius:"50%",flexShrink:0,
                  background:selected?C.g:"rgba(255,255,255,0.07)",
                  border:`1.5px solid ${selected?C.g:"rgba(255,255,255,0.15)"}`,
                  display:"flex",alignItems:"center",justifyContent:"center",
                  fontWeight:800,fontSize:13,
                  color:selected?C.bg:C.muted,transition:"all 0.15s"}}>
                  {opt.id}
                </span>
                <span style={{fontSize:"0.94rem",lineHeight:1.65,
                  color:selected?"rgba(255,255,255,0.98)":"rgba(255,255,255,0.78)",
                  fontWeight:selected?600:400,paddingTop:2}}>{opt.prompt}</span>
              </button>
            );
          })}
        </div>
      </div>
      <div style={{background:"rgba(255,214,10,0.06)",border:"1px solid rgba(255,214,10,0.15)",
        borderRadius:10,padding:"14px 18px",marginBottom:20}}>
        <div style={{fontSize:11,fontWeight:700,letterSpacing:"0.1em",
          textTransform:"uppercase",color:C.gold,marginBottom:8}}>LEQ Instructions</div>
        <ul style={{margin:0,paddingLeft:18,fontSize:13,color:"rgba(255,255,255,0.72)",lineHeight:1.75}}>
          <li>Respond to the prompt with a historically defensible <strong style={{color:C.white}}>thesis or claim</strong></li>
          <li>Describe a broader <strong style={{color:C.white}}>historical context</strong> relevant to the prompt</li>
          <li>Support your argument with <strong style={{color:C.white}}>specific and relevant evidence</strong></li>
          <li>Use <strong style={{color:C.white}}>historical reasoning</strong> (comparison, causation, or continuity and change over time) to frame or structure your argument</li>
          <li>Demonstrate a <strong style={{color:C.white}}>complex understanding</strong> of the historical development</li>
        </ul>
      </div>
      <div style={{background:C.mid,border:`1px solid ${C.border}`,borderRadius:12,padding:20}}>
        <label style={{display:"block",fontSize:13,fontWeight:700,color:C.muted,marginBottom:10}}>
          Your Long Essay <span style={{fontWeight:400}}>({q.points} points)</span>
        </label>
        <textarea value={answer||""} onChange={e=>onAnswer(e.target.value)}
          placeholder="Write your long essay here. Present a thesis, provide historical context, use specific evidence, and demonstrate complex understanding..."
          style={{width:"100%",minHeight:400,padding:14,background:"rgba(255,255,255,0.04)",
            border:`1px solid ${C.border}`,borderRadius:8,fontSize:15,fontFamily:font,
            lineHeight:1.75,resize:"vertical",color:C.white,boxSizing:"border-box"}}/>
        <div style={{display:"flex",justifyContent:"flex-end",marginTop:6}}>
          <span style={{fontSize:12,color:C.muted}}>
            {(answer||"").split(/\s+/).filter(Boolean).length} words
          </span>
        </div>
      </div>
    </div>
  );
}

// ── Landing Screen ────────────────────────────────────────────────────────
function LandingScreen({ onSelect }) {
  const mob = useMobile();
  const [screen, setScreen] = useState("landing");

  const sectionIRows = [
    { section:"Section I, Part A", type:"Multiple Choice", qs:"55 Qs", time:"55 min", pct:"40%", note:"Stimulus-based sets of 3–4 per source" },
  ];

  const sectionIIRows = [
    { section:"Section I, Part B", type:"Short Answer Questions", qs:"3 Qs", time:"40 min", pct:"20%" },
    { section:"Section II", type:"Document-Based Question", qs:"1 Q (7 docs)", time:"60 min", pct:"25%" },
    { section:"Section II", type:"Long Essay Question", qs:"1 Q (choice of 3)", time:"40 min", pct:"15%" },
  ];

  const skills = [
    { n:1, name:"Historical Thinking", desc:"Analyze historical developments using evidence and reasoning across global contexts" },
    { n:2, name:"Document Analysis", desc:"Evaluate primary and secondary sources from diverse civilizations and time periods" },
    { n:3, name:"Argumentation", desc:"Construct a defensible thesis supported by specific evidence from world history" },
    { n:4, name:"Contextualization", desc:"Connect events to broader regional, national, or global processes across time periods" },
  ];

  const officialTests = ALL_TESTS.filter(t => t.badge === "Official")
    .sort((a,b) => b.year - a.year || a.label.localeCompare(b.label));
  const simTests = ALL_TESTS.filter(t => t.badge !== "Official");

  // ── Home: Official Exams ──
  if (screen === "home-official") {
    return (
      <div style={{minHeight:"100vh",background:gradient,fontFamily:font,color:C.white}}>
        <div style={{position:"fixed",...noiseBg}}/>
        <div style={{position:"relative",zIndex:1}}>
          <div style={{borderBottom:`1px solid rgba(255,255,255,0.06)`,padding:mob?"10px 12px":"14px 32px",
            display:"flex",alignItems:"center",gap:12}}>
            <button style={backBtn} onClick={()=>setScreen("landing")}>&larr; Back</button>
            <span style={{color:"#334155",fontSize:13}}>Official AP Exams</span>
          </div>
          <div style={{maxWidth:680,margin:"0 auto",padding:mob?"32px 16px 60px":"52px 24px 80px"}}>
            <div style={{marginBottom:36}}>
              <span style={{background:"rgba(255,71,87,0.15)",color:C.r,
                border:"1px solid rgba(255,71,87,0.3)",borderRadius:6,
                padding:"3px 12px",fontSize:11,fontWeight:700,
                textTransform:"uppercase",letterSpacing:"0.08em"}}>Official College Board</span>
              <h1 style={{fontSize:mob?"1.7rem":"2.4rem",fontWeight:900,margin:"16px 0 10px",
                letterSpacing:"-0.03em"}}>Official AP Exams</h1>
              <p style={{color:"#64748b",fontSize:"0.95rem",lineHeight:1.65,margin:0}}>
                Authentic free-response questions from the College Board.
                Practice with real exam prompts and score with AI feedback calibrated to AP rubrics.
              </p>
            </div>

            <div style={{background:"rgba(255,214,10,0.08)",border:"1px solid rgba(255,214,10,0.2)",
              borderRadius:12,padding:"14px 18px",marginBottom:36,display:"flex",gap:12,alignItems:"flex-start"}}>
              <span style={{fontSize:"1.1rem",flexShrink:0}}>&#9888;&#65039;</span>
              <div style={{fontSize:13,color:"#94a3b8",lineHeight:1.65}}>
                <strong style={{color:C.gold}}>FRQ only.</strong> The College Board does not publicly
                release Section I (Multiple Choice) questions. These tests cover the full free-response section only (SAQ + DBQ + LEQ).
              </div>
            </div>

            <div style={{display:"flex",flexDirection:"column",gap:28}}>
              {[...new Set(officialTests.map(t => t.year))].sort((a,b) => b - a).map(year => {
                const yearTests = officialTests.filter(t => t.year === year);
                return (
                  <div key={year}>
                    <div style={{fontSize:11,textTransform:"uppercase",letterSpacing:"0.12em",
                      color:"#475569",fontWeight:700,marginBottom:12,
                      display:"flex",alignItems:"center",gap:10}}>
                      <span style={{color:C.r}}>{year}</span>
                      <span style={{flex:1,height:1,background:"rgba(255,255,255,0.06)"}}/>
                    </div>
                    <div style={{display:"flex",flexDirection:"column",gap:10}}>
                      {yearTests.map(test => (
                        <div key={test.id}
                          onClick={()=>onSelect(test)}
                          style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,71,87,0.2)",
                            borderRadius:16,padding:mob?"12px 12px":"20px 24px",cursor:"pointer",
                            display:"flex",alignItems:"center",gap:20,transition:"all 0.2s"}}
                          onMouseEnter={e=>{e.currentTarget.style.background="rgba(255,71,87,0.1)";e.currentTarget.style.borderColor="rgba(255,71,87,0.5)";e.currentTarget.style.transform="translateY(-2px)";}}
                          onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,0.03)";e.currentTarget.style.borderColor="rgba(255,71,87,0.2)";e.currentTarget.style.transform="translateY(0)";}}>
                          <div style={{width:52,height:52,borderRadius:12,
                            background:"rgba(255,71,87,0.15)",border:"1px solid rgba(255,71,87,0.3)",
                            display:"flex",alignItems:"center",justifyContent:"center",
                            fontSize:11,fontWeight:800,color:C.r,flexShrink:0,textAlign:"center",lineHeight:1.2}}>
                            {`SET\n${test.label.match(/Set (\d+)/)?.[1] ?? "1"}`}
                          </div>
                          <div style={{flex:1}}>
                            <div style={{fontWeight:700,fontSize:"1rem",marginBottom:4}}>{test.label}</div>
                            <div style={{color:"#475569",fontSize:13}}>SAQ + DBQ + LEQ &middot; AI scoring &middot; ~140 minutes &middot; Up to 22 points</div>
                          </div>
                          <div style={{color:"#334155",fontSize:"1.2rem"}}>&rarr;</div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── Home: Simulations ──
  if (screen === "home-sim") {
    return (
      <div style={{minHeight:"100vh",background:gradient,fontFamily:font,color:C.white}}>
        <div style={{position:"fixed",...noiseBg}}/>
        <div style={{position:"relative",zIndex:1}}>
          <div style={{borderBottom:`1px solid rgba(255,255,255,0.06)`,padding:mob?"10px 12px":"14px 32px",
            display:"flex",alignItems:"center",gap:12}}>
            <button style={backBtn} onClick={()=>setScreen("landing")}>&larr; Back</button>
            <span style={{color:"#334155",fontSize:13}}>Practice Simulations</span>
          </div>
          <div style={{maxWidth:800,margin:"0 auto",padding:mob?"32px 16px 60px":"52px 24px 80px"}}>
            <div style={{marginBottom:36}}>
              <span style={{background:"rgba(0,245,160,0.12)",color:C.g,
                border:"1px solid rgba(0,245,160,0.25)",borderRadius:6,
                padding:"3px 12px",fontSize:11,fontWeight:700,
                textTransform:"uppercase",letterSpacing:"0.08em"}}>AI Practice &middot; Not Official</span>
              <h1 style={{fontSize:mob?"1.7rem":"2.4rem",fontWeight:900,margin:"16px 0 10px",
                letterSpacing:"-0.03em"}}>Practice Simulations</h1>
              <p style={{color:"#64748b",fontSize:"0.95rem",lineHeight:1.65,margin:"0 0 20px"}}>
                Full-length AP World History: Modern exams replicating the official format &mdash;
                <strong style={{color:"#94a3b8"}}> Section I: 55 Multiple Choice (55 min)</strong> followed by
                <strong style={{color:"#94a3b8"}}> Section II: SAQ + DBQ + LEQ (140 min)</strong>.
                AI scoring calibrated to College Board rubrics.
              </p>
              <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
                {[["🔢","55 MC · 55 min"],["📝","3 SAQs"],["📚","DBQ (7 docs)"],["💡","LEQ (choice of 3)"]].map(([icon,label])=>(
                  <span key={label} style={{background:"rgba(255,255,255,0.05)",
                    border:"1px solid rgba(255,255,255,0.08)",borderRadius:8,
                    padding:"4px 12px",fontSize:12,color:"#94a3b8"}}>{icon} {label}</span>
                ))}
              </div>
            </div>

            <div style={{background:"rgba(56,189,248,0.06)",border:"1px solid rgba(56,189,248,0.15)",
              borderRadius:12,padding:"12px 18px",marginBottom:36,fontSize:13,
              color:"#64748b",lineHeight:1.65}}>
              <strong style={{color:C.b}}>Practice only.</strong> These simulations are AI-generated materials
              for study purposes. Not affiliated with, endorsed by, or representative of official College Board AP exam content.
            </div>

            <div style={{display:"flex",flexDirection:"column",gap:14}}>
              {simTests.map((test,i)=>(
                <div key={test.id}
                  onClick={()=>onSelect(test)}
                  style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(0,245,160,0.15)",
                    borderRadius:16,padding:"22px 24px",cursor:"pointer",
                    display:"flex",alignItems:"center",gap:20,transition:"all 0.2s"}}
                  onMouseEnter={e=>{e.currentTarget.style.background="rgba(0,245,160,0.07)";e.currentTarget.style.borderColor="rgba(0,245,160,0.35)";e.currentTarget.style.transform="translateY(-4px)";}}
                  onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,0.03)";e.currentTarget.style.borderColor="rgba(0,245,160,0.15)";e.currentTarget.style.transform="translateY(0)";}}>
                  <div style={{width:60,height:60,borderRadius:14,
                    background:"rgba(0,245,160,0.1)",border:"1px solid rgba(0,245,160,0.25)",
                    display:"flex",alignItems:"center",justifyContent:"center",
                    fontSize:13,fontWeight:800,color:C.g,flexShrink:0}}>
                    SIM {i+1}
                  </div>
                  <div style={{flex:1}}>
                    <div style={{fontWeight:700,fontSize:"1rem",marginBottom:4}}>{test.label}</div>
                    <div style={{color:"#475569",fontSize:13}}>{test.description}</div>
                  </div>
                  <div style={{color:"#334155",fontSize:"1.2rem"}}>&rarr;</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── Main Landing ──
  return (
    <div style={{minHeight:"100vh",background:gradient,fontFamily:font,color:C.white}}>
      <div style={{position:"fixed",...noiseBg}}/>
      <div style={{position:"relative",zIndex:1}}>
        {/* Nav */}
        <div style={{borderBottom:`1px solid rgba(255,255,255,0.06)`,padding:mob?"10px 12px":"14px 32px",
          display:"flex",alignItems:"center",gap:10}}>
          <span style={{fontSize:"1.1rem"}}>{SUBJECT_CONFIG.emoji}</span>
          <span style={{fontWeight:700,fontSize:14,color:"#e2e8f0"}}>{SUBJECT_CONFIG.shortName}</span>
          <span style={{color:"#334155",fontSize:13,marginLeft:4}}>/ Exam Simulator</span>
        </div>

        <div style={{maxWidth:820,margin:"0 auto",padding:mob?"32px 16px 60px":"52px 24px 80px"}}>

          {/* Hero */}
          <div style={{textAlign:"center",marginBottom:64}}>
            <div style={{marginBottom:20}}>
              <span style={{display:"inline-flex",alignItems:"center",gap:8,
                background:"rgba(255,255,255,0.07)",border:"1px solid rgba(255,255,255,0.12)",
                borderRadius:100,padding:"5px 16px",fontSize:13,color:"#94a3b8"}}>
                {SUBJECT_CONFIG.emoji} {SUBJECT_CONFIG.name}
              </span>
            </div>
            <h1 style={{fontSize:mob?"1.8rem":"clamp(2rem,5vw,3.2rem)",fontWeight:900,margin:"0 0 16px",
              lineHeight:1.1,letterSpacing:"-0.03em"}}>
              Master the Full AP World History Exam.<br/>
              <span style={{background:`linear-gradient(90deg,${C.g},${C.b})`,
                WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>
                Earn your 5.
              </span>
            </h1>
            <p style={{color:"#64748b",fontSize:"1rem",maxWidth:480,margin:"0 auto 28px",lineHeight:1.7}}>
              Practice with AP World History: Modern questions &mdash; <strong style={{color:"#94a3b8"}}>55 Multiple Choice</strong> + <strong style={{color:"#94a3b8"}}>SAQ + DBQ + LEQ</strong> &mdash;
              with instant AI scoring calibrated to College Board rubrics.
            </p>
            <div style={{display:"flex",gap:8,justifyContent:"center",flexWrap:"wrap"}}>
              {["🔢 55 MC questions","📝 SAQ + DBQ + LEQ","🤖 AI scoring","📄 PDF Report"].map(t=>(
                <span key={t} style={{display:"inline-flex",alignItems:"center",gap:6,
                  background:"rgba(255,255,255,0.07)",border:"1px solid rgba(255,255,255,0.12)",
                  borderRadius:100,padding:"4px 14px",fontSize:12,color:"#94a3b8"}}>{t}</span>
              ))}
            </div>
          </div>

          {/* Exam at a glance */}
          <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.07)",
            borderRadius:18,padding:mob?"16px 14px":"28px 32px",marginBottom:32}}>
            <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:24}}>
              <div style={{width:3,height:22,background:C.g,borderRadius:2}}/>
              <span style={{fontWeight:700,fontSize:12,textTransform:"uppercase",
                letterSpacing:"0.1em",color:"#94a3b8"}}>Full Exam Structure &mdash; At a Glance</span>
              <span style={{marginLeft:"auto",background:"rgba(255,214,10,0.12)",color:C.gold,
                border:"1px solid rgba(255,214,10,0.25)",borderRadius:6,
                padding:"2px 10px",fontSize:11,fontWeight:600}}>{SUBJECT_CONFIG.totalTime} &middot; 2 Sections</span>
            </div>

            {/* Section I block */}
            <div style={{borderRadius:12,border:"1px solid rgba(56,189,248,0.2)",
              background:"rgba(56,189,248,0.04)",marginBottom:16,overflow:"hidden"}}>
              <div style={{padding:"12px 18px",borderBottom:"1px solid rgba(56,189,248,0.15)",
                display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:8}}>
                <div>
                  <span style={{fontWeight:800,fontSize:14,color:C.b}}>Section I, Part A &mdash; Multiple Choice</span>
                  <span style={{fontSize:12,color:"#64748b",marginLeft:12}}>55 Questions &middot; 55 Minutes</span>
                </div>
                <span style={{background:"rgba(56,189,248,0.15)",color:C.b,
                  border:"1px solid rgba(56,189,248,0.3)",borderRadius:20,
                  padding:"3px 12px",fontSize:12,fontWeight:700}}>40% of Exam Score</span>
              </div>
              <div style={{padding:"14px 18px"}}>
                <div style={{fontSize:12,color:"#64748b",marginBottom:8,fontWeight:600}}>&bull; Question format:</div>
                <div style={{display:"flex",gap:10,alignItems:"flex-start",
                  marginBottom:8,paddingLeft:16}}>
                  <span style={{fontSize:13,flexShrink:0,marginTop:1}}>📖</span>
                  <div style={{fontSize:12,lineHeight:1.55}}>
                    <strong style={{color:"#cbd5e1"}}>Stimulus-based sets (3–4 Qs per source):</strong>
                    <span style={{color:"#64748b",marginLeft:6}}>Analyze primary/secondary sources, maps, charts, and images from diverse world civilizations</span>
                  </div>
                </div>
                <div style={{marginTop:12,display:"flex",alignItems:"center",gap:8,
                  background:"rgba(255,71,87,0.06)",border:"1px solid rgba(255,71,87,0.18)",
                  borderRadius:8,padding:"7px 12px"}}>
                  <span style={{fontSize:13}}>🔒</span>
                  <span style={{fontSize:11,color:"#94a3b8"}}>
                    Section I questions are <strong style={{color:"#cbd5e1"}}>never publicly released</strong> by College Board.
                    Available in <strong style={{color:C.b}}>Practice Simulations</strong> only.
                  </span>
                </div>
              </div>
            </div>

            {/* Section I Part B + Section II block */}
            <div style={{borderRadius:12,border:"1px solid rgba(0,245,160,0.2)",
              background:"rgba(0,245,160,0.03)",overflow:"hidden"}}>
              <div style={{padding:"12px 18px",borderBottom:"1px solid rgba(0,245,160,0.15)",
                display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:8}}>
                <div>
                  <span style={{fontWeight:800,fontSize:14,color:C.g}}>Section I Part B + Section II &mdash; Free Response</span>
                  <span style={{fontSize:12,color:"#64748b",marginLeft:12}}>SAQ + DBQ + LEQ &middot; 2 Hours 20 Minutes</span>
                </div>
                <span style={{background:"rgba(0,245,160,0.12)",color:C.g,
                  border:"1px solid rgba(0,245,160,0.25)",borderRadius:20,
                  padding:"3px 12px",fontSize:12,fontWeight:700}}>60% of Exam Score</span>
              </div>
              <div style={{overflowX:"auto"}}>
                <table style={{width:"100%",borderCollapse:"collapse",fontSize:13}}>
                  <thead>
                    <tr>
                      {["Section","Type","Questions","Time","Weight"].map((h,i)=>(
                        <th key={h} style={{padding:"8px 12px 6px",textAlign:i>1?"center":"left",
                          color:"#475569",fontSize:10,fontWeight:700,textTransform:"uppercase",
                          letterSpacing:"0.08em",borderBottom:"1px solid rgba(255,255,255,0.05)"}}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {sectionIIRows.map((row,i)=>(
                      <tr key={i}>
                        <td style={{padding:"10px 12px",fontWeight:600,fontSize:12,color:C.b}}>{row.section}</td>
                        <td style={{padding:"10px 12px",fontWeight:600,color:"#e2e8f0"}}>{row.type}</td>
                        <td style={{padding:"10px 12px",textAlign:"center",color:"#94a3b8",fontWeight:600}}>{row.qs}</td>
                        <td style={{padding:"10px 12px",textAlign:"center",color:"#64748b"}}>{row.time}</td>
                        <td style={{padding:"10px 12px",textAlign:"center",color:C.g,fontWeight:700}}>{row.pct}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Skills assessed */}
          <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.07)",
            borderRadius:18,padding:"28px 32px",marginBottom:52}}>
            <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:20}}>
              <div style={{width:3,height:22,background:C.b,borderRadius:2}}/>
              <span style={{fontWeight:700,fontSize:12,textTransform:"uppercase",
                letterSpacing:"0.1em",color:"#94a3b8"}}>Skills Assessed</span>
            </div>
            <div style={{display:"grid",gridTemplateColumns:mob?"1fr":"1fr 1fr",gap:10}}>
              {skills.map(s=>(
                <div key={s.n} style={{background:"rgba(255,255,255,0.03)",borderRadius:10,
                  padding:"12px 14px",border:"1px solid rgba(255,255,255,0.05)",
                  display:"flex",gap:12,alignItems:"flex-start"}}>
                  <div style={{width:26,height:26,borderRadius:"50%",
                    background:"rgba(0,245,160,0.12)",border:"1px solid rgba(0,245,160,0.25)",
                    display:"flex",alignItems:"center",justifyContent:"center",
                    fontSize:11,fontWeight:700,color:C.g,flexShrink:0}}>{s.n}</div>
                  <div>
                    <div style={{fontWeight:600,fontSize:13,color:"#e2e8f0",marginBottom:3}}>{s.name}</div>
                    <div style={{fontSize:11,color:"#64748b",lineHeight:1.5}}>{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA cards */}
          <div style={{textAlign:"center",marginBottom:20}}>
            <div style={{fontSize:11,textTransform:"uppercase",letterSpacing:"0.15em",
              color:"#334155",marginBottom:16}}>Choose your practice mode</div>
          </div>
          <div style={{display:"grid",gridTemplateColumns:mob?"1fr":"1fr 1fr",gap:16,marginBottom:24}}>

            {/* Official */}
            <div onClick={()=>setScreen("home-official")}
              style={{background:"rgba(255,71,87,0.08)",border:"1px solid rgba(255,71,87,0.25)",
                borderRadius:18,padding:"28px 24px",cursor:"pointer",transition:"all 0.2s"}}
              onMouseEnter={e=>{e.currentTarget.style.background="rgba(255,71,87,0.15)";e.currentTarget.style.borderColor="rgba(255,71,87,0.6)";e.currentTarget.style.boxShadow="0 0 40px rgba(255,71,87,0.15)";}}
              onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,71,87,0.08)";e.currentTarget.style.borderColor="rgba(255,71,87,0.25)";e.currentTarget.style.boxShadow="none";}}>
              <div style={{fontSize:"2rem",marginBottom:12}}>📋</div>
              <div style={{fontWeight:800,fontSize:"1.15rem",marginBottom:6}}>Official AP Exams</div>
              <div style={{color:"#94a3b8",fontSize:13,lineHeight:1.65,marginBottom:18}}>
                Authentic Section II free-response questions from College Board AP Central.
                <br/><span style={{color:"#475569",fontSize:12}}>&#9888;&#65039; Section I (MC) not publicly released — FRQ only.</span>
              </div>
              <div style={{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}}>
                {[...new Set(officialTests.map(t=>t.year))].sort((a,b)=>b-a).map(yr=>(
                  <span key={yr} style={{background:"rgba(255,71,87,0.2)",color:C.r,
                    border:"1px solid rgba(255,71,87,0.4)",borderRadius:8,
                    padding:"4px 12px",fontWeight:700,fontSize:12}}>{yr}</span>
                ))}
                <span style={{color:"#475569",fontSize:13,marginLeft:4}}>&rarr;</span>
              </div>
            </div>

            {/* Simulations */}
            <div onClick={()=>setScreen("home-sim")}
              style={{background:"rgba(0,245,160,0.05)",border:"1px solid rgba(0,245,160,0.2)",
                borderRadius:18,padding:"28px 24px",cursor:"pointer",transition:"all 0.2s"}}
              onMouseEnter={e=>{e.currentTarget.style.background="rgba(0,245,160,0.1)";e.currentTarget.style.borderColor="rgba(0,245,160,0.5)";e.currentTarget.style.boxShadow="0 0 40px rgba(0,245,160,0.1)";}}
              onMouseLeave={e=>{e.currentTarget.style.background="rgba(0,245,160,0.05)";e.currentTarget.style.borderColor="rgba(0,245,160,0.2)";e.currentTarget.style.boxShadow="none";}}>
              <div style={{fontSize:"2rem",marginBottom:12}}>🚀</div>
              <div style={{fontWeight:800,fontSize:"1.15rem",marginBottom:6}}>Practice Simulations</div>
              <div style={{color:"#94a3b8",fontSize:13,lineHeight:1.65,marginBottom:18}}>
                Full-length exams: <strong style={{color:"rgba(255,255,255,0.6)"}}>55 MC</strong> + <strong style={{color:"rgba(255,255,255,0.6)"}}>SAQ + DBQ + LEQ</strong> — complete exam.
                <br/><span style={{color:"#475569",fontSize:12}}>Not official College Board material.</span>
              </div>
              <div style={{display:"flex",alignItems:"center",gap:8}}>
                <span style={{background:C.g,color:"#060b14",borderRadius:8,
                  padding:"6px 16px",fontWeight:800,fontSize:13}}>{simTests.length} simulation{simTests.length!==1?"s":""}</span>
                <span style={{color:"#475569",fontSize:13}}>&rarr;</span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",
            borderRadius:14,padding:mob?"12px 12px":"20px 24px",marginTop:8}}>
            <div style={{display:"grid",gridTemplateColumns:mob?"1fr":"1fr 1fr 1fr",gap:mob?12:16}}>
              {[
                {icon:"📋",title:"Official Tests",text:`${officialTests.length} official FRQ set${officialTests.length!==1?"s":""} from College Board AP Central. Section I (55 MC) is never publicly released.`},
                {icon:"🚀",title:"Simulations",text:"Full-exam simulations: Section I (55 MC) + SAQ + DBQ + LEQ. Not official College Board material."},
                {icon:"🤖",title:"AI Scoring & Feedback",text:"Results and comments are AI-generated for practice only. Not endorsed by College Board."},
              ].map(item=>(
                <div key={item.title} style={{display:"flex",gap:10}}>
                  <span style={{fontSize:"1.1rem",flexShrink:0}}>{item.icon}</span>
                  <div style={{fontSize:12,color:"#94a3b8",lineHeight:1.6}}>
                    <strong style={{color:"#e2e8f0",display:"block",marginBottom:3}}>{item.title}</strong>
                    {item.text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{textAlign:"center",marginTop:24,fontSize:11,color:"rgba(148,163,184,0.3)"}}>
            For practice only. Not endorsed by College Board.
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Exam Screen ───────────────────────────────────────────────────────────
function ExamScreen({ test, onFinish }) {
  const mob = useMobile();
  const hasMC = !!(test.mcQuestions && test.mcQuestions.length);

  const [phase, setPhase] = useState(hasMC ? "mc" : "saq");
  const [currentMC, setCurrentMC] = useState(0);
  const [mcAnswers, setMcAnswers] = useState({});
  const totalMC = hasMC ? test.mcQuestions.length : 0;
  const answeredMCCount = Object.keys(mcAnswers).length;

  const saqQuestions = test.questions.filter(q => q.type === "saq");
  const requiredSAQs = saqQuestions.filter(q => q.required);
  const choiceSAQs = saqQuestions.filter(q => !q.required);
  const [saqAnswers, setSaqAnswers] = useState({});
  const [currentSAQ, setCurrentSAQ] = useState(0);
  const [saqChoice, setSaqChoice] = useState(null);

  const getSaqList = () => {
    const list = [...requiredSAQs];
    if (saqChoice !== null) {
      const chosen = choiceSAQs.find(q => q.num === saqChoice);
      if (chosen) list.push(chosen);
    } else if (choiceSAQs.length > 0) {
      list.push(choiceSAQs[0]);
    }
    return list;
  };

  const dbqQuestion = test.questions.find(q => q.type === "dbq");
  const [dbqAnswer, setDbqAnswer] = useState("");
  const leqQuestion = test.questions.find(q => q.type === "leq");
  const [leqAnswer, setLeqAnswer] = useState("");
  const [leqOption, setLeqOption] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const isSaqPartDone = (qNum, letter) => !!(saqAnswers[qNum] && saqAnswers[qNum][letter] && saqAnswers[qNum][letter].trim());
  const isSaqDone = (q) => q.parts.every(p => isSaqPartDone(q.num, p.letter));

  const allSaqsDone = () => {
    const done = requiredSAQs.every(q => isSaqDone(q));
    if (!done) return false;
    if (saqChoice !== null) {
      const chosen = choiceSAQs.find(q => q.num === saqChoice);
      return chosen ? isSaqDone(chosen) : false;
    }
    return choiceSAQs.length === 0;
  };

  const isDbqDone = dbqAnswer.trim().length > 0;
  const isLeqDone = leqAnswer.trim().length > 0 && leqOption !== null;

  if (submitted)
    return <ResultsScreen test={test} mcAnswers={mcAnswers}
      saqAnswers={saqAnswers} saqChoice={saqChoice}
      dbqAnswer={dbqAnswer} leqAnswer={leqAnswer} leqOption={leqOption}
      onHome={onFinish}
      onRetry={()=>{setMcAnswers({});setSaqAnswers({});setSaqChoice(null);setDbqAnswer("");setLeqAnswer("");setLeqOption(null);setSubmitted(false);setCurrentMC(0);setCurrentSAQ(0);setPhase(hasMC?"mc":"saq");}}/>;

  // ── SECTION I Part A: MC ──
  if (phase === "mc") {
    const mcQ = test.mcQuestions[currentMC];
    const setInfo = test.mcSets ? test.mcSets.find(s => {
      const setNum = parseInt(s.id.split("set")[1]);
      return mcQ.set === setNum;
    }) : null;

    return (
      <div style={{minHeight:"100vh",background:gradient,fontFamily:font,color:C.white}}>
        <div style={{position:"sticky",top:0,zIndex:100,
          background:"rgba(6,11,20,0.92)",backdropFilter:"blur(20px)",
          borderBottom:`1px solid ${C.border}`}}>
          <div style={{padding:"12px 24px",display:"flex",alignItems:"center",
            justifyContent:"space-between",maxWidth:960,margin:"0 auto",flexWrap:"wrap",gap:8}}>
            <div>
              <div style={{fontSize:10,fontWeight:700,letterSpacing:"0.12em",
                textTransform:"uppercase",color:C.b,marginBottom:2}}>
                Section I, Part A &mdash; Multiple Choice
              </div>
              <div style={{fontSize:14,fontWeight:600,color:C.white}}>
                {test.label} &middot; 55 Questions &middot; 55 Minutes
              </div>
            </div>
            <Timer totalSeconds={test.totalMCTime || 55*60}/>
          </div>
          <div style={{height:3,background:"rgba(255,255,255,0.06)"}}>
            <div style={{height:"100%",background:C.b,width:`${(answeredMCCount/totalMC)*100}%`,transition:"width 0.3s"}}/>
          </div>
          <div style={{padding:mob?"8px 12px":"8px 24px",maxWidth:960,margin:"0 auto",
            display:"flex",alignItems:"center",gap:mob?3:6,flexWrap:"wrap",overflowX:mob?"auto":"visible",
            borderTop:`1px solid rgba(30,41,59,0.4)`}}>
            <span style={{fontSize:10,color:C.muted,marginRight:4,fontWeight:700,
              textTransform:"uppercase",letterSpacing:"0.06em",flexShrink:0}}>Q:</span>
            {test.mcQuestions.map((mq,i)=>{
              const active=i===currentMC, answered=!!mcAnswers[mq.num];
              return (
                <button key={i} onClick={()=>setCurrentMC(i)} style={{
                  width:mob?22:26,height:mob?22:26,borderRadius:5,border:"none",cursor:"pointer",
                  fontFamily:font,fontWeight:700,fontSize:10,transition:"all 0.15s",
                  background:active?C.b:answered?"rgba(56,189,248,0.2)":"rgba(255,255,255,0.06)",
                  color:active?C.bg:answered?C.b:C.muted,
                  outline:active?`2px solid ${C.b}`:"none",outlineOffset:2}}>
                  {answered&&!active?"✓":mq.num}
                </button>
              );
            })}
          </div>
        </div>

        <div style={{maxWidth:860,margin:"0 auto",padding:mob?"16px 12px 80px":"32px 24px 80px"}}>
          {setInfo && (
            <div style={{background:C.mid,border:`1px solid ${C.border}`,borderRadius:12,
              padding:mob?"12px 14px":"18px 22px",marginBottom:20,fontSize:mob?"0.82rem":"0.88rem",
              color:"rgba(255,255,255,0.82)",lineHeight:1.75,
              borderLeft:`3px solid ${C.b}`}}>
              <div style={{fontSize:10,fontWeight:700,textTransform:"uppercase",
                letterSpacing:"0.1em",color:C.b,marginBottom:8}}>
                {setInfo.title}
              </div>
              {setInfo.figureId && (
                <div style={{marginBottom:12}}>{renderVisual(setInfo.figureId)}</div>
              )}
              <div style={{whiteSpace:"pre-wrap"}}>{setInfo.passage}</div>
            </div>
          )}

          <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:20}}>
            <div style={{background:"rgba(56,189,248,0.1)",border:`2px solid ${C.b}`,
              borderRadius:8,padding:"6px 14px",fontWeight:800,fontSize:14,color:C.b}}>
              {currentMC+1} / {totalMC}
            </div>
            <div style={{fontSize:11,fontWeight:700,textTransform:"uppercase",
              letterSpacing:"0.1em",color:C.muted}}>
              Set {mcQ.set}
            </div>
          </div>

          <div style={{background:C.mid,border:`1px solid ${C.border}`,borderRadius:12,
            padding:"22px 24px",marginBottom:20}}>
            <div style={{fontSize:11,fontWeight:700,textTransform:"uppercase",
              letterSpacing:"0.1em",color:C.muted,marginBottom:12}}>Question {mcQ.num}</div>
            <p style={{margin:0,fontSize:"1rem",lineHeight:1.75,color:"rgba(255,255,255,0.95)",
              fontWeight:500}}>{mcQ.stem}</p>
          </div>

          <div style={{display:"flex",flexDirection:"column",gap:10,marginBottom:28}}>
            {Array.from({length:mcQ.choices.length/2},(_,i)=>{
              const letter = mcQ.choices[i*2];
              const text   = mcQ.choices[i*2+1];
              const selected = mcAnswers[mcQ.num] === letter;
              return (
                <button key={letter} onClick={()=>setMcAnswers(prev=>({...prev,[mcQ.num]:letter}))}
                  style={{display:"flex",alignItems:"flex-start",gap:14,
                    background:selected?"rgba(56,189,248,0.12)":"rgba(255,255,255,0.03)",
                    border:`1.5px solid ${selected?C.b:"rgba(255,255,255,0.08)"}`,
                    borderRadius:10,padding:"14px 18px",cursor:"pointer",
                    textAlign:"left",transition:"all 0.15s",width:"100%",
                    boxShadow:selected?`0 0 16px rgba(56,189,248,0.15)`:"none"}}>
                  <span style={{width:28,height:28,borderRadius:6,flexShrink:0,
                    background:selected?C.b:"rgba(255,255,255,0.07)",
                    border:`1.5px solid ${selected?C.b:"rgba(255,255,255,0.15)"}`,
                    display:"flex",alignItems:"center",justifyContent:"center",
                    fontWeight:800,fontSize:13,
                    color:selected?C.bg:C.muted,transition:"all 0.15s"}}>
                    {letter}
                  </span>
                  <span style={{fontSize:"0.94rem",lineHeight:1.65,
                    color:selected?"rgba(255,255,255,0.98)":"rgba(255,255,255,0.78)",
                    fontWeight:selected?600:400,paddingTop:2}}>{text}</span>
                </button>
              );
            })}
          </div>

          <div style={{display:"flex",justifyContent:"space-between",gap:12}}>
            <button onClick={()=>setCurrentMC(p=>Math.max(0,p-1))} disabled={currentMC===0}
              style={{background:"rgba(255,255,255,0.06)",color:currentMC===0?C.muted:C.white,
                border:`1px solid ${C.border}`,padding:"11px 24px",borderRadius:10,
                fontFamily:font,fontWeight:600,fontSize:14,
                cursor:currentMC===0?"default":"pointer",opacity:currentMC===0?0.4:1}}>
              &larr; Previous
            </button>
            {currentMC < totalMC-1 ? (
              <button onClick={()=>setCurrentMC(p=>p+1)}
                style={{background:C.b,color:C.bg,border:"none",padding:"11px 28px",
                  borderRadius:10,fontFamily:font,fontWeight:700,fontSize:14,cursor:"pointer"}}>
                Next &rarr;
              </button>
            ) : (
              <button onClick={()=>{ setPhase("saq"); setCurrentSAQ(0); }}
                style={{background:answeredMCCount===totalMC?C.g:"rgba(255,255,255,0.06)",
                  color:answeredMCCount===totalMC?C.bg:C.muted,border:"none",padding:"11px 28px",
                  borderRadius:10,fontFamily:font,fontWeight:700,fontSize:14,
                  cursor:"pointer",opacity:answeredMCCount===totalMC?1:0.55,transition:"all 0.2s"}}>
                {answeredMCCount===totalMC?"Proceed to Short Answer Questions →":`${answeredMCCount}/${totalMC} Answered`}
              </button>
            )}
          </div>

          <div style={{textAlign:"center",marginTop:16}}>
            <button onClick={()=>{ setPhase("saq"); setCurrentSAQ(0); }}
              style={{background:"rgba(56,189,248,0.07)",border:`1px solid rgba(56,189,248,0.2)`,
                color:"#64748b",fontSize:12,borderRadius:8,padding:"8px 18px",
                cursor:"pointer",fontFamily:font,fontWeight:600,transition:"all 0.2s"}}
              onMouseEnter={e=>{e.currentTarget.style.color=C.b;}}
              onMouseLeave={e=>{e.currentTarget.style.color="#64748b";}}>
              Skip to Short Answer Questions &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── SECTION I Part B: SAQ ──
  if (phase === "saq") {
    const saqList = getSaqList();
    const currentSAQObj = currentSAQ < saqList.length ? saqList[currentSAQ] : saqList[0];
    const isOnChoiceSAQ = currentSAQ >= requiredSAQs.length;

    return (
      <div style={{minHeight:"100vh",background:gradient,fontFamily:font,color:C.white}}>
        <div style={{position:"sticky",top:0,zIndex:100,
          background:"rgba(6,11,20,0.92)",backdropFilter:"blur(20px)",
          borderBottom:`1px solid ${C.border}`}}>
          <div style={{padding:"12px 24px",display:"flex",alignItems:"center",
            justifyContent:"space-between",maxWidth:960,margin:"0 auto",flexWrap:"wrap",gap:8}}>
            <div>
              <div style={{fontSize:10,fontWeight:700,letterSpacing:"0.12em",
                textTransform:"uppercase",color:C.g,marginBottom:2}}>
                Section I, Part B &mdash; Short Answer Questions
              </div>
              <div style={{fontSize:14,fontWeight:600,color:C.white}}>
                {test.label} &middot; 3 Questions &middot; 40 Minutes
              </div>
            </div>
            <div style={{display:"flex",alignItems:"center",gap:10}}>
              {hasMC && (
                <button onClick={()=>setPhase("mc")}
                  style={{background:"rgba(56,189,248,0.1)",color:C.b,
                    border:`1px solid rgba(56,189,248,0.3)`,borderRadius:8,
                    padding:"5px 12px",fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:font}}>
                  &larr; Sec I MC ({answeredMCCount}/{totalMC})
                </button>
              )}
              <Timer totalSeconds={SUBJECT_CONFIG.saqTime * 60}/>
            </div>
          </div>
          <div style={{padding:"8px 24px",display:"flex",gap:8,alignItems:"center",
            maxWidth:960,margin:"0 auto",borderTop:`1px solid rgba(30,41,59,0.4)`}}>
            <span style={{fontSize:11,color:C.muted,marginRight:4,fontWeight:600,
              letterSpacing:"0.06em",textTransform:"uppercase"}}>SAQ:</span>
            {requiredSAQs.map((sq,i)=>{
              const active=i===currentSAQ, done=isSaqDone(sq);
              return (
                <button key={sq.num} onClick={()=>setCurrentSAQ(i)} style={{
                  width:32,height:32,borderRadius:"50%",border:"none",cursor:"pointer",
                  fontFamily:font,fontWeight:700,fontSize:13,transition:"all 0.2s",
                  background:active?C.g:done?"rgba(0,245,160,0.15)":"rgba(255,255,255,0.07)",
                  color:active?C.bg:done?C.g:C.muted,
                  outline:active?`2px solid ${C.g}`:"none",outlineOffset:2}}>
                  {done&&!active?"✓":sq.num}
                </button>
              );
            })}
            {choiceSAQs.length > 0 && (
              <>
                <span style={{fontSize:10,color:"#475569",margin:"0 4px"}}>|</span>
                <span style={{fontSize:10,color:C.gold,fontWeight:700,marginRight:4}}>CHOICE:</span>
                {choiceSAQs.map(sq => {
                  const chosen = saqChoice === sq.num;
                  const active = isOnChoiceSAQ && saqChoice === sq.num;
                  const done = chosen && isSaqDone(sq);
                  return (
                    <button key={sq.num} onClick={()=>{
                      setSaqChoice(sq.num);
                      setCurrentSAQ(requiredSAQs.length);
                    }} style={{
                      width:32,height:32,borderRadius:"50%",border:chosen?`2px solid ${C.gold}`:"none",cursor:"pointer",
                      fontFamily:font,fontWeight:700,fontSize:13,transition:"all 0.2s",
                      background:active?C.gold:done?"rgba(255,214,10,0.15)":chosen?"rgba(255,214,10,0.1)":"rgba(255,255,255,0.07)",
                      color:active?C.bg:done||chosen?C.gold:C.muted,
                      outline:active?`2px solid ${C.gold}`:"none",outlineOffset:2}}>
                      {done&&!active?"✓":sq.num}
                    </button>
                  );
                })}
              </>
            )}
          </div>
        </div>

        <div style={{maxWidth:900,margin:"0 auto",padding:mob?"16px 12px 60px":"32px 24px 72px"}}>
          {isOnChoiceSAQ && saqChoice === null && choiceSAQs.length > 0 && (
            <div style={{background:"rgba(255,214,10,0.08)",border:"1px solid rgba(255,214,10,0.25)",
              borderRadius:12,padding:"20px 24px",marginBottom:24}}>
              <div style={{fontSize:13,fontWeight:700,color:C.gold,marginBottom:12}}>
                Choose ONE of the following questions to answer:
              </div>
              <div style={{display:"flex",flexDirection:"column",gap:10}}>
                {choiceSAQs.map(sq=>(
                  <button key={sq.num} onClick={()=>setSaqChoice(sq.num)}
                    style={{display:"flex",alignItems:"center",gap:14,
                      background:"rgba(255,255,255,0.03)",
                      border:`1.5px solid rgba(255,214,10,0.2)`,
                      borderRadius:10,padding:"14px 18px",cursor:"pointer",
                      textAlign:"left",transition:"all 0.15s",width:"100%"}}
                    onMouseEnter={e=>{e.currentTarget.style.background="rgba(255,214,10,0.08)";e.currentTarget.style.borderColor="rgba(255,214,10,0.5)";}}
                    onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,0.03)";e.currentTarget.style.borderColor="rgba(255,214,10,0.2)";}}>
                    <span style={{width:32,height:32,borderRadius:"50%",
                      background:"rgba(255,214,10,0.12)",border:`1.5px solid ${C.gold}`,
                      display:"flex",alignItems:"center",justifyContent:"center",
                      fontWeight:800,fontSize:14,color:C.gold,flexShrink:0}}>
                      {sq.num}
                    </span>
                    <div>
                      <div style={{fontWeight:700,fontSize:14,color:C.white,marginBottom:4}}>{sq.title}</div>
                      <div style={{fontSize:12,color:C.muted}}>{sq.parts[0].prompt.slice(0,120)}...</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {(!isOnChoiceSAQ || saqChoice !== null) && currentSAQObj && (
            <>
              <div style={{display:"flex",alignItems:"center",gap:14,marginBottom:20}}>
                <div style={{width:40,height:40,borderRadius:"50%",
                  background:"rgba(0,245,160,0.08)",border:`2px solid ${C.g}`,
                  display:"flex",alignItems:"center",justifyContent:"center",
                  fontWeight:800,fontSize:16,color:C.g,flexShrink:0}}>
                  {isOnChoiceSAQ && saqChoice !== null ? saqChoice : currentSAQObj.num}
                </div>
                <div>
                  <span style={{fontSize:11,fontWeight:700,letterSpacing:"0.1em",
                    textTransform:"uppercase",color:C.b}}>
                    {isOnChoiceSAQ && saqChoice !== null
                      ? choiceSAQs.find(q=>q.num===saqChoice)?.title || currentSAQObj.title
                      : currentSAQObj.title}
                  </span>
                  <span style={{fontSize:12,color:C.muted}}> &middot; {currentSAQObj.points} points &middot; ~{currentSAQObj.suggestedTime} min</span>
                  {!currentSAQObj.required && <span style={{fontSize:10,color:C.gold,fontWeight:700,
                    background:"rgba(255,214,10,0.12)",padding:"2px 8px",borderRadius:4,marginLeft:8}}>CHOICE</span>}
                </div>
              </div>

              <SAQTask
                q={isOnChoiceSAQ && saqChoice !== null ? (choiceSAQs.find(q=>q.num===saqChoice) || currentSAQObj) : currentSAQObj}
                answers={saqAnswers[isOnChoiceSAQ && saqChoice !== null ? saqChoice : currentSAQObj.num] || {}}
                onAnswer={(letter, value) => {
                  const qNum = isOnChoiceSAQ && saqChoice !== null ? saqChoice : currentSAQObj.num;
                  setSaqAnswers(prev => ({
                    ...prev,
                    [qNum]: { ...(prev[qNum] || {}), [letter]: value }
                  }));
                }}
              />
            </>
          )}

          <div style={{display:"flex",justifyContent:"space-between",marginTop:24,gap:12}}>
            <button onClick={()=>{
              if (currentSAQ > 0) setCurrentSAQ(p=>p-1);
              else if (hasMC) setPhase("mc");
            }} disabled={currentSAQ===0 && !hasMC}
              style={{background:"rgba(255,255,255,0.06)",color:(currentSAQ===0 && !hasMC)?C.muted:C.white,
                border:`1px solid ${C.border}`,padding:"11px 24px",borderRadius:10,
                fontFamily:font,fontWeight:600,fontSize:14,
                cursor:(currentSAQ===0 && !hasMC)?"default":"pointer",opacity:(currentSAQ===0 && !hasMC)?0.4:1}}>
              &larr; Previous
            </button>
            {currentSAQ < (requiredSAQs.length + (saqChoice !== null ? 1 : 0)) - 1 ? (
              <button onClick={()=>setCurrentSAQ(p=>p+1)}
                style={{background:C.b,color:C.bg,border:"none",padding:"11px 28px",
                  borderRadius:10,fontFamily:font,fontWeight:700,fontSize:14,cursor:"pointer"}}>
                Next SAQ &rarr;
              </button>
            ) : currentSAQ === requiredSAQs.length - 1 && choiceSAQs.length > 0 && saqChoice === null ? (
              <button onClick={()=>setCurrentSAQ(requiredSAQs.length)}
                style={{background:C.gold,color:C.bg,border:"none",padding:"11px 28px",
                  borderRadius:10,fontFamily:font,fontWeight:700,fontSize:14,cursor:"pointer"}}>
                Choose SAQ 3 or 4 &rarr;
              </button>
            ) : (
              <button onClick={()=>setPhase("dbq")}
                style={{background:allSaqsDone()?C.g:"rgba(255,255,255,0.06)",
                  color:allSaqsDone()?C.bg:C.muted,border:"none",padding:"11px 28px",
                  borderRadius:10,fontFamily:font,fontWeight:700,fontSize:14,
                  cursor:"pointer",opacity:allSaqsDone()?1:0.55,transition:"all 0.2s"}}>
                Proceed to Document-Based Question &rarr;
              </button>
            )}
          </div>

          <div style={{textAlign:"center",marginTop:16}}>
            <button onClick={()=>setPhase("dbq")}
              style={{background:"rgba(0,245,160,0.07)",border:`1px solid rgba(0,245,160,0.2)`,
                color:"#64748b",fontSize:12,borderRadius:8,padding:"8px 18px",
                cursor:"pointer",fontFamily:font,fontWeight:600,transition:"all 0.2s"}}
              onMouseEnter={e=>{e.currentTarget.style.color=C.g;}}
              onMouseLeave={e=>{e.currentTarget.style.color="#64748b";}}>
              Skip to DBQ &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── SECTION II: DBQ ──
  if (phase === "dbq" && dbqQuestion) {
    return (
      <div style={{minHeight:"100vh",background:gradient,fontFamily:font,color:C.white}}>
        <div style={{position:"sticky",top:0,zIndex:100,
          background:"rgba(6,11,20,0.92)",backdropFilter:"blur(20px)",
          borderBottom:`1px solid ${C.border}`}}>
          <div style={{padding:"12px 24px",display:"flex",alignItems:"center",
            justifyContent:"space-between",maxWidth:960,margin:"0 auto",flexWrap:"wrap",gap:8}}>
            <div>
              <div style={{fontSize:10,fontWeight:700,letterSpacing:"0.12em",
                textTransform:"uppercase",color:C.g,marginBottom:2}}>
                Section II &mdash; Document-Based Question
              </div>
              <div style={{fontSize:14,fontWeight:600,color:C.white}}>
                {test.label} &middot; 1 Question (7 Documents) &middot; 60 Minutes
              </div>
            </div>
            <div style={{display:"flex",alignItems:"center",gap:10}}>
              <button onClick={()=>setPhase("saq")}
                style={{background:"rgba(0,245,160,0.1)",color:C.g,
                  border:`1px solid rgba(0,245,160,0.3)`,borderRadius:8,
                  padding:"5px 12px",fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:font}}>
                &larr; SAQs
              </button>
              <Timer totalSeconds={SUBJECT_CONFIG.dbqTime * 60}/>
            </div>
          </div>
        </div>

        <div style={{maxWidth:900,margin:"0 auto",padding:mob?"16px 12px 60px":"32px 24px 72px"}}>
          <div style={{display:"flex",alignItems:"center",gap:14,marginBottom:20}}>
            <div style={{width:40,height:40,borderRadius:"50%",
              background:"rgba(0,245,160,0.08)",border:`2px solid ${C.g}`,
              display:"flex",alignItems:"center",justifyContent:"center",
              fontWeight:800,fontSize:16,color:C.g,flexShrink:0}}>D</div>
            <div>
              <span style={{fontSize:11,fontWeight:700,letterSpacing:"0.1em",
                textTransform:"uppercase",color:C.b}}>{dbqQuestion.title}</span>
              <span style={{fontSize:12,color:C.muted}}> &middot; {dbqQuestion.points} points &middot; {dbqQuestion.suggestedTime} min</span>
            </div>
          </div>

          <DBQTask q={dbqQuestion} answer={dbqAnswer} onAnswer={setDbqAnswer}/>

          <div style={{display:"flex",justifyContent:"space-between",marginTop:24,gap:12}}>
            <button onClick={()=>setPhase("saq")}
              style={{background:"rgba(255,255,255,0.06)",color:C.white,
                border:`1px solid ${C.border}`,padding:"11px 24px",borderRadius:10,
                fontFamily:font,fontWeight:600,fontSize:14,cursor:"pointer"}}>
              &larr; Back to SAQs
            </button>
            <button onClick={()=>setPhase("leq")}
              style={{background:isDbqDone?C.g:"rgba(255,255,255,0.06)",
                color:isDbqDone?C.bg:C.muted,border:"none",padding:"11px 28px",
                borderRadius:10,fontFamily:font,fontWeight:700,fontSize:14,
                cursor:"pointer",opacity:isDbqDone?1:0.55,transition:"all 0.2s"}}>
              Proceed to Long Essay Question &rarr;
            </button>
          </div>

          <div style={{textAlign:"center",marginTop:16}}>
            <button onClick={()=>setPhase("leq")}
              style={{background:"rgba(0,245,160,0.07)",border:`1px solid rgba(0,245,160,0.2)`,
                color:"#64748b",fontSize:12,borderRadius:8,padding:"8px 18px",
                cursor:"pointer",fontFamily:font,fontWeight:600,transition:"all 0.2s"}}
              onMouseEnter={e=>{e.currentTarget.style.color=C.g;}}
              onMouseLeave={e=>{e.currentTarget.style.color="#64748b";}}>
              Skip to LEQ &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── SECTION II: LEQ ──
  if (phase === "leq" && leqQuestion) {
    return (
      <div style={{minHeight:"100vh",background:gradient,fontFamily:font,color:C.white}}>
        <div style={{position:"sticky",top:0,zIndex:100,
          background:"rgba(6,11,20,0.92)",backdropFilter:"blur(20px)",
          borderBottom:`1px solid ${C.border}`}}>
          <div style={{padding:"12px 24px",display:"flex",alignItems:"center",
            justifyContent:"space-between",maxWidth:960,margin:"0 auto",flexWrap:"wrap",gap:8}}>
            <div>
              <div style={{fontSize:10,fontWeight:700,letterSpacing:"0.12em",
                textTransform:"uppercase",color:C.g,marginBottom:2}}>
                Section II &mdash; Long Essay Question
              </div>
              <div style={{fontSize:14,fontWeight:600,color:C.white}}>
                {test.label} &middot; 1 Question (Choice of 3) &middot; 40 Minutes
              </div>
            </div>
            <div style={{display:"flex",alignItems:"center",gap:10}}>
              <button onClick={()=>setPhase("dbq")}
                style={{background:"rgba(0,245,160,0.1)",color:C.g,
                  border:`1px solid rgba(0,245,160,0.3)`,borderRadius:8,
                  padding:"5px 12px",fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:font}}>
                &larr; DBQ
              </button>
              <Timer totalSeconds={SUBJECT_CONFIG.leqTime * 60}/>
            </div>
          </div>
        </div>

        <div style={{maxWidth:900,margin:"0 auto",padding:mob?"16px 12px 60px":"32px 24px 72px"}}>
          <div style={{display:"flex",alignItems:"center",gap:14,marginBottom:20}}>
            <div style={{width:40,height:40,borderRadius:"50%",
              background:"rgba(0,245,160,0.08)",border:`2px solid ${C.g}`,
              display:"flex",alignItems:"center",justifyContent:"center",
              fontWeight:800,fontSize:16,color:C.g,flexShrink:0}}>L</div>
            <div>
              <span style={{fontSize:11,fontWeight:700,letterSpacing:"0.1em",
                textTransform:"uppercase",color:C.b}}>{leqQuestion.title}</span>
              <span style={{fontSize:12,color:C.muted}}> &middot; {leqQuestion.points} points &middot; {leqQuestion.suggestedTime} min</span>
            </div>
          </div>

          <LEQTask q={leqQuestion} selectedOption={leqOption} onSelectOption={setLeqOption}
            answer={leqAnswer} onAnswer={setLeqAnswer}/>

          <div style={{display:"flex",justifyContent:"space-between",marginTop:24,gap:12}}>
            <button onClick={()=>setPhase("dbq")}
              style={{background:"rgba(255,255,255,0.06)",color:C.white,
                border:`1px solid ${C.border}`,padding:"11px 24px",borderRadius:10,
                fontFamily:font,fontWeight:600,fontSize:14,cursor:"pointer"}}>
              &larr; Back to DBQ
            </button>
            <button onClick={()=>setSubmitted(true)} disabled={!isLeqDone}
              style={{background:isLeqDone?C.g:"rgba(255,255,255,0.06)",
                color:isLeqDone?C.bg:C.muted,border:"none",padding:"11px 28px",
                borderRadius:10,fontFamily:font,fontWeight:700,fontSize:14,
                cursor:isLeqDone?"pointer":"default",opacity:isLeqDone?1:0.55,transition:"all 0.2s"}}>
              {isLeqDone?"Submit Exam →":"Complete LEQ First"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

// ── Results Screen ────────────────────────────────────────────────────────
function ResultsScreen({ test, mcAnswers, saqAnswers, saqChoice, dbqAnswer, leqAnswer, leqOption, onHome, onRetry }) {
  const mob = useMobile();
  const [aiScores, setAiScores] = useState({});
  const [aiFeedback, setAiFeedback] = useState({});
  const [loadingKeys, setLoadingKeys] = useState({});
  const [expanded, setExpanded] = useState({dbq:true, leq:true});
  const [manualScores, setManualScores] = useState({});
  const getScore = (key) => manualScores[key] !== undefined ? manualScores[key] : (aiScores[key] ?? null);

  const hasMC = !!(test.mcQuestions && test.mcQuestions.length);
  const mcTotal = hasMC ? test.mcQuestions.length : 0;
  const mcCorrect = hasMC ? test.mcQuestions.filter(q => mcAnswers?.[q.num] === q.answer).length : 0;
  const mcPct = mcTotal ? Math.round((mcCorrect/mcTotal)*100) : 0;

  const saqQuestions = test.questions.filter(q => q.type === "saq");
  const dbqQuestion = test.questions.find(q => q.type === "dbq");
  const leqQuestion = test.questions.find(q => q.type === "leq");

  const answeredSAQs = saqQuestions.filter(q => {
    if (q.required) return true;
    return q.num === saqChoice;
  });

  const saqPossible = answeredSAQs.reduce((acc,q)=>acc+q.points,0);
  const dbqPossible = dbqQuestion ? dbqQuestion.points : 0;
  const leqPossible = leqQuestion ? leqQuestion.points : 0;
  const totalFRQPossible = saqPossible + dbqPossible + leqPossible;

  const getSaqEarned = () => {
    let total = 0;
    answeredSAQs.forEach(q => {
      q.parts.forEach(p => {
        const key = `saq-${q.num}-${p.letter}`;
        const s = getScore(key);
        if (s !== null) total += s;
      });
    });
    return total;
  };

  const getDbqEarned = () => getScore("dbq-total") ?? 0;
  const getLeqEarned = () => getScore("leq-total") ?? 0;

  const saqEarned = getSaqEarned();
  const dbqEarned = getDbqEarned();
  const leqEarned = getLeqEarned();
  const totalFRQEarned = saqEarned + dbqEarned + leqEarned;

  const apScore = hasMC
    ? calcAPScore(mcCorrect, saqEarned, dbqEarned, leqEarned)
    : calcAPScoreFRQOnly(totalFRQEarned, totalFRQPossible);
  const apColor = AP_SCORE_COLORS[apScore] || C.muted;
  const frqPct = totalFRQPossible ? Math.round((totalFRQEarned/totalFRQPossible)*100) : 0;
  const scoreColor = frqPct>=80?C.g:frqPct>=60?C.b:frqPct>=40?"#FB923C":C.r;

  // AI Scoring
  const fetchScoreAndFeedback = async (key, maxPoints, systemPrompt, userPrompt) => {
    setLoadingKeys(prev=>({...prev,[key]:true}));
    try {
      const resp = await fetch("https://ap-gov-simulator-production-edc0.up.railway.app/api/score", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({ systemPrompt, userPrompt })
      });
      if (!resp.ok) {
        const errText = await resp.text().catch(()=>"");
        console.error(`Scoring API error ${resp.status} for ${key}:`, errText);
        setAiFeedback(prev=>({...prev,[key]:`⚠️ Scoring server returned ${resp.status}. ${errText.slice(0,120)}`}));
        return;
      }
      const text = await resp.text();
      let parsed;
      try {
        parsed = JSON.parse(text);
      } catch(parseErr) {
        const jsonMatch = text.match(/\{[\s\S]*"score"[\s\S]*"feedback"[\s\S]*\}/);
        if (jsonMatch) {
          parsed = JSON.parse(jsonMatch[0]);
        } else {
          console.error(`JSON parse error for ${key}:`, text.slice(0,200));
          setAiFeedback(prev=>({...prev,[key]:`⚠️ Could not parse scoring response.`}));
          return;
        }
      }
      const score = parsed.score !== null && parsed.score !== undefined
        ? Math.min(maxPoints, Math.max(0, parseInt(parsed.score)))
        : null;
      if(score !== null) setAiScores(prev=>({...prev,[key]:score}));
      if(parsed.feedback) setAiFeedback(prev=>({...prev,[key]:parsed.feedback}));
    } catch(e) {
      console.error(`Scoring fetch error for ${key}:`, e);
      setAiFeedback(prev=>({...prev,[key]:`⚠️ Could not reach scoring server: ${e.message}`}));
    } finally {
      setLoadingKeys(prev=>({...prev,[key]:false}));
    }
  };

  useEffect(()=>{
    const saqInit = {};
    answeredSAQs.forEach(q=>{ saqInit[`saq-${q.num}`] = true; });
    setExpanded(prev=>({...prev,...saqInit}));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  useEffect(()=>{
    const tasks = [];

    answeredSAQs.forEach(q=>{
      q.parts.forEach(part=>{
        const answer = (saqAnswers[q.num] && saqAnswers[q.num][part.letter]) || "(no response)";
        const rubricRow = q.rubric ? q.rubric.find(r => r.row === part.letter) : null;
        const key = `saq-${q.num}-${part.letter}`;
        const sys = `You are an expert AP World History: Modern exam grader specializing in Short Answer Questions (SAQ).
Evaluate the student's response against the rubric for this specific part.
Return ONLY valid JSON: {"score": <0 or 1>, "feedback": "<2-3 sentence feedback>"}
- score is 0 or 1 based on whether the response meets the rubric criteria
- feedback explains what earned or did not earn credit and how to improve`;
        const prompt = `SAQ ${q.num}, Part ${part.letter} — Max 1 point
Rubric: ${rubricRow ? rubricRow.description : "Meets the criteria for this part."}

Question: ${part.prompt}

Student's response:
"${answer}"

Return JSON: {"score": 0 or 1, "feedback": "..."}`;
        tasks.push({key, maxPts:1, sys, prompt});
      });
    });

    if (dbqQuestion) {
      const rubricText = dbqQuestion.rubric.map(r=>`Row ${r.row} — ${r.category} (${r.points} pts): ${r.description}`).join("\n");
      const key = "dbq-total";
      const sys = `You are an expert AP World History: Modern exam grader specializing in Document-Based Questions (DBQ).
Evaluate the student's essay against the full DBQ rubric (7 points total).
The student should: present a thesis, provide contextualization, use at least 4 documents as evidence, provide 1 piece of outside evidence, source at least 2 documents, and demonstrate complex understanding.
Return ONLY valid JSON: {"score": <integer 0-7>, "feedback": "<3-5 sentence feedback>"}
- score is the TOTAL across all rubric rows (0-7)
- feedback explains what earned credit, what was missing, and how to improve`;
      const prompt = `DOCUMENT-BASED QUESTION — Max 7 points
Prompt: ${dbqQuestion.prompt}

Rubric:
${rubricText}

Student's essay:
"${dbqAnswer || "(no response)"}"

Return JSON: {"score": integer 0-7, "feedback": "..."}`;
      tasks.push({key, maxPts:7, sys, prompt});
    }

    if (leqQuestion && leqOption !== null) {
      const chosenPrompt = leqQuestion.options.find(o=>o.id===leqOption)?.prompt || "";
      const rubricText = leqQuestion.rubric.map(r=>`Row ${r.row} — ${r.category} (${r.points} pts): ${r.description}`).join("\n");
      const key = "leq-total";
      const sys = `You are an expert AP World History: Modern exam grader specializing in Long Essay Questions (LEQ).
Evaluate the student's essay against the full LEQ rubric (6 points total).
The student should: present a thesis, provide contextualization, use specific evidence, apply historical reasoning, and demonstrate complex understanding.
Return ONLY valid JSON: {"score": <integer 0-6>, "feedback": "<3-5 sentence feedback>"}
- score is the TOTAL across all rubric rows (0-6)
- feedback explains what earned credit, what was missing, and how to improve`;
      const prompt = `LONG ESSAY QUESTION — Max 6 points
Prompt: ${chosenPrompt}

Rubric:
${rubricText}

Student's essay:
"${leqAnswer || "(no response)"}"

Return JSON: {"score": integer 0-6, "feedback": "..."}`;
      tasks.push({key, maxPts:6, sys, prompt});
    }

    (async()=>{
      for(const t of tasks){
        await fetchScoreAndFeedback(t.key, t.maxPts, t.sys, t.prompt);
        await new Promise(r=>setTimeout(r,300));
      }
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <div style={{minHeight:"100vh",background:gradient,fontFamily:font,color:C.white}}>
      <div style={{position:"fixed",...noiseBg}}/>
      <div style={{position:"relative",zIndex:1}}>
        <div style={{background:"rgba(6,11,20,0.92)",backdropFilter:"blur(20px)",
          borderBottom:`1px solid ${C.border}`,padding:mob?"10px 12px":"14px 32px",
          display:"flex",alignItems:"center",gap:12}}>
          <button style={backBtn} onClick={onHome}>&larr; All Exams</button>
          <span style={{color:"#334155",fontSize:13}}>{test.label} &middot; Results &amp; Review</span>
        </div>

        <div style={{maxWidth:900,margin:"0 auto",padding:mob?"20px 12px 80px":"40px 24px 80px"}}>

          {/* AP Score card */}
          <div style={{background:C.mid,border:`1px solid ${C.border}`,borderRadius:20,
            padding:"36px 40px",marginBottom:28,overflow:"hidden",position:"relative"}}>
            <div style={{position:"absolute",top:-60,right:-60,width:220,height:220,
              borderRadius:"50%",background:apColor,opacity:0.05,pointerEvents:"none"}}/>

            <div style={{display:"flex",alignItems:"flex-start",
              justifyContent:"space-between",gap:24,flexWrap:"wrap"}}>
              <div>
                {hasMC && (
                  <div style={{marginBottom:20}}>
                    <div style={{fontSize:11,fontWeight:700,letterSpacing:"0.12em",
                      textTransform:"uppercase",color:C.b,marginBottom:8}}>Section I — MC Score</div>
                    <div style={{display:"flex",alignItems:"flex-end",gap:8,marginBottom:8}}>
                      <span style={{fontSize:mob?30:42,fontWeight:900,color:C.b,lineHeight:1}}>{mcCorrect}</span>
                      <span style={{fontSize:18,color:C.muted,marginBottom:6}}>/ {mcTotal}</span>
                      <span style={{fontSize:14,color:C.b,fontWeight:700,marginBottom:6,marginLeft:4}}>({mcPct}%)</span>
                    </div>
                    <div style={{height:6,background:"rgba(255,255,255,0.07)",borderRadius:3,width:200,overflow:"hidden",marginBottom:4}}>
                      <div style={{height:"100%",width:`${mcPct}%`,background:C.b,borderRadius:3,transition:"width 1.2s ease"}}/>
                    </div>
                    <div style={{fontSize:11,color:"#475569"}}>Auto-graded &middot; 1 pt each</div>
                  </div>
                )}
                <div style={{fontSize:11,fontWeight:700,letterSpacing:"0.12em",
                  textTransform:"uppercase",color:C.muted,marginBottom:12}}>
                  FRQ Raw Score
                </div>
                <div style={{display:"flex",alignItems:"flex-end",gap:8,marginBottom:12}}>
                  <span style={{fontSize:mob?48:72,fontWeight:900,color:C.gold,lineHeight:1}}>{totalFRQEarned}</span>
                  <span style={{fontSize:28,color:C.muted,marginBottom:14}}>/ {totalFRQPossible}</span>
                </div>
                <div style={{display:"flex",alignItems:"center",gap:10}}>
                  <div style={{height:8,background:"rgba(255,255,255,0.07)",borderRadius:4,width:200,overflow:"hidden"}}>
                    <div style={{height:"100%",width:`${frqPct}%`,background:scoreColor,borderRadius:4,transition:"width 1.2s ease"}}/>
                  </div>
                  <span style={{fontSize:14,color:scoreColor,fontWeight:700}}>{frqPct}%</span>
                </div>
              </div>

              <div style={{textAlign:"center"}}>
                <div style={{fontSize:11,fontWeight:700,letterSpacing:"0.12em",
                  textTransform:"uppercase",color:C.muted,marginBottom:12}}>Estimated AP Score</div>
                <div style={{width:110,height:110,borderRadius:"50%",
                  border:`3px solid ${apColor}`,
                  background:`rgba(${apScore>=4?'0,245,160':apScore===3?'56,189,248':'255,71,87'},0.08)`,
                  display:"flex",flexDirection:"column",alignItems:"center",
                  justifyContent:"center",margin:"0 auto 12px",
                  boxShadow:`0 0 40px ${apColor}30`}}>
                  <span style={{fontSize:mob?36:52,fontWeight:900,color:apColor,lineHeight:1}}>{apScore}</span>
                </div>
                <div style={{fontSize:13,fontWeight:700,color:apColor,marginBottom:2}}>
                  {AP_SCORE_LABELS[apScore]}
                </div>
                <div style={{fontSize:11,color:C.muted}}>
                  {hasMC ? "MC + FRQ combined estimate" : "Based on FRQ section only"}
                </div>
              </div>
            </div>

            {/* AP Score scale */}
            <div style={{marginTop:28,paddingTop:24,borderTop:`1px solid ${C.border}`}}>
              <div style={{fontSize:11,fontWeight:600,letterSpacing:"0.08em",
                textTransform:"uppercase",color:C.muted,marginBottom:12}}>AP Score Scale</div>
              <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
                {[5,4,3,2,1].map(s=>(
                  <div key={s} style={{flex:1,minWidth:80,textAlign:"center",padding:"10px 6px",
                    borderRadius:10,transition:"all 0.2s",
                    background:s===apScore?apColor:"rgba(255,255,255,0.04)",
                    border:`1px solid ${s===apScore?apColor:C.border}`,
                    color:s===apScore?(apScore>=3?"#060b14":C.white):C.muted}}>
                    <div style={{fontSize:22,fontWeight:900,lineHeight:1}}>{s}</div>
                    <div style={{fontSize:9,lineHeight:1.3,marginTop:4,fontWeight:600}}>
                      {["No Rec.","Possibly","Qualified","Well Qual.","Extremely"][s-1]}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Per-section breakdown */}
            <div style={{marginTop:24,display:"flex",gap:12,flexWrap:"wrap"}}>
              {hasMC && (
                <div style={{flex:1,minWidth:80,textAlign:"center",
                  background:"rgba(255,255,255,0.03)",border:`1px solid ${C.border}`,
                  borderRadius:10,padding:"12px 8px"}}>
                  <div style={{fontSize:11,fontWeight:700,color:C.muted,
                    textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:6}}>MC</div>
                  <div style={{fontSize:22,fontWeight:800,color:C.b,lineHeight:1}}>
                    {mcCorrect}<span style={{fontSize:12,color:C.muted}}>/{mcTotal}</span>
                  </div>
                  <div style={{fontSize:10,color:"#475569",marginTop:4}}>Multiple Choice</div>
                </div>
              )}
              <div style={{flex:1,minWidth:80,textAlign:"center",
                background:"rgba(255,255,255,0.03)",border:`1px solid ${C.border}`,
                borderRadius:10,padding:"12px 8px"}}>
                <div style={{fontSize:11,fontWeight:700,color:C.muted,
                  textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:6}}>SAQ</div>
                <div style={{fontSize:22,fontWeight:800,color:saqEarned>=6?C.g:saqEarned>=3?C.b:saqEarned>0?"#FB923C":C.muted,lineHeight:1}}>
                  {saqEarned}<span style={{fontSize:12,color:C.muted}}>/{saqPossible}</span>
                </div>
                <div style={{fontSize:10,color:"#475569",marginTop:4}}>Short Answer</div>
              </div>
              <div style={{flex:1,minWidth:80,textAlign:"center",
                background:"rgba(255,255,255,0.03)",border:`1px solid ${C.border}`,
                borderRadius:10,padding:"12px 8px"}}>
                <div style={{fontSize:11,fontWeight:700,color:C.muted,
                  textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:6}}>DBQ</div>
                <div style={{fontSize:22,fontWeight:800,color:dbqEarned>=5?C.g:dbqEarned>=3?C.b:dbqEarned>0?"#FB923C":C.muted,lineHeight:1}}>
                  {dbqEarned}<span style={{fontSize:12,color:C.muted}}>/{dbqPossible}</span>
                </div>
                <div style={{fontSize:10,color:"#475569",marginTop:4}}>Document-Based</div>
              </div>
              <div style={{flex:1,minWidth:80,textAlign:"center",
                background:"rgba(255,255,255,0.03)",border:`1px solid ${C.border}`,
                borderRadius:10,padding:"12px 8px"}}>
                <div style={{fontSize:11,fontWeight:700,color:C.muted,
                  textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:6}}>LEQ</div>
                <div style={{fontSize:22,fontWeight:800,color:leqEarned>=5?C.g:leqEarned>=3?C.b:leqEarned>0?"#FB923C":C.muted,lineHeight:1}}>
                  {leqEarned}<span style={{fontSize:12,color:C.muted}}>/{leqPossible}</span>
                </div>
                <div style={{fontSize:10,color:"#475569",marginTop:4}}>Long Essay</div>
              </div>
            </div>

            {/* Download button */}
            <div style={{display:"flex",justifyContent:"center",marginTop:24}}>
              <button onClick={()=>generatePDF({test,saqAnswers,saqChoice,dbqAnswer,leqAnswer,leqOption,selfScores:{...aiScores,...manualScores},aiFeedback,mcAnswers,mcCorrect,mcTotal,answeredSAQs,dbqQuestion,leqQuestion,saqEarned,dbqEarned,leqEarned,totalFRQEarned,totalFRQPossible,frqPct,hasMC})}
                style={{width:280,background:"rgba(142,68,173,0.85)",color:"#fff",
                  border:"1px solid rgba(142,68,173,0.4)",padding:"13px 8px",borderRadius:10,
                  fontFamily:font,fontWeight:700,fontSize:14,cursor:"pointer",
                  display:"flex",alignItems:"center",justifyContent:"center",gap:8}}>
                📄 Download Report for Teacher
              </button>
            </div>
          </div>

          {/* MC Review */}
          {hasMC && (
            <div style={{marginBottom:20}}>
              <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:14}}>
                <div style={{width:3,height:20,background:C.b,borderRadius:2}}/>
                <span style={{fontWeight:700,fontSize:12,textTransform:"uppercase",
                  letterSpacing:"0.1em",color:C.b}}>Section I — Multiple Choice Review</span>
                <span style={{marginLeft:"auto",background:"rgba(56,189,248,0.1)",color:C.b,
                  border:"1px solid rgba(56,189,248,0.2)",borderRadius:6,
                  padding:"2px 10px",fontSize:12,fontWeight:700}}>
                  {mcCorrect} / {mcTotal} correct
                </span>
              </div>
              <div style={{display:"grid",gap:8}}>
                {test.mcQuestions.map(mq=>{
                  const chosen = mcAnswers?.[mq.num];
                  const correct = chosen === mq.answer;
                  const unanswered = !chosen;
                  return (
                    <div key={mq.num} style={{background:C.mid,
                      border:`1px solid ${correct?"rgba(0,245,160,0.25)":unanswered?"rgba(255,255,255,0.06)":"rgba(255,71,87,0.25)"}`,
                      borderRadius:10,padding:"14px 18px"}}>
                      <div style={{display:"flex",alignItems:"flex-start",gap:12}}>
                        <div style={{width:28,height:28,borderRadius:6,flexShrink:0,
                          background:correct?"rgba(0,245,160,0.12)":unanswered?"rgba(255,255,255,0.05)":"rgba(255,71,87,0.12)",
                          border:`1.5px solid ${correct?C.g:unanswered?C.border:C.r}`,
                          display:"flex",alignItems:"center",justifyContent:"center",
                          fontWeight:800,fontSize:12,
                          color:correct?C.g:unanswered?C.muted:C.r}}>
                          {correct?"✓":unanswered?"—":"✗"}
                        </div>
                        <div style={{flex:1}}>
                          <div style={{fontSize:11,fontWeight:700,textTransform:"uppercase",
                            letterSpacing:"0.06em",color:C.muted,marginBottom:4}}>
                            Q{mq.num} &middot; Set {mq.set}
                          </div>
                          <p style={{margin:"0 0 10px",fontSize:"0.88rem",lineHeight:1.6,
                            color:"rgba(255,255,255,0.85)"}}>{mq.stem}</p>
                          <div style={{display:"grid",gridTemplateColumns:mob?"1fr":"1fr 1fr",gap:6}}>
                            {Array.from({length:mq.choices.length/2},(_,i)=>{
                              const letter=mq.choices[i*2], text=mq.choices[i*2+1];
                              const isChosen=chosen===letter, isCorrect=mq.answer===letter;
                              let bg="rgba(255,255,255,0.03)", border=`1px solid ${C.border}`, col="rgba(255,255,255,0.7)";
                              if(isCorrect){bg="rgba(0,245,160,0.1)";border=`1px solid rgba(0,245,160,0.5)`;col=C.g;}
                              if(isChosen&&!isCorrect){bg="rgba(255,71,87,0.1)";border=`1px solid rgba(255,71,87,0.5)`;col=C.r;}
                              return (
                                <div key={letter} style={{display:"flex",alignItems:"flex-start",gap:8,
                                  background:bg,border,borderRadius:6,padding:"7px 10px"}}>
                                  <span style={{fontWeight:800,fontSize:12,color:col,flexShrink:0,minWidth:14}}>{letter}</span>
                                  <span style={{fontSize:12,color:col,lineHeight:1.45,flex:1}}>{text}</span>
                                  {isCorrect&&<span style={{fontSize:11,color:C.g,flexShrink:0}}>✓</span>}
                                  {isChosen&&!isCorrect&&<span style={{fontSize:11,color:C.r,flexShrink:0}}>✗</span>}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* SAQ Review */}
          <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:20}}>
            <div style={{width:3,height:20,background:C.g,borderRadius:2}}/>
            <span style={{fontWeight:700,fontSize:12,textTransform:"uppercase",
              letterSpacing:"0.1em",color:C.g}}>Short Answer Question Review</span>
          </div>

          {answeredSAQs.map(q=>(
            <div key={q.num} style={{marginBottom:14}}>
              <button onClick={()=>setExpanded(prev=>({...prev,[`saq-${q.num}`]:!prev[`saq-${q.num}`]}))}
                style={{width:"100%",background:C.mid,
                  border:`1px solid ${C.border}`,
                  borderRadius:expanded[`saq-${q.num}`]?"12px 12px 0 0":"12px",
                  padding:"16px 20px",display:"flex",alignItems:"center",
                  justifyContent:"space-between",cursor:"pointer",fontFamily:font,
                  color:C.white,textAlign:"left"}}>
                <div style={{display:"flex",alignItems:"center",gap:12}}>
                  <div style={{width:34,height:34,borderRadius:"50%",
                    background:"rgba(0,245,160,0.08)",border:`2px solid ${C.g}`,
                    display:"flex",alignItems:"center",justifyContent:"center",
                    fontWeight:800,fontSize:14,color:C.g}}>
                    {q.num}
                  </div>
                  <div>
                    <span style={{fontWeight:700,fontSize:14}}>{q.title}</span>
                    <span style={{fontSize:12,color:C.muted,marginLeft:8}}>&middot; {q.points} pts</span>
                    {!q.required && <span style={{fontSize:10,color:C.gold,fontWeight:700,
                      background:"rgba(255,214,10,0.12)",padding:"2px 8px",borderRadius:4,marginLeft:8}}>CHOICE</span>}
                  </div>
                </div>
                <div style={{display:"flex",alignItems:"center",gap:10}}>
                  <span style={{fontWeight:800,fontSize:16,color:C.g}}>
                    {q.parts.reduce((acc,p)=>{const s=getScore(`saq-${q.num}-${p.letter}`);return acc+(s??0);},0)}/{q.points}
                  </span>
                  <span style={{display:"inline-flex",alignItems:"center",justifyContent:"center",
                    width:32,height:32,borderRadius:8,
                    background:expanded[`saq-${q.num}`]?"rgba(0,245,160,0.12)":"rgba(255,255,255,0.06)",
                    border:`1.5px solid ${expanded[`saq-${q.num}`]?"rgba(0,245,160,0.3)":C.border}`,
                    transition:"all 0.2s",flexShrink:0}}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                      style={{transform:expanded[`saq-${q.num}`]?"rotate(180deg)":"rotate(0deg)",
                        transition:"transform 0.25s ease"}}>
                      <path d="M3 5.5L7 9.5L11 5.5" stroke={expanded[`saq-${q.num}`]?C.g:"#94a3b8"}
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </button>

              {expanded[`saq-${q.num}`] && (
                <div style={{background:"rgba(13,26,45,0.7)",border:`1px solid ${C.border}`,
                  borderTop:"none",borderRadius:"0 0 12px 12px",padding:mob?"12px 12px":"20px 24px"}}>
                  {q.parts.map(part => {
                    const key = `saq-${q.num}-${part.letter}`;
                    const answer = (saqAnswers[q.num] && saqAnswers[q.num][part.letter]) || "";
                    return (
                      <div key={part.letter} style={{marginBottom:20}}>
                        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}>
                          <span style={{width:24,height:24,borderRadius:4,
                            background:"rgba(0,245,160,0.12)",border:`1px solid ${C.g}`,
                            display:"flex",alignItems:"center",justifyContent:"center",
                            fontWeight:800,fontSize:11,color:C.g}}>{part.letter}</span>
                          <span style={{fontSize:12,fontWeight:700,color:C.muted}}>Part {part.letter}</span>
                        </div>
                        <div style={{fontSize:12,color:"rgba(255,255,255,0.6)",marginBottom:6,fontStyle:"italic"}}>
                          {part.prompt}
                        </div>
                        <div style={{background:"rgba(255,255,255,0.03)",border:`1px solid ${C.border}`,
                          borderRadius:8,padding:"10px 14px",fontSize:13,lineHeight:1.8,
                          color:"rgba(255,255,255,0.75)",whiteSpace:"pre-wrap",marginBottom:8,
                          minHeight:40,fontStyle:answer?"normal":"italic"}}>
                          {answer || "No response submitted."}
                        </div>
                        <div style={{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap"}}>
                          {loadingKeys[key]
                            ? <span style={{fontSize:12,color:C.b,display:"flex",alignItems:"center",gap:6}}>
                                <span style={{width:10,height:10,borderRadius:"50%",border:`2px solid ${C.b}`,
                                  borderTopColor:"transparent",animation:"spin 0.8s linear infinite",display:"inline-block"}}/>
                                AI scoring...
                              </span>
                            : <>
                                <span style={{fontSize:13,fontWeight:700,color:getScore(key)!==null?C.g:C.muted}}>
                                  AI Score: {getScore(key)??"-"} / 1
                                </span>
                                <span style={{fontSize:11,color:"#475569"}}>Override:</span>
                                {[0,1].map(sc=>(
                                  <button key={sc}
                                    onClick={()=>setManualScores(prev=>({...prev,[key]:sc}))}
                                    style={{width:28,height:28,borderRadius:"50%",border:"none",
                                      cursor:"pointer",fontFamily:font,fontSize:12,fontWeight:700,
                                      background:manualScores[key]===sc?C.gold:"rgba(255,255,255,0.06)",
                                      color:manualScores[key]===sc?C.bg:C.muted}}>
                                    {sc}
                                  </button>
                                ))}
                              </>
                          }
                        </div>
                        {loadingKeys[key] && <FeedbackBox loading/>}
                        {aiFeedback[key] && <FeedbackBox text={aiFeedback[key]}/>}
                      </div>
                    );
                  })}

                  {q.rubric && q.rubric.length > 0 && (
                  <div style={{border:`1px solid ${C.border}`,borderRadius:8,overflow:"hidden",marginTop:8}}>
                    <div style={{padding:"8px 14px",background:"rgba(255,255,255,0.04)",
                      borderBottom:`1px solid ${C.border}`,fontSize:11,fontWeight:700,
                      color:C.muted,textTransform:"uppercase",letterSpacing:"0.08em"}}>
                      Scoring Rubric
                    </div>
                    {q.rubric.map(row=>(
                      <div key={row.row} style={{padding:"12px 14px",
                        borderBottom:`1px solid rgba(30,41,59,0.5)`}}>
                        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:6}}>
                          <span style={{fontSize:12,fontWeight:800,color:C.b}}>Part {row.row}:</span>
                          <span style={{fontSize:13,fontWeight:700}}>{row.category}</span>
                          <span style={{fontSize:11,color:C.muted}}>({row.points} pt{row.points>1?"s":""})</span>
                        </div>
                        <div style={{fontSize:12,color:"rgba(255,255,255,0.55)",lineHeight:1.6}}>
                          {row.description}
                        </div>
                      </div>
                    ))}
                  </div>
                  )}
                </div>
              )}
            </div>
          ))}

          {/* DBQ Review */}
          {dbqQuestion && (
            <>
              <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:20,marginTop:8}}>
                <div style={{width:3,height:20,background:C.b,borderRadius:2}}/>
                <span style={{fontWeight:700,fontSize:12,textTransform:"uppercase",
                  letterSpacing:"0.1em",color:C.b}}>Document-Based Question Review</span>
              </div>

              <div style={{marginBottom:14}}>
                <button onClick={()=>setExpanded(prev=>({...prev,dbq:!prev.dbq}))}
                  style={{width:"100%",background:C.mid,
                    border:`1px solid ${C.border}`,
                    borderRadius:expanded.dbq?"12px 12px 0 0":"12px",
                    padding:"16px 20px",display:"flex",alignItems:"center",
                    justifyContent:"space-between",cursor:"pointer",fontFamily:font,
                    color:C.white,textAlign:"left"}}>
                  <div style={{display:"flex",alignItems:"center",gap:12}}>
                    <div style={{width:34,height:34,borderRadius:"50%",
                      background:"rgba(0,245,160,0.08)",border:`2px solid ${C.g}`,
                      display:"flex",alignItems:"center",justifyContent:"center",
                      fontWeight:800,fontSize:14,color:C.g}}>D</div>
                    <div>
                      <span style={{fontWeight:700,fontSize:14}}>{dbqQuestion.title}</span>
                      <span style={{fontSize:12,color:C.muted,marginLeft:8}}>&middot; {dbqQuestion.points} pts</span>
                    </div>
                  </div>
                  <div style={{display:"flex",alignItems:"center",gap:10}}>
                    <span style={{fontWeight:800,fontSize:16,color:getScore("dbq-total")!==null?C.g:C.muted}}>
                      {getScore("dbq-total")??"-"}/{dbqQuestion.points}
                    </span>
                    <span style={{display:"inline-flex",alignItems:"center",justifyContent:"center",
                      width:32,height:32,borderRadius:8,
                      background:expanded.dbq?"rgba(56,189,248,0.12)":"rgba(255,255,255,0.06)",
                      border:`1.5px solid ${expanded.dbq?"rgba(56,189,248,0.3)":C.border}`,
                      transition:"all 0.2s",flexShrink:0}}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                        style={{transform:expanded.dbq?"rotate(180deg)":"rotate(0deg)",
                          transition:"transform 0.25s ease"}}>
                        <path d="M3 5.5L7 9.5L11 5.5" stroke={expanded.dbq?C.b:"#94a3b8"}
                          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </div>
                </button>

                {expanded.dbq && (
                  <div style={{background:"rgba(13,26,45,0.7)",border:`1px solid ${C.border}`,
                    borderTop:"none",borderRadius:"0 0 12px 12px",padding:mob?"12px 12px":"20px 24px"}}>
                    <div style={{fontSize:13,fontWeight:700,color:C.muted,marginBottom:6}}>Prompt:</div>
                    <div style={{background:"rgba(255,255,255,0.03)",border:`1px solid ${C.border}`,
                      borderRadius:8,padding:"10px 14px",fontSize:13,lineHeight:1.6,
                      color:"rgba(255,255,255,0.7)",marginBottom:16,fontStyle:"italic"}}>
                      {dbqQuestion.prompt}
                    </div>
                    <div style={{fontSize:13,fontWeight:700,color:C.muted,marginBottom:6}}>Your essay:</div>
                    <div style={{background:"rgba(255,255,255,0.03)",border:`1px solid ${C.border}`,
                      borderRadius:8,padding:"14px 16px",fontSize:13,lineHeight:1.8,
                      color:"rgba(255,255,255,0.75)",whiteSpace:"pre-wrap",marginBottom:12,
                      minHeight:80,fontStyle:dbqAnswer?"normal":"italic"}}>
                      {dbqAnswer || "No response submitted."}
                    </div>
                    <div style={{fontSize:12,color:C.muted,marginBottom:12}}>
                      {(dbqAnswer||"").split(/\s+/).filter(Boolean).length} words
                    </div>

                    <div style={{border:`1px solid ${C.border}`,borderRadius:8,overflow:"hidden",marginBottom:14}}>
                      <div style={{padding:"8px 14px",background:"rgba(255,255,255,0.04)",
                        borderBottom:`1px solid ${C.border}`,fontSize:11,fontWeight:700,
                        color:C.muted,textTransform:"uppercase",letterSpacing:"0.08em"}}>
                        Scoring Rubric
                      </div>
                      {dbqQuestion.rubric.map(row=>(
                        <div key={row.row} style={{padding:"12px 14px",
                          borderBottom:`1px solid rgba(30,41,59,0.5)`}}>
                          <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:6}}>
                            <span style={{fontSize:12,fontWeight:800,color:C.b}}>Row {row.row}:</span>
                            <span style={{fontSize:13,fontWeight:700}}>{row.category}</span>
                            <span style={{fontSize:11,color:C.muted}}>({row.points} pt{row.points>1?"s":""})</span>
                          </div>
                          <div style={{fontSize:12,color:"rgba(255,255,255,0.55)",lineHeight:1.6}}>
                            {row.description}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div style={{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap"}}>
                      {loadingKeys["dbq-total"]
                        ? <span style={{fontSize:12,color:C.b,display:"flex",alignItems:"center",gap:6}}>
                            <span style={{width:10,height:10,borderRadius:"50%",border:`2px solid ${C.b}`,
                              borderTopColor:"transparent",animation:"spin 0.8s linear infinite",display:"inline-block"}}/>
                            AI scoring...
                          </span>
                        : <>
                            <span style={{fontSize:13,fontWeight:700,color:getScore("dbq-total")!==null?C.g:C.muted}}>
                              AI Score: {getScore("dbq-total")??"-"} / {dbqQuestion.points}
                            </span>
                            <span style={{fontSize:11,color:"#475569"}}>Override:</span>
                            {[...Array(dbqQuestion.points+1)].map((_,sc)=>(
                              <button key={sc}
                                onClick={()=>setManualScores(prev=>({...prev,["dbq-total"]:sc}))}
                                style={{width:28,height:28,borderRadius:"50%",border:"none",
                                  cursor:"pointer",fontFamily:font,fontSize:12,fontWeight:700,
                                  background:manualScores["dbq-total"]===sc?C.gold:"rgba(255,255,255,0.06)",
                                  color:manualScores["dbq-total"]===sc?C.bg:C.muted}}>
                                {sc}
                              </button>
                            ))}
                          </>
                      }
                    </div>
                    {loadingKeys["dbq-total"] && <FeedbackBox loading/>}
                    {aiFeedback["dbq-total"] && <FeedbackBox text={aiFeedback["dbq-total"]}/>}
                  </div>
                )}
              </div>
            </>
          )}

          {/* LEQ Review */}
          {leqQuestion && (
            <>
              <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:20,marginTop:8}}>
                <div style={{width:3,height:20,background:"#FB923C",borderRadius:2}}/>
                <span style={{fontWeight:700,fontSize:12,textTransform:"uppercase",
                  letterSpacing:"0.1em",color:"#FB923C"}}>Long Essay Question Review</span>
              </div>

              <div style={{marginBottom:14}}>
                <button onClick={()=>setExpanded(prev=>({...prev,leq:!prev.leq}))}
                  style={{width:"100%",background:C.mid,
                    border:`1px solid ${C.border}`,
                    borderRadius:expanded.leq?"12px 12px 0 0":"12px",
                    padding:"16px 20px",display:"flex",alignItems:"center",
                    justifyContent:"space-between",cursor:"pointer",fontFamily:font,
                    color:C.white,textAlign:"left"}}>
                  <div style={{display:"flex",alignItems:"center",gap:12}}>
                    <div style={{width:34,height:34,borderRadius:"50%",
                      background:"rgba(251,146,60,0.08)",border:`2px solid #FB923C`,
                      display:"flex",alignItems:"center",justifyContent:"center",
                      fontWeight:800,fontSize:14,color:"#FB923C"}}>L</div>
                    <div>
                      <span style={{fontWeight:700,fontSize:14}}>{leqQuestion.title}</span>
                      <span style={{fontSize:12,color:C.muted,marginLeft:8}}>&middot; {leqQuestion.points} pts</span>
                    </div>
                  </div>
                  <div style={{display:"flex",alignItems:"center",gap:10}}>
                    <span style={{fontWeight:800,fontSize:16,color:getScore("leq-total")!==null?C.g:C.muted}}>
                      {getScore("leq-total")??"-"}/{leqQuestion.points}
                    </span>
                    <span style={{display:"inline-flex",alignItems:"center",justifyContent:"center",
                      width:32,height:32,borderRadius:8,
                      background:expanded.leq?"rgba(251,146,60,0.12)":"rgba(255,255,255,0.06)",
                      border:`1.5px solid ${expanded.leq?"rgba(251,146,60,0.3)":C.border}`,
                      transition:"all 0.2s",flexShrink:0}}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                        style={{transform:expanded.leq?"rotate(180deg)":"rotate(0deg)",
                          transition:"transform 0.25s ease"}}>
                        <path d="M3 5.5L7 9.5L11 5.5" stroke={expanded.leq?"#FB923C":"#94a3b8"}
                          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </div>
                </button>

                {expanded.leq && (
                  <div style={{background:"rgba(13,26,45,0.7)",border:`1px solid ${C.border}`,
                    borderTop:"none",borderRadius:"0 0 12px 12px",padding:mob?"12px 12px":"20px 24px"}}>
                    {leqOption !== null && (
                      <>
                        <div style={{fontSize:13,fontWeight:700,color:C.muted,marginBottom:6}}>
                          Selected Prompt (Option {leqOption}):
                        </div>
                        <div style={{background:"rgba(255,255,255,0.03)",border:`1px solid ${C.border}`,
                          borderRadius:8,padding:"10px 14px",fontSize:13,lineHeight:1.6,
                          color:"rgba(255,255,255,0.7)",marginBottom:16,fontStyle:"italic"}}>
                          {leqQuestion.options.find(o=>o.id===leqOption)?.prompt || ""}
                        </div>
                      </>
                    )}
                    <div style={{fontSize:13,fontWeight:700,color:C.muted,marginBottom:6}}>Your essay:</div>
                    <div style={{background:"rgba(255,255,255,0.03)",border:`1px solid ${C.border}`,
                      borderRadius:8,padding:"14px 16px",fontSize:13,lineHeight:1.8,
                      color:"rgba(255,255,255,0.75)",whiteSpace:"pre-wrap",marginBottom:12,
                      minHeight:80,fontStyle:leqAnswer?"normal":"italic"}}>
                      {leqAnswer || "No response submitted."}
                    </div>
                    <div style={{fontSize:12,color:C.muted,marginBottom:12}}>
                      {(leqAnswer||"").split(/\s+/).filter(Boolean).length} words
                    </div>

                    <div style={{border:`1px solid ${C.border}`,borderRadius:8,overflow:"hidden",marginBottom:14}}>
                      <div style={{padding:"8px 14px",background:"rgba(255,255,255,0.04)",
                        borderBottom:`1px solid ${C.border}`,fontSize:11,fontWeight:700,
                        color:C.muted,textTransform:"uppercase",letterSpacing:"0.08em"}}>
                        Scoring Rubric
                      </div>
                      {leqQuestion.rubric.map(row=>(
                        <div key={row.row} style={{padding:"12px 14px",
                          borderBottom:`1px solid rgba(30,41,59,0.5)`}}>
                          <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:6}}>
                            <span style={{fontSize:12,fontWeight:800,color:C.b}}>Row {row.row}:</span>
                            <span style={{fontSize:13,fontWeight:700}}>{row.category}</span>
                            <span style={{fontSize:11,color:C.muted}}>({row.points} pt{row.points>1?"s":""})</span>
                          </div>
                          <div style={{fontSize:12,color:"rgba(255,255,255,0.55)",lineHeight:1.6}}>
                            {row.description}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div style={{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap"}}>
                      {loadingKeys["leq-total"]
                        ? <span style={{fontSize:12,color:C.b,display:"flex",alignItems:"center",gap:6}}>
                            <span style={{width:10,height:10,borderRadius:"50%",border:`2px solid ${C.b}`,
                              borderTopColor:"transparent",animation:"spin 0.8s linear infinite",display:"inline-block"}}/>
                            AI scoring...
                          </span>
                        : <>
                            <span style={{fontSize:13,fontWeight:700,color:getScore("leq-total")!==null?C.g:C.muted}}>
                              AI Score: {getScore("leq-total")??"-"} / {leqQuestion.points}
                            </span>
                            <span style={{fontSize:11,color:"#475569"}}>Override:</span>
                            {[...Array(leqQuestion.points+1)].map((_,sc)=>(
                              <button key={sc}
                                onClick={()=>setManualScores(prev=>({...prev,["leq-total"]:sc}))}
                                style={{width:28,height:28,borderRadius:"50%",border:"none",
                                  cursor:"pointer",fontFamily:font,fontSize:12,fontWeight:700,
                                  background:manualScores["leq-total"]===sc?C.gold:"rgba(255,255,255,0.06)",
                                  color:manualScores["leq-total"]===sc?C.bg:C.muted}}>
                                {sc}
                              </button>
                            ))}
                          </>
                      }
                    </div>
                    {loadingKeys["leq-total"] && <FeedbackBox loading/>}
                    {aiFeedback["leq-total"] && <FeedbackBox text={aiFeedback["leq-total"]}/>}
                  </div>
                )}
              </div>
            </>
          )}

          {/* Bottom Action Buttons */}
          <div style={{display:"flex",gap:10,width:"100%",marginTop:32}}>
            <button onClick={onRetry}
              style={{flex:1,background:"rgba(39,174,96,0.85)",color:"#fff",
                border:"1px solid rgba(39,174,96,0.35)",padding:"13px 8px",borderRadius:10,
                fontFamily:font,fontSize:13,fontWeight:700,whiteSpace:"nowrap",cursor:"pointer"}}>
              ↻ Retry This Test
            </button>
            <button onClick={()=>generatePDF({test,saqAnswers,saqChoice,dbqAnswer,leqAnswer,leqOption,selfScores:{...aiScores,...manualScores},aiFeedback,mcAnswers,mcCorrect,mcTotal,answeredSAQs,dbqQuestion,leqQuestion,saqEarned,dbqEarned,leqEarned,totalFRQEarned,totalFRQPossible,frqPct,hasMC})}
              style={{flex:1,background:"rgba(142,68,173,0.85)",color:"#fff",
                border:"1px solid rgba(142,68,173,0.35)",padding:"13px 8px",borderRadius:10,
                fontFamily:font,fontSize:13,fontWeight:700,whiteSpace:"nowrap",cursor:"pointer"}}>
              📄 Download &amp; Save for Teacher
            </button>
            <button onClick={onHome}
              style={{flex:1,background:"rgba(56,189,248,0.85)",color:"#fff",
                border:"1px solid rgba(56,189,248,0.35)",padding:"13px 8px",borderRadius:10,
                fontFamily:font,fontSize:13,fontWeight:700,whiteSpace:"nowrap",cursor:"pointer"}}>
              &larr; All Exams
            </button>
          </div>

          <div style={{marginTop:36,textAlign:"center",fontSize:11,
            color:"rgba(148,163,184,0.3)",lineHeight:1.65}}>
            AP® is a trademark registered by the College Board. This simulator is not affiliated with or endorsed by College Board.<br/>
            Results, scores, and AI feedback are for practice purposes only.
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Generate PDF Report ───────────────────────────────────────────────────
function generatePDFHTML({ test, saqAnswers, saqChoice, dbqAnswer, leqAnswer, leqOption, selfScores, aiFeedback, mcAnswers, mcCorrect, mcTotal, answeredSAQs, dbqQuestion, leqQuestion, saqEarned, dbqEarned, leqEarned, totalFRQEarned, totalFRQPossible, frqPct, hasMC }) {
  const esc = str => (str||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
  const nl2br = str => esc(str).split("\n").join("<br/>");
  const today = new Date().toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});
  const mcPct = mcTotal ? Math.round((mcCorrect/mcTotal)*100) : 0;

  const mcBlock = hasMC ? `
    <div class="task-card" style="margin-bottom:14px;">
      <div class="task-hdr" style="background:#1a3a5c;">
        <div class="task-num" style="border-color:#38bdf8;color:#38bdf8;">I</div>
        <div>
          <div class="task-hdr-lbl">Section I</div>
          <div class="task-hdr-name">Multiple Choice · 55 Questions · 55 Minutes</div>
        </div>
        <div class="task-score" style="color:#38bdf8;">${mcCorrect} / ${mcTotal}</div>
      </div>
      <div class="task-body">
        <div style="display:flex;align-items:center;gap:16px;padding:10px 0 14px;border-bottom:1px solid #eee;margin-bottom:18px;">
          <div style="font-size:32px;font-weight:800;font-family:monospace;color:#111;">${mcCorrect}<span style="font-size:16px;color:#888;">/${mcTotal}</span></div>
          <div style="flex:1;background:#eee;height:10px;border-radius:5px;overflow:hidden;">
            <div style="height:100%;width:${mcPct}%;background:${mcPct>=70?"#27ae60":mcPct>=50?"#e67e22":"#e74c3c"};border-radius:5px;"></div>
          </div>
          <div style="font-size:15px;font-weight:700;color:${mcPct>=70?"#27ae60":mcPct>=50?"#e67e22":"#e74c3c"};">${mcPct}%</div>
        </div>
        ${(test.mcQuestions||[]).map(mq=>{
          const chosen = mcAnswers?.[mq.num];
          const isCorrect = chosen === mq.answer;
          const unanswered = !chosen;
          const borderCol = isCorrect?"#b8e4c8":unanswered?"#ddd":"#f5c6c6";
          const hdrBg = isCorrect?"#e8f8f0":unanswered?"#f9f9f9":"#fdf0f0";
          const statusCol = isCorrect?"#27ae60":unanswered?"#999":"#e74c3c";
          const statusLabel = isCorrect?"✓ Correct":unanswered?"– Not answered":"✗ Incorrect";
          const setInfo = test.mcSets ? test.mcSets.find(s => s.setNum === mq.set) : null;
          const stimNote = setInfo ? `<div style="font-style:italic;font-size:10.5px;color:#555;padding:6px 12px;background:#f7f7f2;border-bottom:1px solid #e8e8e0;">Set ${mq.set}: ${esc(setInfo.title||"")}</div>` : "";
          return `<div style="border:1px solid ${borderCol};border-radius:6px;margin-bottom:10px;overflow:hidden;page-break-inside:avoid;">
            <div style="display:flex;justify-content:space-between;align-items:center;padding:6px 12px;background:${hdrBg};border-bottom:1px solid ${borderCol};">
              <div style="font-size:9.5px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#777;">Q${mq.num}</div>
              <div style="font-size:11px;font-weight:800;color:${statusCol};">${statusLabel}</div>
            </div>
            ${stimNote}
            <div style="padding:10px 12px 6px;">
              <div style="font-size:12px;font-weight:600;color:#111;line-height:1.6;margin-bottom:10px;">${esc(mq.stem)}</div>
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px 12px;">
                ${Array.from({length:mq.choices.length/2},(_,i)=>{
                  const letter = mq.choices[i*2];
                  const text   = mq.choices[i*2+1];
                  const isChosen  = chosen === letter;
                  const isAnsKey  = mq.answer === letter;
                  let bg="#fff", border="#ddd", col="#333", badge="";
                  if(isAnsKey && isChosen) { bg="#e8f8f0"; border="#27ae60"; col="#27ae60"; badge='<span style="margin-left:6px;font-size:9px;font-weight:700;color:#27ae60;white-space:nowrap;">✓ Correct</span>'; }
                  else if(isAnsKey)        { bg="#e8f8f0"; border="#27ae60"; col="#27ae60"; badge='<span style="margin-left:6px;font-size:9px;font-weight:700;color:#27ae60;white-space:nowrap;">✓ Answer</span>'; }
                  else if(isChosen)        { bg="#fdf0f0"; border="#e74c3c"; col="#e74c3c"; badge='<span style="margin-left:6px;font-size:9px;font-weight:700;color:#e74c3c;white-space:nowrap;">✗ Selected</span>'; }
                  return `<div style="display:flex;align-items:flex-start;gap:7px;padding:5px 8px;background:${bg};border:1px solid ${border};border-radius:4px;">
                    <span style="font-weight:800;font-size:11px;color:${col};flex-shrink:0;min-width:14px;">${letter}</span>
                    <span style="font-size:11px;color:${col};line-height:1.4;flex:1;">${esc(text)}${badge}</span>
                  </div>`;
                }).join("")}
              </div>
            </div>
          </div>`;
        }).join("")}
      </div>
    </div>` : "";

  const saqBlocks = answeredSAQs.map(q => {
    const partsHtml = q.parts.map(part => {
      const key = `saq-${q.num}-${part.letter}`;
      const answer = (saqAnswers[q.num] && saqAnswers[q.num][part.letter]) || "";
      const score = selfScores[key] ?? 0;
      const fb = aiFeedback[key] || "";
      return `<div style="margin-bottom:12px;padding:10px 14px;border:1px solid #ccc;border-radius:4px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
          <strong>Part ${part.letter}</strong>
          <span class="score-chip">Score: ${score} / 1</span>
        </div>
        <div style="font-size:11px;color:#555;margin-bottom:6px;font-style:italic;">${esc(part.prompt)}</div>
        <div class="response-wrap">
          <div class="response-hdr">✏ Response · ${answer.split(/\s+/).filter(Boolean).length} words</div>
          <div class="response-body ${!answer.trim()?"empty":""}">${answer.trim()?nl2br(answer):"No response submitted."}</div>
        </div>
        ${fb?`<div class="ai-fb"><span class="ai-fb-label">✦ AI Feedback</span>${nl2br(fb)}</div>`:""}
      </div>`;
    }).join("");

    return `<div class="task-card">
      <div class="task-hdr">
        <div class="task-num">${q.num}</div>
        <div>
          <div class="task-hdr-lbl">Short Answer Question</div>
          <div class="task-hdr-name">${esc(q.title)} · ${q.points} points</div>
        </div>
        <div class="task-score">${q.parts.reduce((acc,p)=>{return acc+(selfScores[`saq-${q.num}-${p.letter}`]??0);},0)} / ${q.points}</div>
      </div>
      <div class="task-body">${partsHtml}</div>
    </div>`;
  }).join("");

  const dbqBlock = dbqQuestion ? (() => {
    const key = "dbq-total";
    const score = selfScores[key] ?? 0;
    const fb = aiFeedback[key] || "";
    return `<div class="task-card">
      <div class="task-hdr">
        <div class="task-num">D</div>
        <div>
          <div class="task-hdr-lbl">Document-Based Question</div>
          <div class="task-hdr-name">${esc(dbqQuestion.title)} · ${dbqQuestion.points} points</div>
        </div>
        <div class="task-score">${score} / ${dbqQuestion.points}</div>
      </div>
      <div class="task-body">
        <div class="sec-label">Prompt</div>
        <div style="font-size:12px;color:#444;margin-bottom:10px;font-style:italic;">${esc(dbqQuestion.prompt)}</div>
        <div class="sec-label">Student Essay</div>
        <div class="response-wrap">
          <div class="response-hdr">✏ Written response · ${(dbqAnswer||"").split(/\s+/).filter(Boolean).length} words</div>
          <div class="response-body ${!(dbqAnswer||"").trim()?"empty":""}">${(dbqAnswer||"").trim()?nl2br(dbqAnswer):"No response submitted."}</div>
        </div>
        <div class="rubric-table">
          <div class="rubric-hdr">Scoring Rubric</div>
          ${dbqQuestion.rubric.map(row=>`<div class="rubric-row">
            <div class="rubric-row-hdr">
              <span class="rubric-label">Row ${row.row}: ${esc(row.category)}</span>
              <span class="rubric-pts">${row.points} pt${row.points>1?"s":""}</span>
            </div>
            <div class="rubric-desc">${esc(row.description)}</div>
          </div>`).join("")}
        </div>
        <div class="score-row"><span class="score-chip">AI Score: ${score} / ${dbqQuestion.points}</span></div>
        ${fb?`<div class="ai-fb"><span class="ai-fb-label">✦ AI Feedback</span>${nl2br(fb)}</div>`:""}
      </div>
    </div>`;
  })() : "";

  const leqBlock = leqQuestion ? (() => {
    const key = "leq-total";
    const score = selfScores[key] ?? 0;
    const fb = aiFeedback[key] || "";
    const chosenPrompt = leqOption !== null ? (leqQuestion.options.find(o=>o.id===leqOption)?.prompt || "") : "";
    return `<div class="task-card">
      <div class="task-hdr">
        <div class="task-num">L</div>
        <div>
          <div class="task-hdr-lbl">Long Essay Question</div>
          <div class="task-hdr-name">${esc(leqQuestion.title)} · ${leqQuestion.points} points ${leqOption!==null?`· Option ${leqOption}`:""}</div>
        </div>
        <div class="task-score">${score} / ${leqQuestion.points}</div>
      </div>
      <div class="task-body">
        ${chosenPrompt?`<div class="sec-label">Prompt (Option ${leqOption})</div>
        <div style="font-size:12px;color:#444;margin-bottom:10px;font-style:italic;">${esc(chosenPrompt)}</div>`:""}
        <div class="sec-label">Student Essay</div>
        <div class="response-wrap">
          <div class="response-hdr">✏ Written response · ${(leqAnswer||"").split(/\s+/).filter(Boolean).length} words</div>
          <div class="response-body ${!(leqAnswer||"").trim()?"empty":""}">${(leqAnswer||"").trim()?nl2br(leqAnswer):"No response submitted."}</div>
        </div>
        <div class="rubric-table">
          <div class="rubric-hdr">Scoring Rubric</div>
          ${leqQuestion.rubric.map(row=>`<div class="rubric-row">
            <div class="rubric-row-hdr">
              <span class="rubric-label">Row ${row.row}: ${esc(row.category)}</span>
              <span class="rubric-pts">${row.points} pt${row.points>1?"s":""}</span>
            </div>
            <div class="rubric-desc">${esc(row.description)}</div>
          </div>`).join("")}
        </div>
        <div class="score-row"><span class="score-chip">AI Score: ${score} / ${leqQuestion.points}</span></div>
        ${fb?`<div class="ai-fb"><span class="ai-fb-label">✦ AI Feedback</span>${nl2br(fb)}</div>`:""}
      </div>
    </div>`;
  })() : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<title>AP World History: Modern — ${esc(test.label)} · Teacher Review</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
  *{box-sizing:border-box;margin:0;padding:0}
  body{font-family:'Inter',Arial,sans-serif;color:#111;background:white;font-size:12.5px;line-height:1.6}
  @page{size:A4;margin:14mm 13mm}
  @media print{-webkit-print-color-adjust:exact;print-color-adjust:exact;.no-print{display:none}}
  .cover{border:1px solid #ccc;border-top:4px solid #111;padding:22px 26px 18px;margin-bottom:14px}
  .cover-top{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px}
  .cover-name{font-size:18px;font-weight:700;margin-bottom:3px}
  .cover-sub{font-size:11.5px;color:#555}
  .cover-stamp{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;border:2px solid #111;padding:4px 10px;white-space:nowrap}
  .cover-pills{display:flex;flex-wrap:wrap;gap:5px;margin-bottom:12px}
  .pill{font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:0.07em;border:1px solid #888;padding:2px 8px;color:#555;background:#f4f4f4}
  .cover-score{display:flex;align-items:center;gap:16px;padding:12px 16px;background:#f4f4f4;border:1px solid #ccc;border-radius:4px;margin-bottom:10px}
  .cover-score-num{font-size:36px;font-weight:800;font-family:monospace;color:#111}
  .cover-score-of{font-size:16px;color:#555}
  .cover-score-pct{font-size:14px;font-weight:700;color:${frqPct>=70?"#27ae60":frqPct>=50?"#e67e22":"#e74c3c"}}
  .cover-note{font-size:11px;color:#444;border-top:1px solid #ccc;padding-top:10px;line-height:1.65}
  .task-card{border:1px solid #ccc;margin-bottom:14px;page-break-inside:avoid}
  .task-hdr{display:flex;align-items:center;gap:10px;padding:10px 16px;background:#111;color:white}
  .task-num{width:28px;height:28px;border-radius:3px;border:2px solid white;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800;flex-shrink:0}
  .task-hdr-lbl{font-size:9px;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;color:#aaa;margin-bottom:1px}
  .task-hdr-name{font-size:12.5px;font-weight:700}
  .task-score{margin-left:auto;font-size:16px;font-weight:800;font-family:monospace;white-space:nowrap;color:white}
  .task-body{padding:16px 18px}
  .sec-label{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:#777;margin-bottom:6px;display:flex;align-items:center;gap:7px}
  .sec-label::after{content:'';flex:1;height:1px;background:#ccc}
  .response-wrap{border:1px solid #888;margin-bottom:10px}
  .response-hdr{padding:5px 11px;background:#ebebeb;border-bottom:1px solid #ccc;font-size:9.5px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#555}
  .response-body{padding:12px 14px;font-size:13px;line-height:1.9;white-space:pre-wrap;word-break:break-word;min-height:80px;font-family:'Georgia',serif;font-style:italic;background-image:repeating-linear-gradient(transparent,transparent 29px,#ddd 29px,#ddd 30px);background-size:100% 30px}
  .response-body.empty{color:#aaa;font-style:italic;font-family:'Inter',Arial,sans-serif;background-image:none;background:#f9f9f9;min-height:48px}
  .rubric-table{border:1px solid #ccc;margin-bottom:10px}
  .rubric-hdr{padding:7px 12px;background:#ebebeb;font-size:9.5px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#555;border-bottom:1px solid #ccc}
  .rubric-row{padding:10px 12px;border-bottom:1px solid #eee}
  .rubric-row:last-child{border-bottom:none}
  .rubric-row-hdr{display:flex;justify-content:space-between;align-items:center;margin-bottom:4px}
  .rubric-label{font-size:12px;font-weight:700;color:#111}
  .rubric-pts{font-size:11px;font-weight:700;font-family:monospace;color:#111;background:#f4f4f4;border:1px solid #ccc;padding:1px 8px;border-radius:2px}
  .rubric-desc{font-size:11.5px;color:#444;line-height:1.55}
  .score-row{display:flex;align-items:flex-start;gap:12px;flex-wrap:wrap;margin-top:6px}
  .score-chip{background:#111;color:white;font-size:11px;font-weight:700;font-family:monospace;padding:3px 10px;border-radius:3px}
  .ai-fb{background:#eef6ff;border:1px solid #b3d4f5;border-left:3px solid #3498db;padding:8px 12px;font-size:11.5px;color:#1a3a5c;line-height:1.6;margin-top:8px}
  .ai-fb-label{display:block;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#3498db;margin-bottom:4px}
  .doc-footer{text-align:center;font-size:10px;color:#aaa;padding-top:12px;border-top:1px solid #ccc;margin-top:8px;font-style:italic}
  .print-btn{position:fixed;bottom:18px;right:18px;background:#111;color:white;border:none;border-radius:4px;padding:9px 18px;font-size:12px;font-weight:700;cursor:pointer;font-family:inherit;box-shadow:0 3px 10px rgba(0,0,0,0.25);z-index:1000}
</style>
</head>
<body style="padding:20px 24px;">
<div class="cover">
  <div class="cover-top">
    <div>
      <div class="cover-name">AP World History: Modern${hasMC?" — Full Practice Exam":" — FRQ Practice"}</div>
      <div class="cover-sub">Teacher Review Copy · ${esc(test.label)} · <strong>Not an official College Board document</strong></div>
    </div>
    <div class="cover-stamp">Teacher Copy</div>
  </div>
  <div class="cover-pills">
    ${hasMC?`<span class="pill">Section I — 55 Multiple Choice</span>`:""}
    <span class="pill">SAQ — Short Answer</span>
    <span class="pill">DBQ — Document-Based</span>
    <span class="pill">LEQ — Long Essay</span>
  </div>
  ${hasMC?`
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px;">
    <div class="cover-score" style="margin-bottom:0;">
      <div>
        <div style="font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#3498db;margin-bottom:4px;">Section I — MC</div>
        <span class="cover-score-num" style="font-size:28px;color:#3498db;">${mcCorrect}</span>
        <span class="cover-score-of" style="font-size:13px;">/ ${mcTotal}</span>
        <span class="cover-score-pct" style="color:${mcPct>=70?"#27ae60":mcPct>=50?"#e67e22":"#e74c3c"};">${mcPct}%</span>
      </div>
    </div>
    <div class="cover-score" style="margin-bottom:0;">
      <div>
        <div style="font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#888;margin-bottom:4px;">FRQ Score</div>
        <span class="cover-score-num" style="font-size:28px;">${totalFRQEarned}</span>
        <span class="cover-score-of" style="font-size:13px;">/ ${totalFRQPossible}</span>
        <span class="cover-score-pct">${frqPct}%</span>
      </div>
    </div>
  </div>`:`
  <div class="cover-score">
    <span class="cover-score-num">${totalFRQEarned}</span>
    <span class="cover-score-of">/ ${totalFRQPossible} points</span>
    <span class="cover-score-pct">${frqPct}%</span>
  </div>`}
  <div class="cover-note">
    <strong>⚠️ Practice document only — not an official College Board exam.</strong> Each section shows the original prompt followed by the student's response and AI score. Generated: ${today}
  </div>
</div>
${mcBlock}
${saqBlocks}
${dbqBlock}
${leqBlock}
<div class="doc-footer">
  Generated by AP World History: Modern Exam Simulator · For classroom practice only · Not affiliated with, endorsed by, or representative of College Board or any official AP exam
</div>
<button class="print-btn no-print" onclick="window.print()">🖨️ Print / Save PDF</button>
</body>
</html>`;
}

function generatePDF(data) {
  const html = generatePDFHTML(data);
  const win = window.open("", "_blank");
  if (win) {
    win.document.open();
    win.document.write(html);
    win.document.close();
  } else {
    const blob = new Blob([html], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "teacher-report-ap-world-history.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 10000);
  }
}

// ── BetaBanner ────────────────────────────────────────────────────────────
function BetaBanner() {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;
  return (
    <div style={{
      position:"fixed", top:0, left:0, right:0, zIndex:9999,
      background:"linear-gradient(90deg, #4f46e5 0%, #7c3aed 50%, #6d28d9 100%)",
      borderBottom:"1px solid rgba(255,255,255,0.1)",
      padding:"8px 16px",
      display:"flex", alignItems:"center", justifyContent:"center", gap:10,
      fontFamily:font, fontSize:13, color:"rgba(255,255,255,0.9)",
    }}>
      <div style={{width:32, flexShrink:0}}/>
      <div style={{display:"flex", alignItems:"center", gap:10, flexWrap:"wrap", justifyContent:"center"}}>
        <span style={{
          background:"white", color:"#4f46e5",
          fontSize:10, fontWeight:800, letterSpacing:"0.08em",
          textTransform:"uppercase", padding:"2px 7px", borderRadius:4, flexShrink:0,
        }}>BETA</span>
        <span style={{color:"rgba(255,255,255,0.9)"}}>
          This simulator is in beta. Found a bug or have feedback?{" "}
          <a href="mailto:apexamsimulator@gmail.com"
            style={{color:"white", fontWeight:700, textDecoration:"none"}}>
            apexamsimulator@gmail.com
          </a>
        </span>
      </div>
      <button onClick={()=>setDismissed(true)} style={{
        background:"none", border:"none", color:"rgba(255,255,255,0.6)",
        cursor:"pointer", fontSize:18, lineHeight:1, padding:"2px 4px",
        flexShrink:0, width:32,
      }}>
        &times;
      </button>
    </div>
  );
}

// ── ErrorBoundary ─────────────────────────────────────────────────────────
class ErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { hasError: false, error: null }; }
  static getDerivedStateFromError(error) { return { hasError: true, error }; }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{minHeight:"100vh",background:gradient,fontFamily:font,color:C.white,
          display:"flex",alignItems:"center",justifyContent:"center",padding:40}}>
          <div style={{textAlign:"center",maxWidth:500}}>
            <div style={{fontSize:48,marginBottom:20}}>⚠️</div>
            <h2 style={{fontSize:24,fontWeight:800,marginBottom:12}}>Something went wrong</h2>
            <p style={{color:C.muted,fontSize:14,lineHeight:1.6,marginBottom:24}}>
              {this.state.error?.message || "An unexpected error occurred."}
            </p>
            <button onClick={()=>window.location.reload()}
              style={{background:C.g,color:C.bg,border:"none",padding:"12px 28px",
                borderRadius:10,fontFamily:font,fontWeight:700,fontSize:14,cursor:"pointer"}}>
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// ── Main App ──────────────────────────────────────────────────────────────
export default function App() {
  const [screen, setScreen] = useState("landing");
  const [selectedTest, setSelectedTest] = useState(null);
  return (
    <ErrorBoundary>
      <BetaBanner/>
      <div style={{paddingTop:40}}>
        {screen==="exam" && selectedTest
          ? <ExamScreen test={selectedTest} onFinish={()=>{setSelectedTest(null);setScreen("landing");}}/>
          : <LandingScreen onSelect={t=>{setSelectedTest(t);setScreen("exam");}}/>
        }
      </div>
    </ErrorBoundary>
  );
}
