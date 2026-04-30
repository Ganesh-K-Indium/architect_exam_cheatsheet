export type ColorKey = "purple" | "blue" | "emerald" | "amber" | "rose";

export interface ModelInfo {
  name: string;
  id: string;
  context: string;
  maxOutput: string;
  speed: string;
  bestFor: string;
  extendedThinking: boolean;
  pricing: string;
}

export const models: ModelInfo[] = [
  {
    name: "Claude Opus 4.7",
    id: "claude-opus-4-7",
    context: "1M tokens",
    maxOutput: "128k tokens",
    speed: "Moderate",
    bestFor: "Most complex reasoning, agentic coding — recommended with effort:'xhigh'",
    extendedThinking: false,
    pricing: "$5 in / $25 out per MTok",
  },
  {
    name: "Claude Sonnet 4.6",
    id: "claude-sonnet-4-6",
    context: "1M tokens",
    maxOutput: "64k tokens",
    speed: "Fast",
    bestFor: "Best speed + intelligence balance for most production agents",
    extendedThinking: true,
    pricing: "$3 in / $15 out per MTok",
  },
  {
    name: "Claude Haiku 4.5",
    id: "claude-haiku-4-5-20251001",
    context: "200k tokens",
    maxOutput: "64k tokens",
    speed: "Fastest",
    bestFor: "High-volume, latency-sensitive, near-frontier tasks",
    extendedThinking: true,
    pricing: "$1 in / $5 out per MTok",
  },
];

export const examMeta = {
  questions: 60,
  duration: "120 minutes",
  format: "Multiple choice (1 correct, 3 distractors)",
  passing: "720 / 1000",
  cost: "Free",
  scenarios: "4 of 6 randomly selected — all questions anchor to these scenarios",
  note: "You MUST know all 6 scenarios — any 4 could appear on your exam",
};

export interface Scenario {
  number: number;
  title: string;
  description: string;
  domainsHit: string[];
  keySkills: string[];
}

export const scenarios: Scenario[] = [
  {
    number: 1,
    title: "Customer Support Resolution Agent",
    description:
      "Build an AI agent that handles returns, billing disputes, and account issues with ≥80% first-contact resolution — and knows exactly when to escalate.",
    domainsHit: ["D1: Agentic Arch", "D2: Tool Design", "D5: Context"],
    keySkills: [
      "Agentic loop with stop_reason",
      "Structured error responses",
      "Objective escalation triggers (not sentiment)",
      "Case-facts block for preserving customer details",
      "Hook-enforced refund caps",
    ],
  },
  {
    number: 2,
    title: "Code Generation with Claude Code",
    description:
      "Configure Claude Code for a dev team: CLAUDE.md hierarchy, slash commands, skills, and plan mode effectiveness for a real codebase.",
    domainsHit: ["D3: Claude Code", "D4: Prompt Eng"],
    keySkills: [
      "CLAUDE.md user/project/directory hierarchy",
      "Commands vs skills (context:fork, allowed-tools)",
      "Plan mode for multi-file refactors",
      "TDD iterative refinement cycle",
    ],
  },
  {
    number: 3,
    title: "Multi-Agent Research System",
    description:
      "Coordinator delegates to specialized subagents (search, analysis, synthesis, reporting). Tests orchestration, context isolation, and failure handling.",
    domainsHit: ["D1: Agentic Arch", "D5: Context"],
    keySkills: [
      "Hub-and-spoke coordinator design",
      "Context isolation — scoped context per subagent",
      "Parallel Task calls for concurrent execution",
      "Error propagation with structured context",
      "Provenance tracking across subagents",
    ],
  },
  {
    number: 4,
    title: "Developer Productivity with Claude",
    description:
      "Engineers navigating a large codebase using built-in tools and MCP servers. Tests tool selection, codebase exploration, and code generation.",
    domainsHit: ["D2: Tool Design", "D3: Claude Code"],
    keySkills: [
      "Read/Edit/Write/Grep/Glob over Bash equivalents",
      "WebSearch, WebFetch, ToolSearch built-in tools",
      "MCP server configuration (.mcp.json)",
      "4–5 tools per agent for optimal selection",
    ],
  },
  {
    number: 5,
    title: "Claude Code for CI/CD",
    description:
      "Automated code reviews, test generation, and PR feedback using -p flag, structured output, and separate review sessions.",
    domainsHit: ["D3: Claude Code", "D4: Prompt Eng"],
    keySkills: [
      "-p flag for non-interactive CI mode",
      "--output-format json + --json-schema",
      "Separate generator and reviewer sessions",
      "Batch API for non-urgent jobs (50% savings)",
      "Multi-pass review: local then cross-file",
    ],
  },
  {
    number: 6,
    title: "Structured Data Extraction",
    description:
      "Process messy documents (invoices, receipts, contracts) using JSON schemas, validation-retry loops, and batch processing strategies.",
    domainsHit: ["D4: Prompt Eng", "D5: Context"],
    keySkills: [
      "tool_use with forced tool_choice for schema compliance",
      "Validate semantics after extraction (not just structure)",
      "Retry with specific error messages, not generic ones",
      "Per-document-type accuracy tracking (not just aggregate)",
      "Few-shot: 2–4 examples with at least one edge case",
    ],
  },
];

export interface Comparison {
  label: string;
  wrong: string;
  right: string;
}

export interface Subsection {
  code: string;
  title: string;
  concepts: string[];
  antiPatterns: string[];
  examTip: string;
  comparison?: Comparison;
}

export interface Domain {
  id: string;
  number: number;
  weight: string;
  title: string;
  shortTitle: string;
  colorKey: ColorKey;
  tagline: string;
  subsections: Subsection[];
}

