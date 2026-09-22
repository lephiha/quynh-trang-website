(() => {
  const STORAGE_KEY = 'qt-language';
  const translations = {
    'Trang Chủ': 'Home',
    'Về Tôi': 'About Me',
    'Hành Trình': 'Journeys',
    'Cơ hội kinh doanh': 'Business Opportunity',
    'Cùng tạo cơ hội kinh doanh': 'Build a business opportunity together',
    'từ giá trị sức khỏe': 'through better health',
    'Từ kinh nghiệm trong lĩnh vực chăm sóc sức khỏe, Quỳnh Trang mong muốn đồng hành cùng những người yêu thích lối sống lành mạnh, muốn chia sẻ giá trị tích cực và tìm hiểu một hướng kinh doanh phù hợp với bản thân.': 'Drawing on her healthcare experience, Quỳnh Trang welcomes people who care about healthy living, want to share something positive, and would like to explore a business path that fits their lives.',
    'Khi bắt đầu một mình': 'When starting on your own',
    'Khi đồng hành cùng Quỳnh Trang': 'With Quỳnh Trang by your side',
    'Muốn tìm một hướng kinh doanh gắn với điều mình quan tâm, nhưng chưa rõ nên bắt đầu thế nào.': 'You want a business path connected to what you care about, but are unsure where to begin.',
    'Khám phá cách kết hợp kiến thức chăm sóc sức khỏe với cơ hội kinh doanh phù hợp với bạn.': 'Explore how health knowledge can connect with a business opportunity that suits you.',
    'Có nhiệt huyết nhưng còn thiếu kinh nghiệm và người cùng trao đổi.': 'You have the enthusiasm, but need experience and someone to talk ideas through with.',
    'Được Quỳnh Trang chia sẻ kinh nghiệm và đồng hành trong những bước đầu.': 'Learn from Quỳnh Trang’s experience and receive guidance in your first steps.',
    'Khó sắp xếp một hướng đi mới bên cạnh công việc và cuộc sống hiện tại.': 'It can be hard to make room for something new alongside work and daily life.',
    'Cùng trao đổi để chọn cách bắt đầu phù hợp với thời gian và mục tiêu của bạn.': 'Discuss a way to begin that fits your schedule and goals.',
    'Dễ mất động lực khi tự học hỏi và tìm cách phát triển một mình.': 'It is easy to lose momentum when learning and growing alone.',
    'Kết nối với cộng đồng cùng chia sẻ lối sống lành mạnh và hỗ trợ nhau tiến bộ.': 'Connect with a community that shares healthy living and supports each other’s progress.',
    'Bạn muốn biết cơ hội này có phù hợp với mình?': 'Wondering if this opportunity is right for you?',
    'Trao đổi cùng Quỳnh Trang →': 'Talk with Quỳnh Trang →',
    'Liên Hệ': 'Contact',
    'Kết nối cùng Quỳnh Trang': 'Connect with Quỳnh Trang',
    'Luôn sẵn sàng': 'Always ready to',
    'lắng nghe và đồng hành': 'listen and support you',
    'Nếu bạn muốn trao đổi về sức khỏe, vóc dáng hoặc cơ hội đồng hành, hãy kết nối với Quỳnh Trang theo cách thuận tiện nhất. Mỗi cuộc trò chuyện đều bắt đầu bằng sự lắng nghe và một hướng đi phù hợp với riêng bạn.': 'If you would like to discuss your health, physique, or an opportunity to work together, connect with Quỳnh Trang in the way that suits you best. Every conversation begins with listening and a path tailored to you.',
    'Nhắn tin qua Zalo': 'Message on Zalo',
    'Theo dõi và nhắn tin': 'Follow and message',
    'Địa chỉ': 'Address',
    'Ghé thăm Core+': 'Visit Core+',
    'Bạn muốn hẹn thời gian trò chuyện trước khi ghé?': 'Would you like to arrange a conversation before visiting?',
    'Đặt lịch cùng Quỳnh Trang →': 'Book with Quỳnh Trang →',
    'Bản đồ Core 85 Nguyễn Du': 'Map to Core 85 Nguyễn Du',
    'Đặt Lịch Tư Vấn': 'Book a Consultation',
    'MỘT CUỘC TRÒ CHUYỆN DÀNH CHO BẠN': 'A CONVERSATION FOR YOU',
    'Bắt đầu bằng một cuộc trò chuyện': 'Start with a conversation',
    'Chia sẻ mục tiêu và chọn thời gian thuận tiện. Quỳnh Trang sẽ cùng bạn tìm hướng đi phù hợp.': 'Share your goals and a convenient time. Quỳnh Trang will help you explore a path that fits.',
    'Đặt lịch trò chuyện →': 'Book a conversation →',
    'TRÒ CHUYỆN CÙNG QUỲNH TRANG': 'TALK WITH QUỲNH TRANG',
    'Đặt lịch tư vấn': 'Book a consultation',
    'Chia sẻ điều bạn quan tâm và thời gian thuận tiện. Quỳnh Trang sẽ cùng bạn trao đổi về bước tiếp theo phù hợp.': 'Share what matters to you and when you are available. Quỳnh Trang will discuss a suitable next step with you.',
    'Đóng form đặt lịch': 'Close booking form',
    'Email': 'Email',
    'Bạn muốn trao đổi về điều gì?': 'What would you like to discuss?',
    'Bạn biết đến Quỳnh Trang qua đâu?': 'How did you hear about Quỳnh Trang?',
    '(không bắt buộc)': '(optional)',
    'Ví dụ: Phi Hà giới thiệu, Facebook, TikTok, sự kiện...': 'For example: referred by Lan, Facebook, TikTok, an event...',
    'Chọn nội dung phù hợp': 'Choose a topic',
    'Sức khỏe và vóc dáng': 'Health and wellbeing',
    'Nội dung khác': 'Something else',
    'Điều bạn muốn chia sẻ': 'What would you like to share?',
    'Ngày và giờ thuận tiện để trò chuyện': 'Good days and times to talk',
    'Quỳnh Trang sẽ trao đổi để xác nhận lịch phù hợp với bạn.': 'Quỳnh Trang will get in touch to confirm a suitable time.',
    'Tôi đồng ý để Quỳnh Trang liên hệ theo thông tin đã cung cấp về yêu cầu đặt lịch này.': 'I agree that Quỳnh Trang may contact me about this booking request using the details provided.',
    'Gửi yêu cầu đặt lịch →': 'Send booking request →',
    'Email và Zalo đang được mở. Hãy xác nhận gửi yêu cầu trong cả hai ứng dụng.': 'Email and Zalo are opening. Please confirm your request in both apps.',
    'Email và Zalo đang được mở. Nội dung đã được sao chép để bạn dán vào Zalo; hãy xác nhận gửi trong cả hai ứng dụng.': 'Email and Zalo are opening. The request has been copied for you to paste into Zalo; please confirm it in both apps.',
    'Email và Zalo đang được mở. Hãy xác nhận gửi email và nhập nội dung yêu cầu trong Zalo.': 'Email and Zalo are opening. Please confirm the email and enter your request in Zalo.',
    'Tên của bạn': 'Your name',
    'Số điện thoại của bạn': 'Your phone number',
    'Bạn đang mong muốn thay đổi điều gì?': 'What would you like to change?',
    'Ví dụ: chiều thứ Ba hoặc sáng thứ Bảy': 'For example: Tuesday afternoon or Saturday morning',
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
    'Tôi giúp mỗi người tạo ra sự thay đổi bền vững trong cuộc sống — bắt đầu từ': 'I help people create lasting change in their lives — beginning with',
    ', hình thành': ', developing',
    ', cải thiện vóc dáng và xây dựng sức khỏe từ gốc. Bằng kiến thức, kinh nghiệm và một lộ trình phù hợp, tôi dẫn dắt bạn từng bước kiến tạo phiên bản khỏe mạnh, tự tin và hạnh phúc hơn của chính mình.': ', improving their physique, and building health from within. Through expertise, experience, and a personalized roadmap, I guide you step by step toward a healthier, more confident, and happier version of yourself.',
    'Dược sĩ Đại học Dược Hà Nội • Hơn 18 năm kinh nghiệm': 'Hanoi University of Pharmacy graduate • Over 18 years of experience',
    'Dẫn dắt thay đổi từ tư duy đúng đến thói quen sống lành mạnh': 'Guiding change from the right mindset to healthy lifestyle habits',
    'Kiến tạo vóc dáng cân đối, sức khỏe bền vững và cuộc sống cân bằng': 'Creating a balanced physique, lasting health, and a balanced life',
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
    'Đăng ký': 'Book a',
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
    'trong lĩnh vực chăm sóc sức khỏe. Mỗi chặng đường làm nghề đều giúp tôi hiểu rằng sức khỏe là nền tảng để mỗi người tận hưởng cuộc sống một cách trọn vẹn hơn.': 'in healthcare. Every stage of my career has shown me that health is the foundation for living life more fully.',
    'Trong suốt hành trình làm nghề, tôi đã gặp rất nhiều người mong muốn cải thiện vóc dáng, sức khỏe và chất lượng cuộc sống. Điều tôi nhận ra là, khi thay đổi bắt đầu từ': 'Throughout my career, I have met many people seeking to improve their physique, health, and quality of life. I have learned that when change begins with',
    ', được nuôi dưỡng bằng': ', and is nurtured by',
    'Tôi là': 'I am',
    ', Dược sĩ tốt nghiệp Đại học Dược Hà Nội với hơn': ', a pharmacist who graduated from Hanoi University of Pharmacy with over',
    'Hành trình lan tỏa': 'A journey of sharing',
    'Hơn 18 năm làm việc trong lĩnh vực chăm sóc sức khỏe giúp tôi hiểu rằng một cuộc sống khỏe mạnh không đến từ những giải pháp ngắn hạn, mà được xây dựng từ tư duy đúng, thói quen tốt và sự kiên trì mỗi ngày.': 'More than 18 years in healthcare have taught me that a healthy life does not come from short-term solutions. It is built through the right mindset, positive habits, and daily consistency.',
    'Hiểu cơ thể': 'Understand your body',
    'Từ kiến thức chuyên môn và kinh nghiệm thực tế, tôi giúp mỗi người hiểu cơ thể, thay đổi cách nhìn nhận về sức khỏe, hình thành những thói quen tích cực và từng bước xây dựng một lối sống khỏe mạnh, cân bằng và bền vững.': 'Drawing on professional knowledge and real-world experience, I help people understand their bodies, reshape how they view health, develop positive habits, and gradually build a healthy, balanced, and sustainable lifestyle.',
    'Tôi tin rằng sự thay đổi không đến từ những lời hứa hay giải pháp tức thời. Vì vậy, tôi trực tiếp dẫn dắt bằng tư duy đúng, phương pháp phù hợp và một lộ trình đủ rõ ràng để mỗi người tạo nên phiên bản tốt hơn của chính mình.': 'I believe change does not come from promises or quick fixes. I therefore provide direct guidance through the right mindset, a suitable method, and a clear roadmap that helps each person become a better version of themselves.',
    'Dược sĩ Đại học Dược Hà Nội — 18 năm ngành Dược': 'Hanoi University of Pharmacy graduate — 18 years in pharmacy',
    'Lan tỏa kiến thức về sức khỏe, dinh dưỡng và lối sống lành mạnh': 'Sharing knowledge about health, nutrition, and healthy living',
    'Diễn giả chia sẻ về sức khỏe, lối sống và phát triển bản thân': 'Speaker on health, lifestyle, and personal development',
    'Dẫn dắt để': 'Guiding you to',
    'Tư duy là nền tảng.': 'Mindset is the foundation.',
    'Mỗi thay đổi tích cực đều bắt đầu từ cách chúng ta nhìn nhận sức khỏe, hiểu cơ thể và lựa chọn chăm sóc bản thân mỗi ngày.': 'Every positive change begins with how we view health, understand our bodies, and choose to care for ourselves each day.',
    'Thói quen tạo nên kết quả.': 'Habits create results.',
    'Những hành động nhỏ được duy trì đều đặn sẽ tạo nên sự thay đổi bền vững về vóc dáng, sức khỏe và chất lượng cuộc sống.': 'Small actions practiced consistently create lasting improvements in physique, health, and quality of life.',
    'Dẫn dắt để tạo ra thay đổi.': 'Guidance that creates change.',
    'Tôi biến kiến thức và kinh nghiệm thành một lộ trình phù hợp, giúp mỗi người đi từ nhận thức đến hành động và duy trì kết quả lâu dài.': 'I turn knowledge and experience into a suitable roadmap, helping each person move from awareness to action and maintain long-term results.',
    'Cùng xây dựng một cuộc sống khỏe mạnh hơn →': 'Let’s build a healthier life →',
    'Những chia sẻ thực tế từ hành trình 18 năm ngành Dược — về sức khoẻ, vóc dáng, và cách sống khoẻ.': 'Practical insights from 18 years in pharmacy — covering health, physique, and healthier living.',
    'Đặt lịch tư vấn miễn phí — Quỳnh Trang sẽ thiết kế chương trình riêng cho bạn.': 'Book a free consultation — Quỳnh Trang will design a personalized program for you.',
    'Đặt lịch ngay →': 'Book now →',
    'Sẵn sàng': 'Ready for',
    'Điền form hoặc nhắn tin trực tiếp. Quỳnh Trang sẽ phản hồi trong 24 giờ, xác định điểm bạn cần thay đổi và thiết kế một lộ trình riêng phù hợp với bạn.': 'Complete the form or send a direct message. Quỳnh Trang will respond within 24 hours, identify what you would like to change, and design a roadmap tailored to you.',
    'Chat trực tiếp qua Facebook': 'Chat directly on Facebook',
    'Địa chỉ': 'Address',
    'Đăng ký tư vấn': 'Book a consultation',
    'Gửi yêu cầu tư vấn →': 'Request a consultation →',
    'Chị Quỳnh Trang sẽ liên hệ bạn trong vòng 24 giờ.': 'Quỳnh Trang will contact you within 24 hours.',
    'Cảm ơn bạn đã tin tưởng và đồng hành cùng tôi 🌿': 'Thank you for your trust 🌿',
    'Kiến thức được': 'Knowledge',
    'Những video, hình ảnh và khoảnh khắc thực tế ghi lại hành trình chia sẻ kiến thức, lan tỏa lối sống khỏe mạnh và đồng hành cùng cộng đồng trên con đường chăm sóc sức khỏe.': 'Videos, images, and real moments capturing a journey of sharing knowledge, promoting healthy living, and helping the community care for their health.',
    'Tôi luôn sẵn sàng lắng nghe, chia sẻ kiến thức và đồng hành cùng bạn trên hành trình xây dựng một cuộc sống khỏe mạnh và cân bằng hơn.': 'I am always ready to listen, share practical knowledge, and guide you toward a healthier, more balanced life.',
    'Những chia sẻ': 'Real stories',
    'Mỗi lời chia sẻ dưới đây là một kết quả thực tế từ lộ trình do Quỳnh Trang trực tiếp hướng dẫn. Sự thay đổi không chỉ nằm ở vóc dáng hay sức khỏe, mà còn ở tư duy, thói quen và cách mỗi người chủ động tận hưởng cuộc sống mỗi ngày.': 'Each story below reflects a real outcome from a roadmap personally guided by Quỳnh Trang. The transformation goes beyond physique and health to include mindset, habits, and how each person actively enjoys daily life.',
    'Chị T.': 'Ms. T.',
    'Chị M.': 'Ms. M.',
    'Chị H.': 'Ms. H.',
    '"Tôi bắt đầu vì muốn cải thiện vóc dáng, nhưng điều nhận lại còn nhiều hơn thế. Cơ thể khỏe hơn, lưng đỡ đau và tôi cũng tự tin hơn trong cuộc sống."': '"I started because I wanted to improve my physique, but I gained much more. My body feels healthier, my back hurts less, and I feel more confident in life."',
    '"Điều khiến tôi hạnh phúc không phải chỉ là cân nặng thay đổi, mà là mỗi ngày đều cảm thấy cơ thể khỏe hơn và tràn đầy năng lượng."': '"What makes me happy is not only the change in my weight, but feeling healthier and more energetic every day."',
    '"Lưng thẳng, người nhẹ, không còn đau — 3 tháng mà tôi như sống lại một lần nữa."': '"My back is straighter, my body feels lighter, and the pain is gone — after three months, I feel alive again."',
    'Những câu chuyện và chia sẻ mới sẽ được cập nhật thường xuyên để lan tỏa thêm những giá trị tích cực về sức khỏe và lối sống.': 'New stories will be added regularly to share more positive values around health and lifestyle.',
    'Từ tư duy đúng': 'From the right mindset',
    'đến những thay đổi bền vững': 'to lasting transformation',
    'Mỗi câu chuyện là kết quả của một lộ trình thay đổi rõ ràng: điều chỉnh tư duy, hình thành thói quen tích cực, cải thiện vóc dáng và xây dựng sức khỏe bền vững. Quỳnh Trang trực tiếp dẫn dắt từng bước để thay đổi không chỉ được tạo ra, mà còn được duy trì trong cuộc sống mỗi ngày.': 'Every story is the result of a clear transformation roadmap: reshaping mindset, developing positive habits, improving physique, and building lasting health. Quỳnh Trang guides each step so change is not only achieved, but sustained in everyday life.',
    'Nếu bạn đang mong muốn cải thiện sức khỏe, vóc dáng hoặc xây dựng một lối sống lành mạnh hơn, hãy để lại thông tin hoặc liên hệ trực tiếp với tôi. Tôi luôn sẵn sàng lắng nghe, chia sẻ và đồng hành cùng bạn trên hành trình phù hợp nhất.': 'If you want to improve your health, physique, or build a healthier lifestyle, leave your details or contact me directly. I am ready to listen and guide you along the path that suits you best.',
    'Chỉ mất khoảng 1 phút để lại thông tin. Tôi sẽ liên hệ với bạn trong thời gian sớm nhất để cùng trao đổi.': 'It only takes about one minute to leave your details. I will contact you shortly to discuss your needs.',
    'Gửi thông tin →': 'Submit details →',
    'Cảm ơn bạn!': 'Thank you!',
    'Thông tin của bạn đã được gửi thành công.': 'Your information has been submitted successfully.',
    'Tôi sẽ liên hệ với bạn trong thời gian sớm nhất.': 'I will contact you shortly.',
    'Rất mong được đồng hành cùng bạn trên hành trình chăm sóc sức khỏe. 🌿': 'I look forward to guiding you on your health journey. 🌿',
    'Ví dụ: Nguyễn Văn A': 'For example: Alex Nguyen',
    'Nhập số điện thoại hoặc Zalo': 'Enter your phone number or Zalo',
    'Hãy chia sẻ ngắn gọn điều bạn đang quan tâm hoặc mong muốn cải thiện...': 'Briefly share what you are interested in or would like to improve...',
    'VD: Tôi muốn giảm 8kg, hết đau lưng, cải thiện vóc dáng trong 3 tháng...': 'For example: I want to lose 8 kg, ease back pain, and improve my physique in three months...',
    'Vui lòng điền họ tên và số điện thoại nhé!': 'Please enter your full name and phone number.',
    'Về Tôi — Vũ Quỳnh Trang': 'About Me — Vũ Quỳnh Trang',
    'Liên Hệ — Vũ Quỳnh Trang': 'Contact — Vũ Quỳnh Trang',
    'Hành Trình Thực Tế — Vũ Quỳnh Trang': 'Real Journeys — Vũ Quỳnh Trang',
    'TƯ VẤN NGAY +': 'GET CONSULTATION +',
    'Dược sĩ · Chuyên gia sức khoẻ & vóc dáng': 'Pharmacist · Health & body-shaping specialist',
    'Dược sĩ Đại học Dược Hà Nội — 18 năm kinh nghiệm. Giúp bạn thay đổi từ tư duy, xây dựng thói quen đúng, cải thiện vóc dáng và kiến tạo sức khỏe bền vững từ gốc.': 'Hanoi University of Pharmacy graduate with 18 years of experience. Helping you transform your mindset, build the right habits, improve your physique, and create lasting health from within.',
    'Diễn giả · Chia sẻ kiến thức sức khoẻ': 'Speaker · Sharing practical health insights',
    'Truyền cảm hứng và dẫn dắt mỗi người biến kiến thức thành hành động — từ thay đổi tư duy đến xây dựng một lối sống khỏe mạnh, chủ động và bền vững.': 'Inspiring and guiding people to turn knowledge into action — from transforming their mindset to building a healthy, proactive, and sustainable lifestyle.',
    'Phương pháp khoa học · Không áp lực': 'Science-based approach · No pressure',
    'Một lộ trình thay đổi toàn diện: tư duy đúng, thói quen đúng, vóc dáng cân đối và sức khỏe bền vững.': 'A complete transformation roadmap: the right mindset, the right habits, a balanced physique, and lasting health.',
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
    if (language === 'en' && translated) {
      const leadingWhitespace = original.match(/^\s*/)?.[0] || '';
      const trailingWhitespace = original.match(/\s*$/)?.[0] || '';
      node.nodeValue = leadingWhitespace + translated + trailingWhitespace;
    } else {
      node.nodeValue = original;
    }
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

  function updateMetadata() {
    const title = document.querySelector('title');
    if (title) {
      if (!title.dataset.vi) title.dataset.vi = title.textContent;
      const original = normalized(title.dataset.vi);
      title.textContent = language === 'en' && translations[original]
        ? translations[original]
        : title.dataset.vi;
    }

    const description = document.querySelector('meta[name="description"]');
    if (description) {
      if (!description.dataset.vi) description.dataset.vi = description.content;
      description.content = language === 'en'
        ? 'Vũ Quỳnh Trang — pharmacist and health specialist with 18 years of experience, guiding lasting change in mindset, habits, physique, and well-being.'
        : description.dataset.vi;
    }
  }

  function applyLanguage(nextLanguage) {
    language = nextLanguage;
    localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
    document.documentElement.dataset.language = language;
    observer?.disconnect();
    translateElement();
    updateMetadata();
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

  window.qtI18n = {
    get language() { return language; },
    translate(text) {
      const key = normalized(text);
      return language === 'en' && translations[key] ? translations[key] : text;
    }
  };
})();
