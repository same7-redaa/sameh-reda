import { Language } from '../types';

export interface BlogPost {
    id: string;
    slug: string;
    title: {
        en: string;
        ar: string;
    };
    excerpt: {
        en: string;
        ar: string;
    };
    content: {
        en: string;
        ar: string;
    };
    date: string;
    readTime: string;
    image: string;
    tags: string[];
}

export const blogPosts: BlogPost[] = [
    {
        id: '1',
        slug: 'modern-web-development-seo-2025',
        title: {
            en: "Mastering Modern Web Development & SEO in 2025: The Ultimate Guide",
            ar: "دليلك الشامل لاحتراف تطوير الويب والسيو في 2025"
        },
        excerpt: {
            en: "A deep dive into the future of web development. Learn how React 19, Server Components, and AI-driven SEO strategies optimize Single Page Applications (SPAs) for Google's latest algorithms.",
            ar: "غوص عميق في مستقبل تطوير الويب. تعلم كيف تقوم React 19 ومكونات الخادم (Server Components) واستراتيجيات السيو المدعومة بالذكاء الاصطناعي بتحسين تطبيقات الصفحة الواحدة (SPA) لأحدث خوارزميات جوجل."
        },
        content: {
            en: `
                <h2>The New Era of Web Development</h2>
                <p>Web development is no longer just about writing HTML, CSS, and JavaScript. In 2025, it's about building <strong>ecosystems</strong> that are fast, accessible, and understandable by machines (AI agents and Search Engines). The landscape has shifted from client-side heavy applications to hybrid models that leverage the power of the server.</p>

                <h3>1. React 19 and Server Components</h3>
                <p>The introduction of <strong>React Server Components (RSC)</strong> has revolutionized how we think about data fetching and SEO. Unlike traditional SPAs where the crawler sees an empty <code>div</code> tag initially, RSCs send pre-rendered HTML to the client.</p>
                <ul>
                    <li><strong>Faster First Contentful Paint (FCP):</strong> Users see content immediately.</li>
                    <li><strong>Zero Bundle Size for Server Code:</strong> Heavy libraries stay on the server.</li>
                    <li><strong>Automatic SEO:</strong> Google indexes the HTML directly without needing to execute JavaScript.</li>
                </ul>

                <h3>2. Core Web Vitals are King</h3>
                <p>Google's Core Web Vitals (CWV) are now a critical ranking factor. As a developer, you must obsess over:</p>
                <div class="bg-blue-50 p-6 rounded-2xl my-6 border-l-4 border-blue-600 shadow-sm">
                    <ul class="list-none pl-0 space-y-3">
                        <li class="mb-2"><strong class="text-blue-700 text-lg block mb-1">INP (Interaction to Next Paint):</strong> Replaced FID. Ideally under 200ms.</li>
                        <li class="mb-2"><strong class="text-blue-700 text-lg block mb-1">LCP (Largest Contentful Paint):</strong> Load main content in under 2.5s.</li>
                        <li><strong class="text-blue-700 text-lg block mb-1">CLS (Cumulative Layout Shift):</strong> Visual stability is non-negotiable.</li>
                    </ul>
                </div>

                <h3>3. Semantic HTML & Structured Data</h3>
                <p>AI search engines don't "see" pages; they "read" structure. Using semantic tags like <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, and <code>&lt;aside&gt;</code> is mandatory. Furthermore, implementing <strong>JSON-LD Schema Markup</strong> helps you dominate the Knowledge Graph.</p>
            `,
            ar: `
                <h2>العصر الجديد لتطوير الويب</h2>
                <p>لم يعد تطوير الويب مجرد كتابة HTML و CSS و JavaScript. في عام 2025، أصبح الأمر يتعلق ببناء <strong>أنظمة بيئية</strong> سريعة، وسهلة الوصول، ومفهومة من قبل الآلات (وكلاء الذكاء الاصطناعي ومحركات البحث). لقد تحول المشهد من التطبيقات الثقيلة من جانب العميل إلى النماذج الهجينة التي تستفيد من قوة الخادم.</p>

                <h3>1. React 19 ومكونات الخادم (Server Components)</h3>
                <p>أحدث تقديم <strong>React Server Components (RSC)</strong> ثورة في كيفية تفكيرنا في جلب البيانات والسيو. على عكس تطبيقات SPA التقليدية حيث يرى الزاحف وسم <code>div</code> فارغاً في البداية، ترسل RSCs html جاهزاً للعرض إلى العميل.</p>
                <ul>
                    <li><strong>أسرع ظهور للمحتوى (FCP):</strong> يرى المستخدمون المحتوى فوراً.</li>
                    <li><strong>حجم حزمة صفر لكود الخادم:</strong> تظل المكتبات الثقيلة على الخادم.</li>
                    <li><strong>سيو تلقائي:</strong> يقوم جوجل بفهرسة الـ HTML مباشرة دون الحاجة لتنفيذ JavaScript.</li>
                </ul>

                <h3>2. مؤشرات أداء الويب الأساسية (Core Web Vitals)</h3>
                <p>أصبحت مؤشرات أداء الويب الأساسية (CWV) من جوجل الآن عامل ترتيب حاسم. كمطور، يجب أن تهتم بشدة بـ:</p>
                <div class="bg-blue-50 p-6 rounded-2xl my-6 border-r-4 border-blue-600 shadow-sm">
                    <ul class="list-none pr-0 space-y-3">
                        <li class="mb-2"><strong class="text-blue-700 text-lg block mb-1">بطاقة INP (التفاعل للرسم التالي):</strong> استبدل FID. يفضل أن يكون أقل من 200 مللي ثانية.</li>
                        <li class="mb-2"><strong class="text-blue-700 text-lg block mb-1">LCP (أكبر رسم للمحتوى):</strong> تحميل المحتوى الرئيسي في أقل من 2.5 ثانية.</li>
                        <li><strong class="text-blue-700 text-lg block mb-1">CLS (إزاحة التخطيط التراكمية):</strong> الاستقرار البصري غير قابل للتفاوض.</li>
                    </ul>
                </div>

                <h3>3. الـ HTML الدلالي والبيانات المنظمة</h3>
                <p>محركات البحث المعتمدة على الذكاء الاصطناعي لا "ترى" الصفحات؛ بل "تقرأ" الهيكل. استخدام الوسوم الدلالية مثل <code>&lt;article&gt;</code> و <code>&lt;section&gt;</code> و <code>&lt;aside&gt;</code> أصبح إلزامياً. علاوة على ذلك، يساعد تنفيذ <strong>JSON-LD Schema Markup</strong> في السيطرة على الرسم البياني للمعرفة (Knowledge Graph).</p>
            `
        },
        date: "2025-01-15",
        readTime: "8 min",
        image: "/assets/blog-1.jpg",
        tags: ["SEO", "Web Development", "React 19"]
    },
    {
        id: '2',
        slug: 'optimizing-react-performance',
        title: {
            en: "Optimizing React Applications for Extreme Performance",
            ar: "تحسين أداء تطبيقات React لأقصى سرعة ممكنة"
        },
        excerpt: {
            en: "A slow website kills conversion rates. Learn advanced techniques to speed up your React apps, avoid re-renders, and manage state effectively for a silky smooth 60fps user experience.",
            ar: "الموقع البطيء يقتل معدلات التحويل. تعلم تقنيات متقدمة لتسريع تطبيقات React، وتجنب إعادة الرسم، وإدارة الحالة بفعالية لتجربة مستخدم سلسة بسرعة 60 إطاراً في الثانية."
        },
        content: {
            en: `
                <h2>Performance is User Experience</h2>
                <p>Studies show that a 1-second delay in mobile load times can impact conversion rates by up to 20%. In the world of React, performance optimization is an art form that separates junior developers from seniors.</p>

                <h3>1. Memoization: Use it Wisely</h3>
                <p>Tools like <code>React.memo</code>, <code>useMemo</code>, and <code>useCallback</code> are powerful, but overusing them can actually harm performance. Use them only when:</p>
                <ul>
                    <li>The calculation is computationally expensive.</li>
                    <li>Referential equality is needed for dependency arrays in hooks.</li>
                    <li>A component re-renders often with the same props.</li>
                </ul>

                <h3>2. Code Splitting & Lazy Loading</h3>
                <p>Don't ship the entire application bundle to the user at once. Use <strong>Dynamic Imports</strong> to split your code.</p>
                <pre><code class="language-jsx">
const HeavyComponent = React.lazy(() => import('./HeavyComponent'));

function App() {
  return (
    &lt;Suspense fallback={&lt;Spinner /&gt;}&gt;
      &lt;HeavyComponent /&gt;
    &lt;/Suspense&gt;
  );
}
                </code></pre>

                <h3>3. Virtualization for Long Lists</h3>
                <p>Rendering thousands of DOM nodes will crash your browser. Libraries like <code>react-window</code> or <code>react-virtuoso</code> only render the items currently visible in the viewport, keeping the DOM light and snappy.</p>
            `,
            ar: `
                <h2>الأداء هو تجربة المستخدم</h2>
                <p>تظهر الدراسات أن تأخير ثانية واحدة في أوقات تحميل الهاتف المحمول يمكن أن يؤثر على معدلات التحويل بنسبة تصل إلى 20%. في عالم React، تحسين الأداء هو فن يميز المطورين المبتدئين عن الخبراء.</p>

                <h3>1. الـ Memoization: استخدمها بحكمة</h3>
                <p>أدوات مثل <code>React.memo</code> و <code>useMemo</code> و <code>useCallback</code> قوية، لكن استخدامها المفرط قد يضر بالأداء فعلياً. استخدمها فقط عندما:</p>
                <ul>
                    <li>تكون العملية الحسابية مكلفة.</li>
                    <li>تكون المساواة المرجعية (Referential equality) مطلوبة لمصفوفات التبعية في الـ Hooks.</li>
                    <li>يتم إعادة رسم المكون بشكل متكرر بنفس الخصائص (Props).</li>
                </ul>

                <h3>2. تقسيم الكود والتحميل الكسول (Lazy Loading)</h3>
                <p>لا ترسل حزمة التطبيق بالكامل للمستخدم دفعة واحدة. استخدم <strong>الاستيراد الديناميكي</strong> لتقسيم الكود الخاص بك.</p>
                <pre><code class="language-jsx">
const HeavyComponent = React.lazy(() => import('./HeavyComponent'));

function App() {
  return (
    &lt;Suspense fallback={&lt;Spinner /&gt;}&gt;
      &lt;HeavyComponent /&gt;
    &lt;/Suspense&gt;
  );
}
                </code></pre>

                <h3>3. الافتراضية (Virtualization) للقوائم الطويلة</h3>
                <p>رسم آلاف عناصر DOM سيؤدي إلى تجميد المتصفح. مكتبات مثل <code>react-window</code> أو <code>react-virtuoso</code> تقوم فقط برسم العناصر المرئية حالياً في واجهة العرض، مما يحافظ على خفة واستجابة الـ DOM.</p>
            `
        },
        date: "2025-02-10",
        readTime: "12 min",
        image: "/assets/blog-2.jpg",
        tags: ["Performance", "React", "JavaScript"]
    },
    {
        id: '3',
        slug: 'ui-ux-design-principles-developers',
        title: {
            en: "UI/UX Design Principles: Bridging Code and Creativity",
            ar: "مبادئ تصميم واجهة وتجربة المستخدم: جسر بين الكود والإبداع"
        },
        excerpt: {
            en: "Great code needs great design. Understand the psychology of color, the importance of white space, and the rules of typography to build interfaces that users love.",
            ar: "الكود العظيم يحتاج إلى تصميم عظيم. افهم سيكولوجية الألوان، وأهمية المساحة البيضاء، وقواعد الطباعة لبناء واجهات يعشقها المستخدمون."
        },
        content: {
            en: `
                <h2>Why Developers Should Care About Design</h2>
                <p>You can write the cleanest code in the world, but if the UI is cluttered or confusing, the product fails. Understanding basic UI/UX principles empowers you to make better decisions without waiting for a designer.</p>

                <h3>1. Hierarchy & Typography</h3>
                <p>Users don't read; they scan. Visual hierarchy guides the eye to what matters.</p>
                <ul>
                    <li><strong>Size:</strong> Larger elements are perceived as more important.</li>
                    <li><strong>Weight:</strong> Bold text draws attention.</li>
                    <li><strong>Color:</strong> High contrast indicates action (e.g., Call to Action buttons).</li>
                </ul>

                <h3>2. The Power of White Space</h3>
                <p>White space (or negative space) is not empty space; it's an active design element. It reduces cognitive load and improves readability. <br><strong>Rule of thumb:</strong> If you think you possess enough padding, double it.</p>

                <h3>3. Color Theory & Accessibility</h3>
                <p>Colors evoke emotions. Blue is trust, Red is urgency. However, accessibility (a11y) is paramount.</p>
                <p>Always check your contrast ratios. Tools like the <strong>WebAIM Contrast Checker</strong> ensure your text is readable for users with visual impairments. A beautifully designed button is useless if 10% of your users can't read it.</p>
            `,
            ar: `
                <h2>لماذا يجب على المطورين الاهتمام بالتصميم؟</h2>
                <p>يمكنك كتابة أنظف كود في العالم، لكن إذا كانت واجهة المستخدم فوضوية أو مربكة، سيفشل المنتج. فهم مبادئ UI/UX الأساسية يمنحك القوة لاتخاذ قرارات أفضل دون انتظار المصمم.</p>

                <h3>1. التسلسل الهرمي والطباعة</h3>
                <p>المستخدمون لا يقرؤون؛ بل يمسحون الصفحة بأعينهم. التسلسل الهرمي البصري يوجه العين لما هو مهم.</p>
                <ul>
                    <li><strong>الحجم:</strong> العناصر الأكبر تعتبر أكثر أهمية.</li>
                    <li><strong>الوزن:</strong> النص العريض يجذب الانتباه.</li>
                    <li><strong>اللون:</strong> التباين العالي يشير إلى إجراء (مثل أزرار الدعوة لاتخاذ إجراء).</li>
                </ul>

                <h3>2. قوة المساحة البيضاء</h3>
                <p>المساحة البيضاء (أو المساحة السلبية) ليست مساحة فارغة؛ إنها عنصر تصميم نشط. إنها تقلل من العبء المعرفي وتحسن القراءة. <br><strong>قاعدة عامة:</strong> إذا كنت تعتقد أن لديك مساحة كافية (Padding)، ضاعفها.</p>

                <h3>3. نظرية الألوان وإمكانية الوصول</h3>
                <p>الألوان تثير المشاعر. الأزرق يعني الثقة، والأحمر يعني الإلحاح. ومع ذلك، فإن إمكانية الوصول (a11y) هي الأهم.</p>
                <p>تحقق دائماً من نسب التباين الخاصة بك. أدوات مثل <strong>WebAIM Contrast Checker</strong> تضمن أن نصك قابل للقراءة للمستخدمين الذين يعانون من ضعف البصر. الزر المصمم بشكل جميل لا فائدة منه إذا لم يتمكن 10% من المستخدمين من قراءته.</p>
            `
        },
        date: "2025-03-05",
        readTime: "7 min",
        image: "/assets/blog-3.jpg",
        tags: ["UI/UX", "Design System", "A11y"]
    }
];