export const domainColors: Record<ColorKey, {
  border: string; text: string; bg: string; badge: string;
  dot: string; navActive: string; navHover: string; glow: string;
  tag: string; tagText: string;
}> = {
  purple: {
    border: "border-purple-500",
    text: "text-purple-400",
    bg: "bg-purple-500/10",
    badge: "bg-purple-600 text-white",
    dot: "bg-purple-500",
    navActive: "border-b-2 border-purple-500 text-purple-400",
    navHover: "hover:text-purple-400",
    glow: "shadow-purple-500/20",
    tag: "bg-purple-500/20 border border-purple-500/40",
    tagText: "text-purple-300",
  },
  blue: {
    border: "border-blue-500",
    text: "text-blue-400",
    bg: "bg-blue-500/10",
    badge: "bg-blue-600 text-white",
    dot: "bg-blue-500",
    navActive: "border-b-2 border-blue-500 text-blue-400",
    navHover: "hover:text-blue-400",
    glow: "shadow-blue-500/20",
    tag: "bg-blue-500/20 border border-blue-500/40",
    tagText: "text-blue-300",
  },
  emerald: {
    border: "border-emerald-500",
    text: "text-emerald-400",
    bg: "bg-emerald-500/10",
    badge: "bg-emerald-600 text-white",
    dot: "bg-emerald-500",
    navActive: "border-b-2 border-emerald-500 text-emerald-400",
    navHover: "hover:text-emerald-400",
    glow: "shadow-emerald-500/20",
    tag: "bg-emerald-500/20 border border-emerald-500/40",
    tagText: "text-emerald-300",
  },
  amber: {
    border: "border-amber-500",
    text: "text-amber-400",
    bg: "bg-amber-500/10",
    badge: "bg-amber-600 text-white",
    dot: "bg-amber-500",
    navActive: "border-b-2 border-amber-500 text-amber-400",
    navHover: "hover:text-amber-400",
    glow: "shadow-amber-500/20",
    tag: "bg-amber-500/20 border border-amber-500/40",
    tagText: "text-amber-300",
  },
  rose: {
    border: "border-rose-500",
    text: "text-rose-400",
    bg: "bg-rose-500/10",
    badge: "bg-rose-600 text-white",
    dot: "bg-rose-500",
    navActive: "border-b-2 border-rose-500 text-rose-400",
    navHover: "hover:text-rose-400",
    glow: "shadow-rose-500/20",
    tag: "bg-rose-500/20 border border-rose-500/40",
    tagText: "text-rose-300",
  },
};

export const criticalRules: string[] = [
  "Use stop_reason, NOT natural language parsing, to control agentic loops",
  "Use hooks for critical business rules — prompts are probabilistic, hooks are deterministic",
  "Tool descriptions must include purpose, input format, examples, edge cases, and boundaries",
  "Return isError:true for access failures — never return [] when a service is unreachable",
  "Never hardcode secrets in MCP config — use environment variable expansion",
  "Keep CLAUDE.md modular — personal prefs at user level, team standards at project level",
  "Use skills (context:fork) for isolated workflows, not commands",
  "Write measurable criteria — 'flag functions over 50 lines', not 'flag long functions'",
  "tool_use guarantees JSON structure, NOT semantic correctness — still validate values",
  "Never self-review in the same session — use a separate session for code review",
  "Use case-facts blocks to preserve critical details — never progressively summarize them",
  "Escalate on objective triggers (policy gap, explicit request, threshold) — NOT sentiment",
];

