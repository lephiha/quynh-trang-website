(() => {
  const STORAGE_KEY = 'qt-language';
  const translations = {
    'Trang Chủ': 'Home',
    'Về Tôi': 'About Me',
    'Hành Trình': 'Journeys',
    'Liên Hệ': 'Contact',
    'Đặt Lịch Tư Vấn': 'Book a Consultation',
    'Đóng menu': 'Close menu',
    'Sống': 'Live',
    'Khoẻ Mạnh': 'Healthily',
    'Phát Huy': 'Unlock',
    'Tiềm Năng': 'Potential',
    'Tạo Ra': 'Create',
    'Thay Đổi': 'Change',
    'Tìm Lại': 'Restore',
    'Cân Bằng': 'Balance',
    'năm': 'years of',
    'kinh nghiệm': 'experience',
    'Đồng hành trên': 'Supporting you on your',
    'hành trình thay đổi': 'journey of transformation',
    'Xin chào, tôi là': 'Hello, I am',
    'Vũ Quỳnh Trang': 'Vũ Quỳnh Trang',
    '— Dược sĩ Đại học Dược Hà Nội với hơn': '— a pharmacist trained at Hanoi University of Pharmacy with over',
    '18 năm kinh nghiệm': '18 years of experience',
    'trong lĩnh vực chăm sóc sức khỏe. Tôi tin rằng một cuộc sống khỏe mạnh và cân bằng không đến từ những giải pháp tức thời, mà được xây dựng từ sự thấu hiểu bản thân và những thay đổi nhỏ mỗi ngày.': 'in healthcare. I believe a healthy, balanced life does not come from quick fixes, but is built through self-understanding and small daily changes.',
    'Trong suốt hành trình làm nghề, tôi đã gặp rất nhiều người mong muốn cải thiện vóc dáng, sức khỏe và chất lượng cuộc sống. Điều tôi nhận ra là, khi thay đổi bắt đầu từ': 'Throughout my career, I have met many people who want to improve their physique, health, and quality of life. I have learned that when change begins with',
    'tư duy đúng': 'the right mindset',
    ', được nuôi dưỡng bằng': ', nurtured by',
    'thói quen tích cực': 'positive habits',
    ', thì vóc dáng và sức khỏe sẽ dần chuyển biến theo một cách tự nhiên và bền vững.': ', the body and overall health can improve naturally and sustainably.',
    'Tôi không mong mình trở thành người thay đổi cuộc sống của ai. Điều tôi mong muốn là được chia sẻ kiến thức, kinh nghiệm và đồng hành để mỗi người có thêm niềm tin, động lực và phương pháp phù hợp, từ đó chủ động kiến tạo một phiên bản khỏe mạnh và hạnh phúc hơn của chính mình.': 'I do not seek to change anyone’s life for them. I hope to share knowledge and experience, and offer support so each person can find the confidence, motivation, and right approach to create a healthier, happier version of themselves.',
    'Dược sĩ Đại học Dược Hà Nội • Hơn 18 năm kinh nghiệm': 'Hanoi University of Pharmacy graduate • Over 18 years of experience',
    'Đồng hành xây dựng tư duy đúng và thói quen sống lành mạnh': 'Supporting the right mindset and healthy lifestyle habits',
    'Hướng đến vóc dáng cân đối, sức khỏe bền vững và cuộc sống cân bằng': 'Working toward a balanced physique, lasting health, and a balanced life',
    'Đọc thêm về tôi': 'Read more about me',
    'Hành Trình Thực Tế': 'Real Journeys',
    'Những thay đổi': 'Transformations',
    'được tạo nên từ sự kiên trì': 'made possible by persistence',
    'Xem thêm câu chuyện thực tế →': 'See more real stories →',
    'Mỗi hành trình đều bắt đầu từ một mục tiêu khác nhau, nhưng điểm chung là sự thay đổi đến từ kiến thức đúng, phương pháp phù hợp và sự kiên trì trong từng bước nhỏ.': 'Every journey begins with a different goal, but meaningful change always comes from sound knowledge, the right approach, and persistence through every small step.',
    'Xem thêm hành trình thực tế →': 'See more journeys →',
    'Blog & Kiến thức': 'Blog & Insights',
    'Kiến thức': 'Knowledge',
    '& chia sẻ': '& stories',
    'Xem tất cả →': 'View all →',
    'Góc suy ngẫm': 'Reflections',
    '27 tháng 5, 2025': 'May 27, 2025',
    'Tài sản lớn nhất của đời người là gì?': 'What is life’s greatest asset?',
    'Có một nơi mà mọi danh vọng, tiền tài đều phải dừng lại ở cánh cửa — đó chính là bệnh viện. Còn sống, còn hít thở khoẻ mạnh đã là một đặc ân.': 'There is one place where status and wealth stop at the door: the hospital. Simply being alive and breathing in good health is already a privilege.',
    'Đọc thêm': 'Read more',
    'Bài gốc': 'Original post',
    'Tập luyện': 'Fitness',
    'Mới nhất': 'Latest',
    'Cơ lõi — chìa khoá vàng cho vóc dáng chuẩn': 'Core strength — the key to a balanced physique',
    'Một hệ cơ lõi vững chắc không chỉ tạo đường cong săn chắc vùng bụng đùi mà còn cải thiện tư thế, giảm đau mỏi lưng và tăng sức bền từ bên trong.': 'A strong core not only shapes and tones the body, but also improves posture, eases back discomfort, and builds strength from within.',
    'Hãy bắt đầu': 'Begin',
    'hành trình của bạn': 'your journey',
    'Đăng ký': 'Register for a',
    'tư vấn': 'consultation',
    'Họ và tên': 'Full name',
    'Số điện thoại / Zalo': 'Phone number / Zalo',
    'Điều bạn đang quan tâm': 'What are you interested in?',
    'Mục tiêu của bạn': 'Your goal',
    'Gửi thông tin': 'Submit',
    'Đã nhận thông tin!': 'Thank you!',
    'Tất cả': 'All',
    'Dinh dưỡng': 'Nutrition',
    'Sức khoẻ': 'Health',
    'Sức khoẻ tổng thể': 'Overall health',
    'Giảm cân': 'Weight loss',
    'Đau lưng / cột sống': 'Back / spine health',
    'Vóc dáng': 'Body shaping',
    'Chưa có bài viết trong danh mục này. Hãy quay lại sớm nhé! 🌿': 'There are no posts in this category yet. Please check back soon! 🌿',
    'Chưa có hành trình trong danh mục này. 🌿': 'There are no journeys in this category yet. 🌿',
    'Muốn được tư vấn trực tiếp?': 'Would you like a personal consultation?',
    'Triết Lý': 'Philosophy',
    'giá trị sống khỏe': 'the value of healthy living',
    'Hiểu giá trị của sự thay đổi': 'Understanding the value of change',
    'kiến tạo những thay đổi bền vững': 'creating lasting change',
    'chia sẻ bằng hình ảnh': 'stories told through visuals',
    'Hệ thống CLB Core+': 'Core+ Club Network',
    'Kiến thức về độc tố': 'Understanding toxins',
    'Mỡ máu cao': 'High cholesterol',
    'Kiến thức về mỡ máu cao': 'Understanding high cholesterol',
    'Bữa sáng': 'Breakfast',
    'Dùng bữa sáng sao cho hợp lý': 'How to build a balanced breakfast',
    'Thải Độc': 'Detox',
    'Thải độc cơ thể': 'Supporting the body’s detox process',
    'Cơ quan cơ thể': 'The human body',
    'Kiến thức về Cơ quan cơ thể': 'Understanding the body’s organs',
    'Eo thon': 'A slimmer waist',
    'Làm thế nào để eo thon ?': 'How can you achieve a slimmer waist?',
    'Bắt đầu hành trình chăm sóc sức khỏe của bạn': 'Begin your journey toward better health',
    'từ hành trình thực tế': 'from real journeys',
    'thay đổi?': 'a change?',
    'Đăng ký tư vấn': 'Book a consultation',
    'miễn phí': 'free',
    'Chỉ mất 1 phút — nhận chương trình cá nhân hoá trong 24h': 'It only takes one minute — receive a personalized plan within 24 hours',
    'TƯ VẤN NGAY +': 'GET CONSULTATION +',
    'Dược sĩ · Chuyên gia sức khoẻ & vóc dáng': 'Pharmacist · Health & body-shaping specialist',
    'Dược sĩ Đại học Dược Hà Nội — 18 năm trong ngành. Đồng hành cùng bạn xây dựng tư duy, thói quen và sức khỏe bền vững từ chính những thay đổi nhỏ mỗi ngày.': 'Hanoi University of Pharmacy graduate with 18 years of experience, helping you build a healthy mindset, lasting habits, and sustainable well-being through small daily changes.',
    'Diễn giả · Chia sẻ kiến thức sức khoẻ': 'Speaker · Sharing practical health insights',
    'Tham gia hàng loạt sự kiện với vai trò diễn giả — Lan toả những giá trị giúp mỗi người chủ động chăm sóc sức khoẻ và xây dựng lối sống lành mạnh.': 'Speaking at events to share practical values that empower people to care for their health and build a healthier lifestyle.',
    'Phương pháp khoa học · Không áp lực': 'Science-based approach · No pressure',
    'Mỗi thay đổi bền vững đều bắt đầu từ tư duy đúng, thói quen đúng và sự kiên trì mỗi ngày.': 'Every lasting transformation begins with the right mindset, the right habits, and daily consistency.',
    'TRUYỀN': 'INSPIRE',
    'CẢM HỨNG': 'CHANGE',
    'KHOẺ ĐẸP': 'HEALTHY BEAUTY',
    'TỪ GỐC': 'FROM WITHIN'
  };

  const originals = new WeakMap();
  let language = localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'vi';
  let observer;

  const normalized = value => value.replace(/\s+/g, ' ').trim();

  function translateTextNode(node) {
    if (!originals.has(node)) originals.set(node, node.nodeValue);
    const original = originals.get(node);
    const key = normalized(original);
    if (!key) return;
    const translated = translations[key];
    node.nodeValue = language === 'en' && translated
      ? original.replace(key, translated)
      : original;
  }

  function translateElement(root = document.body) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        return node.parentElement?.closest('script, style, noscript')
          ? NodeFilter.FILTER_REJECT
          : NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(translateTextNode);

    root.querySelectorAll?.('[placeholder], [aria-label], [title]').forEach(el => {
      ['placeholder', 'aria-label', 'title'].forEach(attr => {
        if (!el.hasAttribute(attr)) return;
        const key = `attr:${attr}`;
        if (!el.dataset[key.replace(':', '')]) el.dataset[key.replace(':', '')] = el.getAttribute(attr);
        const original = el.dataset[key.replace(':', '')];
        el.setAttribute(attr, language === 'en' && translations[normalized(original)]
          ? translations[normalized(original)]
          : original);
      });
    });
  }

  function updateToggle() {
    document.querySelectorAll('.language-toggle').forEach(button => {
      button.querySelectorAll('[data-lang]').forEach(label => {
        label.classList.toggle('active', label.dataset.lang === language);
      });
      button.setAttribute('aria-label', language === 'vi' ? 'Switch to English' : 'Chuyển sang tiếng Việt');
    });
  }

  function applyLanguage(nextLanguage) {
    language = nextLanguage;
    localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
    document.documentElement.dataset.language = language;
    observer?.disconnect();
    translateElement();
    updateToggle();
    observer?.observe(document.body, { childList: true, subtree: true });
    window.dispatchEvent(new CustomEvent('languagechange', { detail: { language } }));
  }

  function createToggle(className = '') {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `language-toggle ${className}`.trim();
    button.innerHTML = '<span data-lang="vi">VI</span><i></i><span data-lang="en">EN</span>';
    button.addEventListener('click', () => applyLanguage(language === 'vi' ? 'en' : 'vi'));
    return button;
  }

  function init() {
    const desktopHost = document.querySelector('.navbar-cta');
    const sidebarHost = document.querySelector('.sidebar-cta-wrap');
    if (desktopHost) desktopHost.prepend(createToggle());
    if (sidebarHost) sidebarHost.prepend(createToggle('language-toggle-sidebar'));

    observer = new MutationObserver(records => {
      observer.disconnect();
      records.forEach(record => record.addedNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) translateTextNode(node);
        if (node.nodeType === Node.ELEMENT_NODE) translateElement(node);
      }));
      updateToggle();
      observer.observe(document.body, { childList: true, subtree: true });
    });
    applyLanguage(language);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