export const domains: Domain[] = [
  {
    id: "domain1",
    number: 1,
    weight: "~27%",
    title: "Agentic Architecture & Orchestration",
    shortTitle: "Agentic Arch",
    colorKey: "purple",
    tagline: "Loops, multi-agent orchestration, hooks, and session management",
    subsections: [
      {
        code: "1.1",
        title: "Agentic Loops & Core API",
        concepts: [
          "Loop continues while stop_reason === 'tool_use'; exits on 'end_turn'",
          "After each tool call, append the result back into the messages array",
          "The Agent SDK handles the loop automatically — but you must understand the mechanics",
          "stop_reason is the ONLY reliable signal for loop control — never read assistant text",
          "Tool calls produce a tool_use block; results go back as tool_result in the next turn",
        ],
        antiPatterns: [
          "Parsing natural language output to decide whether to continue ('task complete' check)",
          "Setting arbitrary iteration caps as the primary stopping mechanism",
          "Reading assistant text content to determine loop termination",
        ],
        examTip: "The exam presents 3-4 loop-control options. The correct answer ALWAYS checks stop_reason. Reject any option that reads text, counts tokens, or uses iteration limits as the primary stop signal.",
        comparison: {
          label: "Loop Control",
          wrong: `# WRONG: Parse text to stop
while True:
    response = get_response()
    text = response.content[0].text
    if "task complete" in text.lower():
        break  # Unreliable!`,
          right: `# CORRECT: Use stop_reason
while True:
    response = get_response()
    if response.stop_reason == "end_turn":
        break  # Claude decided it's done
    if response.stop_reason == "tool_use":
        execute_and_continue()`,
        },
      },
      {
        code: "1.2",
        title: "Hub-and-Spoke Multi-Agent Orchestration",
        concepts: [
          "Hub-and-spoke ARCHITECTURE: one coordinator + specialized subagents — all comms flow through hub",
          "Coordinator responsibilities: decompose tasks, select subagents, delegate via Task, aggregate results, handle errors",
          "Subagents have ISOLATED context — they don't inherit coordinator history; all needed context must be explicitly passed",
          "allowedTools on the coordinator MUST include 'Task' to spawn subagents",
          "Multiple Task calls in a single response execute in PARALLEL",
          "fork_session branches exploration without polluting main coordinator context",
          "Sweet spot: 4–5 tools per agent — more degrades selection quality",
          "NO direct subagent-to-subagent communication — bypasses coordinator, loses visibility and error control",
          "Only the subagent's FINAL response returns to coordinator — not its full transcript",
        ],
        antiPatterns: [
          "Direct subagent-to-subagent communication — bypasses coordinator, loses error handling and context routing",
          "Sharing full coordinator conversation history with subagents (context pollution)",
          "Overly narrow decomposition — splitting 'creative industries' as only 'art, design, photo' misses music and literature",
          "Aborting entire workflow when one subagent fails — continue with partial data and annotate gaps instead",
        ],
        examTip: "Hub-and-spoke is the ARCHITECTURE. All comms flow through the coordinator — never peer-to-peer between subagents. Questions about missing coverage usually point to overly narrow task decomposition, not tool problems.",
        comparison: {
          label: "Context Passing",
          wrong: `# WRONG: Full history to every subagent
Task(
    prompt="Research market size",
    context=coordinator.full_history,
    # 90% irrelevant — wastes tokens
)`,
          right: `# CORRECT: Scoped context per subtask
Task(
    prompt="Research AI infra market size",
    context="Focus: market size USD, YoY growth, top 3 vendors",
    # Only what THIS subagent needs
)`,
        },
      },
      {
        code: "1.3",
        title: "Hooks & Programmatic Enforcement",
        concepts: [
          "PreToolUse hook: validate or block BEFORE tool execution",
          "PostToolUse hook: inspect or normalize results AFTER execution",
          "Hooks = deterministic (100% reliable) — use for critical business rules",
          "Prompts = probabilistic (model may ignore) — use for style preferences only",
          "Valid escalation triggers: customer request, policy gap, capability limit, threshold exceeded",
          "Invalid triggers: negative sentiment, self-reported low confidence",
        ],
        antiPatterns: [
          "Using prompt instructions to enforce critical business rules (refund caps, compliance gates)",
          "Escalating based on negative customer sentiment — sentiment ≠ task complexity",
          "Escalating because the model reports low confidence — model confidence is unreliable",
        ],
        examTip: "When the exam asks about enforcing critical rules (refund limits, access controls, compliance), the answer is ALWAYS programmatic hooks — never prompt instructions.",
        comparison: {
          label: "Business Rule Enforcement",
          wrong: `# WRONG: Prompt-based rule
system = """IMPORTANT: Never process
refunds above $500. Escalate instead."""
# Model CAN and WILL ignore this sometimes`,
          right: `# CORRECT: Hook-based rule
def refund_hook(tool, input, output):
    if tool == "process_refund":
        if input["amount"] > 500:
            return {"blocked": True,
                    "action": "escalate"}
    return output  # Runs as CODE, not suggestion`,
        },
      },
      {
        code: "1.4",
        title: "Session Management & Workflows",
        concepts: [
          "--resume: continue a previous session with full preserved context",
          "fork_session: branch for exploration without affecting the main session",
          "Named sessions (--session-name) organize multi-session workflows",
          "Stale context risk: data retrieved early in long sessions may become outdated",
          "Prompt chaining: for predictable, linear, fixed-step tasks",
          "Dynamic adaptive decomposition: for tasks with unknown branches and uncertainty",
        ],
        antiPatterns: [
          "Ignoring stale context risk in long-running sessions",
          "Using static prompt chains for tasks that require dynamic, conditional branching",
        ],
        examTip: "If the task is unpredictable or has conditional branches, dynamic adaptive decomposition is correct. If it's a fixed linear pipeline, prompt chaining works.",
      },
      {
        code: "1.5",
        title: "Agent SDK Parameters & Result Handling",
        concepts: [
          "effort: 'low' | 'medium' | 'high' | 'xhigh' | 'max' — controls reasoning depth per turn",
          "effort ≠ extended thinking — they are independent features",
          "max_turns: caps loop iterations; hit → ResultMessage.subtype = 'error_max_turns'",
          "max_budget_usd: caps spend; hit → ResultMessage.subtype = 'error_max_budget_usd'",
          "ResultMessage.subtype: 'success' | 'error_max_turns' | 'error_max_budget_usd' | 'error_during_execution'",
          ".result field ONLY exists on subtype === 'success' — always check subtype first!",
          "session_id in ResultMessage — save it to resume the session later",
          "Permission modes: 'default' (prompt), 'acceptEdits' (auto-approve file ops), 'plan' (no execution), 'dontAsk' (deny uncovered), 'bypassPermissions' (CI/isolated only)",
          "Read-only tools (Read, Glob, Grep) run concurrently; state-modifying tools (Edit, Bash) run sequentially",
          "allowed_tools auto-approves listed tools; disallowed_tools blocks them regardless of other settings",
        ],
        antiPatterns: [
          "Reading ResultMessage.result without first checking subtype === 'success' — error subtypes have no .result",
          "Using bypassPermissions outside isolated/CI environments — dangerous on shared systems",
          "Not setting max_turns or max_budget_usd in production — allows runaway sessions",
          "Confusing effort level with extended thinking — they control different things",
        ],
        examTip: "ResultMessage.result only exists on success. Always check subtype first. For production agents, always set max_turns or max_budget_usd to prevent runaway loops. bypassPermissions is only safe in isolated containers/CI.",
        comparison: {
          label: "ResultMessage Handling",
          wrong: `# WRONG: Assume success, read .result directly
async for msg in query(prompt="..."):
    if isinstance(msg, ResultMessage):
        print(msg.result)  # Crashes on error!`,
          right: `# CORRECT: Always check subtype first
async for msg in query(prompt="..."):
    if isinstance(msg, ResultMessage):
        if msg.subtype == "success":
            print(msg.result)
        elif msg.subtype == "error_max_turns":
            print(f"Resume: {msg.session_id}")`,
        },
      },
      {
        code: "1.6",
        title: "Dynamic Adaptive Decomposition & Adaptive Investigation Plan",
        concepts: [
          "Dynamic Adaptive Decomposition: subtasks are GENERATED based on intermediate results — not pre-planned",
          "The agent asks 'what are the needed next steps?' at runtime, after seeing each discovery",
          "Adaptive Investigation Plan: a specific application — map domain → identify gaps → prioritize by risk → adapt as dependencies emerge",
          "Use DYNAMIC decomposition when: scope is unknown upfront, task is investigative, branches depend on findings",
          "Use PROMPT CHAINING when: steps are fixed and predictable, each input/output is known in advance",
          "Dynamic decomposition lives INSIDE hub-and-spoke — the coordinator decides tasks dynamically",
          "Example pattern: 'Analyze codebase. For each issue: assess severity → if simple fix directly → if complex plan first → run tests → adapt'",
          "Partial results are valid — if one subagent fails, continue with others and annotate the gap",
        ],
        antiPatterns: [
          "Using a static prompt chain for an investigative task — rigid sequences fail when findings are unexpected",
          "Pre-defining all subtasks upfront for open-ended research — misses emergent scope",
          "Overly narrow decomposition — e.g. 'creative industries' → only 'art, design, photo' (missing music, literature, film)",
          "Aborting the full workflow when one branch fails — should collect partial results and annotate missing pieces",
        ],
        examTip: "The exam distinguishes these three clearly: Hub-and-Spoke = the ARCHITECTURE. Dynamic Adaptive = the DECOMPOSITION STRATEGY for unknown/investigative tasks. Adaptive Investigation Plan = dynamic decomposition applied to research. If the scenario involves unknown scope or emergent findings, dynamic adaptive is always correct over prompt chaining.",
        comparison: {
          label: "Prompt Chaining vs Dynamic Adaptive Decomposition",
          wrong: `# WRONG for investigative tasks: rigid chain
steps = [
    "Step 1: Read all files",
    "Step 2: List all bugs",
    "Step 3: Fix each bug",
]
# What if Step 2 finds none? Or finds 200?
# Static chain cannot adapt to findings`,
          right: `# CORRECT: Dynamic adaptive — adapts to results
agent.run("""
Investigate the codebase for issues.
For each finding:
  - Assess severity and complexity
  - If simple: fix directly, run tests
  - If complex: plan first, then fix
  - If blocked by dependency: flag and continue
Adapt your approach based on what you find.
""")`,
        },
      },
    ],
  },
  {
    id: "domain2",
    number: 2,
    weight: "~18%",
    title: "Tool Design & MCP Integration",
    shortTitle: "Tool Design",
    colorKey: "blue",
    tagline: "Tool descriptions, structured errors, distribution, and MCP config",
    subsections: [
      {
        code: "2.1",
        title: "Tool Description Best Practices",
        concepts: [
          "Include: purpose, input formats, examples, edge cases, constraints, when NOT to use",
          "Specify valid values, ranges, and boundary conditions explicitly",
          "Write as documentation for the model — more detail reduces ambiguity",
          "Document what empty results mean vs. what errors look like",
          "Show exact formats: 'E.164 format (+15551234567)', 'must contain @', 'starts with ACC-'",
        ],
        antiPatterns: [
          "Vague descriptions like 'Searches for stuff' — leaves Claude guessing",
          "Missing edge case documentation causing unexpected tool behavior",
          "No 'when NOT to use' guidance leading to tool misuse",
        ],
        examTip: "The exam presents tool descriptions of varying quality. The correct answer always has the most detailed description with input formats, examples, edge cases, and boundary documentation.",
        comparison: {
          label: "Tool Description Quality",
          wrong: `{
  "name": "search",
  "description": "Searches for stuff",
  // What does it search? What format?
  // When to use? What does empty mean?
}`,
          right: `{
  "name": "lookup_customer",
  "description": "Search by email, phone (E.164), or
    account ID (ACC-XXXXX). Returns customer profile
    or empty array if not found.
    Empty result = NOT an error.",
}`,
        },
      },
      {
        code: "2.2",
        title: "Structured Error Responses",
        concepts: [
          "isError: true signals failure clearly — never silently suppress errors",
          "errorCategory: 'validation' | 'auth' | 'not_found' | 'rate_limit' | 'timeout'",
          "isRetryable: true for timeouts, false for auth failures",
          "Always include context: what was attempted + what failed",
          "ACCESS FAILURE ≠ EMPTY RESULT — critical distinction!",
          "DB down → isError:true (search NOT performed)",
          "DB returned no rows → isError:false, results:[] (search WAS performed)",
        ],
        antiPatterns: [
          "Returning [] when the database is unreachable — agent thinks no data exists",
          "Generic 'Operation failed' messages with no actionable context",
          "Not distinguishing 'could not check' from 'checked and found nothing'",
        ],
        examTip: "If a question asks about a tool failing to connect, the correct answer ALWAYS distinguishes access failure from empty result. Returning [] for a failed connection is always wrong.",
        comparison: {
          label: "Access Failure vs Empty Result",
          wrong: `// DB is DOWN — but returns empty
{ "customers": [] }
// Agent thinks: "No customers found"
// Reality: "We couldn't even check!"`,
          right: `// DB is DOWN — report it explicitly
{
  "isError": true,
  "errorCategory": "timeout",
  "isRetryable": true,
  "context": {
    "attempted": "Customer lookup",
    "suggestion": "Retry or escalate"
  }
}`,
        },
      },
      {
        code: "2.3",
        title: "Tool Distribution & Selection",
        concepts: [
          "4–5 tools per agent is optimal — more degrades selection quality",
          "Distribute across specialized subagents instead of one overloaded agent",
          "tool_choice: 'auto' (model decides), 'any' (must use one), or forced specific tool",
          "Group related tools: Customer Agent, Order Agent, Comms Agent",
          "Coordinator needs only: Task + 2–3 synthesis tools",
        ],
        antiPatterns: [
          "Giving one agent 18+ tools — selection accuracy degrades significantly",
          "Not using tool_choice to constrain selection when the task is clear",
        ],
        examTip: "When the exam shows many tools in one agent, the correct answer ALWAYS distributes them across specialized subagents with 4–5 tools each.",
      },
      {
        code: "2.4",
        title: "MCP Server Configuration",
        concepts: [
          ".mcp.json — project-level, shared via version control with team",
          "~/.claude.json — user-level, personal, never shared",
          "Use ${ENV_VAR} syntax — never hardcode secrets in config files",
          "MCP servers expose: Tools (functions), Resources (data), Prompts (templates)",
          "Project-level: team tools, CI integrations, shared API endpoints",
          "User-level: personal API keys, individual preferences",
        ],
        antiPatterns: [
          "Hardcoding API keys in .mcp.json — leaks secrets to version control",
          "Mixing project and user config without understanding precedence",
        ],
        examTip: "If an exam answer hardcodes an API key in .mcp.json, it's always wrong. Correct approach uses ${ENV_VAR} for all secrets.",
        comparison: {
          label: "MCP Secret Management",
          wrong: `{
  "mcpServers": {
    "jira": {
      "env": {
        "JIRA_TOKEN": "sk-abc123-real-key"
        // LEAKED to git!
      }
    }
  }
}`,
          right: `{
  "mcpServers": {
    "jira": {
      "env": {
        "JIRA_TOKEN": "\${JIRA_TOKEN}"
        // Secret stays in environment
      }
    }
  }
}`,
        },
      },
      {
        code: "2.5",
        title: "Built-in Tools — When to Use Each",
        concepts: [
          "Read → inspect existing file contents (not Bash cat)",
          "Write → create a NEW file from scratch (not for editing)",
          "Edit → modify an EXISTING file with targeted changes (not Write)",
          "Bash → run shell commands: tests, builds, installs, system tasks",
          "Grep → search for text PATTERNS inside files",
          "Glob → find FILES by name/path patterns",
          "WebSearch → search the web for current information",
          "WebFetch → fetch and parse content from a specific URL",
          "ToolSearch → dynamically find and load tools on-demand (avoid preloading all MCP tools)",
          "Agent (Task) → spawn subagents; AskUserQuestion → pause for human input; TodoWrite → track tasks",
          "Prefer Read/Edit/Write/Grep/Glob — fall back to Bash only when no built-in fits",
        ],
        antiPatterns: [
          "Using Bash('cat file.txt') when Read exists",
          "Using Write to modify an existing file — it replaces the entire file",
          "Using Bash find/grep when Glob/Grep exists",
          "Preloading all MCP tools instead of using ToolSearch to load on-demand",
        ],
        examTip: "The exam frequently presents Bash for file ops as an option. Correct answer always uses the purpose-built tool. Write = new files, Edit = existing files, Grep = content search, Glob = filename search. ToolSearch loads MCP tools on-demand to save context.",
      },
      {
        code: "2.6",
        title: "Prompt Caching",
        concepts: [
          "cache_control: {type: 'ephemeral'} marks where cache breakpoints are placed",
          "Default TTL: 5 minutes; Extended TTL: 1 hour at 2× base cost",
          "Cache READS cost only 0.1× base input price — ~90% savings on repeated prefixes",
          "Cache WRITES cost 1.25× (5min) or 2× (1hr) base input price",
          "Min tokens required: 4096 for Opus/Haiku, 1024–2048 for Sonnet (silent failure below)",
          "Cache hierarchy: tools → system → messages (changes cascade DOWN)",
          "Place breakpoint on LAST stable block — never on timestamps or per-request content",
          "Up to 4 explicit cache breakpoints per request",
          "Workspace-level isolation since Feb 2026 — workspaces within same org have separate caches",
          "Verify hits: usage.cache_read_input_tokens > 0 and cache_creation_input_tokens > 0",
          "CLAUDE.md and tool definitions are auto-cached by the Agent SDK on every turn",
        ],
        antiPatterns: [
          "Placing cache_control on dynamic content (timestamps, user IDs) — cache never hits",
          "Changing tool definitions frequently — invalidates ALL downstream cache (system + messages)",
          "Not checking cache_read_input_tokens in usage to verify caching actually works",
          "Using workspace caches expecting org-level sharing (isolated since Feb 5, 2026)",
        ],
        examTip: "Cache invalidation cascades: tool definition change → all cache gone. System change → messages cache gone. Always put the breakpoint on the LAST identical/stable block. Check cache_read_input_tokens > 0 to confirm hits.",
        comparison: {
          label: "Cache Breakpoint Placement",
          wrong: `# WRONG: Breakpoint on changing content
messages=[{
    "role": "user",
    "content": f"Time: {now()} | Question: {q}",
    "cache_control": {"type": "ephemeral"}
    # Different every request → zero cache hits
}]`,
          right: `# CORRECT: Breakpoint on stable prefix
system=[{
    "type": "text",
    "text": "You are a support agent...",  # Stable
    "cache_control": {"type": "ephemeral"}
}]
messages=[{
    "role": "user",
    "content": f"Time: {now()} | Question: {q}"
    # Dynamic content AFTER the cache breakpoint
}]`,
        },
      },
    ],
  },
  {
    id: "domain3",
    number: 3,
    weight: "~20%",
    title: "Claude Code Configuration & Workflows",
    shortTitle: "Claude Code",
    colorKey: "emerald",
    tagline: "CLAUDE.md hierarchy, commands, skills, plan mode, CI/CD",
    subsections: [
      {
        code: "3.1",
        title: "CLAUDE.md Hierarchy & Configuration",
        concepts: [
          "User level: ~/.claude/CLAUDE.md — personal preferences, NOT shared",
          "Project level: .claude/CLAUDE.md — team standards, shared via git",
          "Directory level: src/api/CLAUDE.md — scoped to that dir and below",
          "Precedence: Directory > Project > User (most specific wins)",
          "@import ./rules/typescript.md — include external files modularly",
          ".claude/rules/ directory — topic-specific rule files, auto-loaded",
          "YAML frontmatter with paths: globs for path-scoped rules",
        ],
        antiPatterns: [
          "One massive 800-line CLAUDE.md mixing all concerns — hard to maintain",
          "Personal preferences (vim bindings, dark theme) in project-level config",
          "API-specific rules at project level instead of directory level",
        ],
        examTip: "Personal preferences → user level. Team standards → project level. Module-specific rules → directory level. If an answer puts personal prefs in project config, it's wrong.",
        comparison: {
          label: "CLAUDE.md Structure",
          wrong: `# .claude/CLAUDE.md (800 lines mixing everything)
Use TypeScript strict mode.
Use vim keybindings.      # Personal pref!
REST endpoints...
All API auth must...      # Should be dir-scoped`,
          right: `# ~/.claude/CLAUDE.md (personal)
  Use vim keybindings.
# .claude/CLAUDE.md (project)
  Use TypeScript strict mode.
  @import ./rules/testing.md
# src/api/CLAUDE.md (directory)
  All endpoints must validate auth tokens.`,
        },
      },
      {
        code: "3.2",
        title: "Custom Commands & Skills",
        concepts: [
          "Commands → .claude/commands/ — simple reusable actions, current session context",
          "Skills → .claude/skills/ with SKILL.md — complex, multi-step, isolated",
          "SKILL.md frontmatter: context:fork, allowed-tools, argument-hint",
          "context:fork → runs in isolated context, exploration stays in fork",
          "allowed-tools → restrict which tools the skill can use",
          "Use commands for: quick actions, single-step, no isolation needed",
          "Use skills for: complex ops, context isolation, tool restriction",
        ],
        antiPatterns: [
          "Using a command for complex exploration — pollutes main context with noise",
          "Not specifying allowed-tools in skills — leaves overly broad tool access",
        ],
        examTip: "If the task requires context isolation or tool restriction, the answer is a skill (not a command). Look for context:fork and allowed-tools in the correct answer.",
        comparison: {
          label: "Command vs Skill",
          wrong: `# .claude/commands/refactor.md
Refactor the code to use dependency injection.
Look through ALL files and restructure.
# Runs in main context — pollutes it!`,
          right: `# .claude/skills/refactor/SKILL.md
---
context: fork        # Isolated
allowed-tools:       # Restricted
  - Read
  - Edit
  - Grep
---
Refactor to use dependency injection.`,
        },
      },
      {
        code: "3.3",
        title: "Plan Mode & Iterative Refinement",
        concepts: [
          "Use plan mode for: multi-file changes, interconnected components, expensive mistakes",
          "Use direct execution for: simple tasks, single-file, obvious approach",
          "TDD iteration: write failing test → implement → run tests → refine → repeat",
          "Concrete examples: show exactly what you want for format/style tasks",
          "Interview pattern: 'Ask me 3 questions first' for ambiguous requirements",
        ],
        antiPatterns: [
          "Using plan mode for simple, well-defined tasks — unnecessary overhead",
          "Skipping planning for multi-file architectural changes",
          "Implementing without tests — no verifiable correctness goal",
        ],
        examTip: "Complex multi-file tasks → plan mode. Simple fixes → direct execution. TDD iteration (write test, implement, verify) is the preferred refinement pattern.",
      },
      {
        code: "3.4",
        title: "CI/CD Integration & Batch Processing",
        concepts: [
          "-p flag: non-interactive mode — required for ALL CI/CD usage",
          "--output-format json: structured output for automated processing",
          "--json-schema: enforce specific output contract",
          "Generator session and reviewer session MUST be separate — never --resume for review",
          "Batch API: 50% cost savings, 24-hour processing window",
          "Use Batch API for: nightly audits, weekly reviews, non-urgent analysis",
          "Use synchronous for: blocking PR reviews, real-time feedback",
        ],
        antiPatterns: [
          "Running Claude Code in interactive mode inside CI/CD pipelines",
          "Using --resume for code review — retains generation reasoning bias",
          "Using Batch API for blocking, real-time tasks",
        ],
        examTip: "Three must-know CI/CD facts: (1) Always -p for non-interactive. (2) Never self-review in same session. (3) Batch API = 50% savings for non-urgent jobs.",
        comparison: {
          label: "CI/CD Session Isolation",
          wrong: `# WRONG: Same-session self-review
claude -p "Write a new auth module"  # Session A
claude --resume -p "Review your code"
# Reviewer retains generation bias!`,
          right: `# CORRECT: Separate review session
claude -p "Write a new auth module"   # Session A
claude -p "Review this diff: ..."     # Session B (fresh)
# No shared context — honest review`,
        },
      },
    ],
  },
  {
    id: "domain4",
    number: 4,
    weight: "~20%",
    title: "Prompt Engineering & Structured Output",
    shortTitle: "Prompt Eng",
    colorKey: "amber",
    tagline: "Explicit criteria, few-shot, tool_use, validation-retry loops",
    subsections: [
      {
        code: "4.1",
        title: "Explicit Criteria & Instruction Design",
        concepts: [
          "Use MEASURABLE criteria: 'flag functions over 50 lines' not 'flag long functions'",
          "Specify exact thresholds, patterns, and conditions — no vague adjectives",
          "Too many false positives → alert fatigue → developers ignore ALL flags",
          "Measurable criteria enable automated validation of results",
          "List exactly which rule numbers to check (1-5), not open-ended 'be thorough'",
          "Specify output format: file, line number, rule violated, severity, fix suggestion",
        ],
        antiPatterns: [
          "'Be thorough and flag anything suspicious' — over-flags, erodes trust",
          "'Find all issues' — undefined scope leads to inconsistent results",
          "Vague adjectives: long, complex, suspicious, important, critical",
        ],
        examTip: "Every time the exam asks about prompt design for production systems, correct answer uses specific, measurable criteria. Any option saying 'be thorough' or 'find all issues' is wrong.",
        comparison: {
          label: "Explicit vs Vague Criteria",
          wrong: `# VAGUE: Inconsistent results
prompt = """Review for quality issues.
Be thorough and flag suspicious code."""
# What counts as suspicious? Unknown.`,
          right: `# EXPLICIT: Consistent, auditable
prompt = """Flag ONLY:
1. Functions > 50 lines
2. Async ops missing try-catch
3. Hardcoded strings matching (sk-, pk-)
Provide: file, line, rule#, severity."""`,
        },
      },
      {
        code: "4.2",
        title: "Few-Shot Prompting",
        concepts: [
          "Optimal range: 2–4 examples — establishes pattern without bloating prompt",
          "All examples MUST use the identical output format and structure",
          "Include at least one EDGE CASE example (sarcasm, mixed sentiment, ambiguous)",
          "Cover diversity: positive/negative, simple/complex, clear/ambiguous",
          "Most valuable for: ambiguous classification, custom formats, fuzzy category boundaries",
          "> 6 examples: bloats prompt without proportional benefit",
        ],
        antiPatterns: [
          "Using > 6 examples — diminishing returns, excessive token usage",
          "Inconsistent formatting across examples — confuses the model",
          "No edge case example — model fails on boundary inputs",
        ],
        examTip: "The exam tests optimal few-shot count (2–4) and that at least one must be an edge case. More than 6 examples is always wrong.",
      },
      {
        code: "4.3",
        title: "Tool Use for Structured Output",
        concepts: [
          "tool_use guarantees JSON STRUCTURE — required fields present, correct types",
          "tool_use does NOT guarantee SEMANTICS — wrong values can still appear",
          "After extraction, ALWAYS validate the values — shape ≠ correctness",
          "tool_choice 'auto': Claude decides (default, general purpose)",
          "tool_choice 'any': Claude must use a tool, chooses which",
          "tool_choice {type:'tool', name:'X'}: force specific tool — use for guaranteed extraction",
          "Enums: include 'other' + detail field for unexpected values",
          "Nullable fields: use ['string', 'null'] type for optional data",
        ],
        antiPatterns: [
          "Assuming tool_use output is semantically correct — skipping validation",
          "No 'other' enum option — forces bad data into wrong categories",
          "Saving to DB without validating extracted values",
        ],
        examTip: "tool_use guarantees STRUCTURE, not SEMANTICS. The exam will present options claiming tool_use eliminates all errors — that's always wrong. Always validate extracted values.",
        comparison: {
          label: "Post-Extraction Validation",
          wrong: `# WRONG: Trust structure = trust content
data = extract_via_tool_use(invoice)
save_to_database(data)  # No validation!
# Structure valid but vendor_name may be wrong`,
          right: `# CORRECT: Validate SEMANTICS after extraction
data = extract_via_tool_use(invoice)
errors = []
if not re.match(r"\\d{4}-\\d{2}-\\d{2}", data["date"]):
    errors.append("Invalid date format")
if data["total"] <= 0:
    errors.append("Total must be positive")
if errors:
    retry_with_specific_errors(invoice, errors)`,
        },
      },
      {
        code: "4.4",
        title: "Validation-Retry Loops & Multi-Pass Review",
        concepts: [
          "On validation failure: append SPECIFIC errors, not generic 'try again'",
          "Wrong: 'There were errors, please retry'",
          "Right: 'Total ($450) doesn't match subtotal ($500). Tax contains % not $ amount.'",
          "Multi-pass: Pass 1 = per-file local analysis; Pass 2 = cross-file integration",
          "Same-session self-review is an anti-pattern — generation bias persists in context",
          "Synchronous: blocking tasks, real-time feedback, PR reviews",
          "Batch API: non-urgent audits, weekly scans (50% cost savings)",
        ],
        antiPatterns: [
          "Generic retry message without specific error context — model can't self-correct",
          "Same-session self-review — model retains its original reasoning blind spots",
          "Using Batch API for blocking tasks that need real-time results",
        ],
        examTip: "Three facts: (1) Retry with SPECIFIC error details. (2) Same-session self-review is always an anti-pattern. (3) Batch API = non-urgent only (50% savings).",
      },
    ],
  },
  {
    id: "domain5",
    number: 5,
    weight: "~15%",
    title: "Context Management & Reliability",
    shortTitle: "Context",
    colorKey: "rose",
    tagline: "Context positioning, escalation, extended sessions, provenance",
    subsections: [
      {
        code: "5.1",
        title: "Context Optimization & Positioning",
        concepts: [
          "'Lost in the middle' effect: info in the middle of long contexts is less recalled",
          "Place critical facts EARLY and LATE — highest recall positions in context window",
          "Case-facts blocks: immutable structured reference section, NEVER summarized",
          "Progressive summarization silently destroys critical details — avoid for facts",
          "Trim verbose tool output while keeping essential information",
          "Case facts include: IDs, amounts, dates, names, conditions — exact values",
        ],
        antiPatterns: [
          "Progressively summarizing critical customer details across turns — loses exact values",
          "Placing only in the middle of context — lowest recall zone",
          "Treating all context equally — some info must be preserved verbatim",
        ],
        examTip: "If the exam asks how to preserve critical details in a long conversation, the answer is ALWAYS 'case facts' blocks — never progressive summarization.",
        comparison: {
          label: "Critical Info Preservation",
          wrong: `# Progressive summarization loses details
Turn 1: "John Smith (ACC-12345) order #98765..."
Turn 5: [Summary] "Customer billing issue"
Turn 10: [Summary] "Billing issue being handled"
# Name, account, order, amounts: ALL LOST`,
          right: `## CASE FACTS (Never summarize — reference directly)
| Customer    | John Smith (ACC-12345)      |
| Order       | #98765                      |
| Overcharge  | $50.01 (promo SUMMER2026)   |
| Priority    | High — 7-year customer      |
# This block stays intact regardless of length`,
        },
      },
      {
        code: "5.2",
        title: "Escalation & Error Propagation",
        concepts: [
          "VALID triggers: customer explicitly requests human, policy gap, capability limit, threshold exceeded",
          "INVALID triggers: negative sentiment, self-reported low confidence",
          "Angry customer + simple address change = NO escalation needed",
          "Structured error propagation: what was attempted + what failed + is it retryable",
          "Distinguish: 'could not check' (access failure) vs 'checked, found nothing' (empty result)",
          "Never silently drop subagent failures — coordinator must know data is missing",
          "Partial results with context beat no results with silence",
        ],
        antiPatterns: [
          "Escalating because customer sounds angry — sentiment ≠ complexity",
          "Escalating because model confidence is < 0.7 — confidence scores are unreliable",
          "Silently swallowing subagent errors and returning empty results to coordinator",
        ],
        examTip: "Sentiment-based and confidence-based escalation are ALWAYS wrong. Valid triggers: explicit customer request, policy gaps, capability limits, business thresholds.",
        comparison: {
          label: "Escalation Triggers",
          wrong: `# WRONG: Sentiment-based escalation
if customer_sentiment == "angry":
    escalate_to_human()
# Angry customer changing address ≠ needs human

if model_confidence < 0.7:
    escalate_to_human()  # Unreliable signal`,
          right: `# CORRECT: Objective triggers only
if customer.requested_human:
    escalate("Customer requested human")
if not policy_covers(situation):
    escalate("Policy gap detected")
if refund_amount > AGENT_LIMIT:
    escalate(f"Exceeds {AGENT_LIMIT} limit")`,
        },
      },
      {
        code: "5.3",
        title: "Context Degradation & Extended Sessions",
        concepts: [
          "Long sessions degrade quality — agent forgets earlier instructions and repeats work",
          "/compact: compress conversation history to reclaim context space",
          "Scratchpad files: persist critical intermediate state outside conversation",
          "Subagent delegation: verbose exploration stays in subagent context, not coordinator",
          "After /compact: re-read scratchpad files to restore critical state",
          "Track metrics PER DOCUMENT TYPE, not only aggregate — aggregate masks failures",
          "Stratified sampling for review: cover all categories, not just random picks",
        ],
        antiPatterns: [
          "Running extended sessions without using /compact or scratchpad files",
          "Aggregate-only accuracy: 95% overall hides 70% invoice failure rate",
          "Dumping verbose exploration directly into coordinator context",
        ],
        examTip: "Aggregate metrics masking per-category failures is a KEY exam concept. Correct answer always tracks per document type (stratified metrics), not just overall accuracy.",
        comparison: {
          label: "Metrics Granularity",
          wrong: `# AGGREGATE: Masks per-type failures
total_correct = 950 / 1000 = 95%
# "Looks great!" — but actually:
# Invoices:  70/100 = 70%  ← FAILING!
# Receipts: 880/900 = 97.8%`,
          right: `# STRATIFIED: Reveals failures by type
Invoice accuracy:  70.0%  ← ALERT!
Receipt accuracy:  97.8%  ← OK
Contract accuracy: 100.0% ← OK
# Now we can see and fix the problem`,
        },
      },
      {
        code: "5.4",
        title: "Human Review & Information Provenance",
        concepts: [
          "Track per claim: source, confidence, timestamp, agent_id",
          "Confidence levels: verified > extracted > inferred > estimated",
          "When sources conflict: annotate the conflict — never silently choose",
          "Use verified database over extracted PDF when both provide same data",
          "Stratified sampling: review samples across all categories, not just random",
          "Human review checkpoints for: high-stakes, ambiguous, or irreversible actions",
          "Claim-source mapping enables audit trails and conflict resolution",
        ],
        antiPatterns: [
          "Silently resolving conflicting source data by arbitrarily picking one value",
          "Random-only review sampling — misses systematic failures in specific categories",
          "No provenance tracking — can't trace claims back to sources",
        ],
        examTip: "When subagents provide conflicting data, correct answer tracks provenance (source, confidence, timestamp) and uses it to resolve. Arbitrary selection without provenance is always wrong.",
        comparison: {
          label: "Conflict Resolution with Provenance",
          wrong: `# NO provenance — arbitrary choice
revenue_a = subagent_1.get_revenue()  # $1.5M
revenue_b = subagent_2.get_revenue()  # $1.48M
final = revenue_a  # Arbitrary — why this one?`,
          right: `# WITH provenance — principled choice
rev_db = DataWithProvenance(
    value=1_500_000, source="financial-db",
    confidence="verified")  # Authoritative!
rev_pdf = DataWithProvenance(
    value=1_480_000, source="quarterly-pdf",
    confidence="extracted")
final = resolve_by_confidence([rev_db, rev_pdf])`,
        },
      },
    ],
  },
];

export const quickRefList: { rule: string; avoid: string }[] = [
  { rule: "stop_reason → loop control", avoid: "text parsing" },
  { rule: "hooks → business rule enforcement", avoid: "prompt instructions" },
  { rule: "specific tool descriptions with examples & edge cases", avoid: "vague descriptions" },
  { rule: "structured errors (isError, errorCategory, isRetryable)", avoid: "generic errors / silent []" },
  { rule: "4–5 tools per agent", avoid: "18+ tools in one agent" },
  { rule: "user/project/directory CLAUDE.md hierarchy", avoid: "one massive config file" },
  { rule: "skills with context:fork for isolation", avoid: "commands for complex tasks" },
  { rule: "plan mode for complex multi-file tasks", avoid: "direct execution for big refactors" },
  { rule: "tool_use = structure (not truth) + validate semantics", avoid: "assuming tool_use = correctness" },
  { rule: "case-facts blocks for critical details", avoid: "progressive summarization" },
  { rule: "objective escalation triggers (request, policy gap, threshold)", avoid: "sentiment or confidence escalation" },
  { rule: "separate review session (fresh context)", avoid: "same-session self-review" },
  { rule: "per-document-type stratified metrics", avoid: "aggregate-only accuracy" },
  { rule: "provenance tracking (source + confidence + timestamp)", avoid: "arbitrary conflict resolution" },
  { rule: "${ENV_VAR} in MCP config for secrets", avoid: "hardcoded API keys" },
  { rule: "check ResultMessage.subtype === 'success' before reading .result", avoid: "assuming agent always succeeds" },
  { rule: "cache breakpoint on LAST stable block", avoid: "cache_control on dynamic/changing content" },
  { rule: "max_turns + max_budget_usd in production agents", avoid: "no limits → runaway sessions" },
  { rule: "access failure → isError:true (search not performed)", avoid: "returning [] when DB unreachable" },
  { rule: "retry with SPECIFIC validation errors", avoid: "generic 'there were errors, try again'" },
  { rule: "dynamic adaptive decomposition for unknown/investigative scope", avoid: "static prompt chain for open-ended tasks" },
  { rule: "all comms via coordinator (hub-and-spoke)", avoid: "direct subagent-to-subagent communication" },
  { rule: "continue with partial results when one subagent fails", avoid: "aborting whole workflow on single failure" },
];
