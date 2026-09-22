(() => {
  // ── EmailJS config — điền 3 giá trị lấy từ dashboard emailjs.com ──
  const EMAILJS_SERVICE_ID  = 'service_ubjw77k';
  const EMAILJS_TEMPLATE_ID = 'template_4shoepp';
  const EMAILJS_PUBLIC_KEY  = '330pGmBOxaJr9KUc_';

  if (window.emailjs && EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
  }

  const dialog = document.createElement('dialog');
  dialog.id = 'bookingDialog';
  dialog.className = 'booking-dialog';
  dialog.setAttribute('aria-labelledby', 'bookingTitle');
  dialog.innerHTML = `
    <div class="booking-shell">
      <button type="button" class="booking-close" aria-label="Đóng form đặt lịch">×</button>
      <div class="booking-heading">
        <span class="booking-eyebrow">TRÒ CHUYỆN CÙNG QUỲNH TRANG</span>
        <h2 id="bookingTitle">Đặt lịch tư vấn</h2>
        <p>Chia sẻ điều bạn quan tâm và thời gian thuận tiện. Quỳnh Trang sẽ cùng bạn trao đổi về bước tiếp theo phù hợp.</p>
      </div>
      <form class="booking-form" id="bookingForm">
        <div class="booking-fields">
          <div class="booking-field">
            <label for="bookingName">Họ và tên <span aria-hidden="true">*</span></label>
            <input id="bookingName" name="name" type="text" autocomplete="name" maxlength="100" placeholder="Tên của bạn" required>
          </div>
          <div class="booking-field">
            <label for="bookingEmail">Email <span aria-hidden="true">*</span></label>
            <input id="bookingEmail" name="email" type="email" autocomplete="email" maxlength="150" placeholder="email@example.com" required>
          </div>
          <div class="booking-field">
            <label for="bookingPhone">Số điện thoại / Zalo <span aria-hidden="true">*</span></label>
            <input id="bookingPhone" name="phone" type="tel" autocomplete="tel" inputmode="tel" maxlength="20" placeholder="Số điện thoại của bạn" required>
          </div>
          <div class="booking-field">
            <label for="bookingInterest">Bạn muốn trao đổi về điều gì? <span aria-hidden="true">*</span></label>
            <select id="bookingInterest" name="interest" required>
              <option value="" selected disabled>Chọn nội dung phù hợp</option>
              <option value="health">Sức khỏe và vóc dáng</option>
              <option value="business">Cơ hội kinh doanh</option>
              <option value="other">Nội dung khác</option>
            </select>
          </div>
          <div class="booking-field booking-field-wide">
            <label for="bookingSource">Bạn biết đến Quỳnh Trang qua đâu? <span class="booking-optional">(không bắt buộc)</span></label>
            <input id="bookingSource" name="source" type="text" maxlength="200" placeholder="Ví dụ: Phi Hà giới thiệu, Facebook, TikTok, sự kiện...">
          </div>
          <div class="booking-field booking-field-wide">
            <label for="bookingMessage">Điều bạn muốn chia sẻ</label>
            <textarea id="bookingMessage" name="message" rows="3" maxlength="1000" placeholder="Bạn đang mong muốn thay đổi điều gì?"></textarea>
          </div>
          <div class="booking-field booking-field-wide">
            <label for="bookingAvailability">Ngày và giờ thuận tiện để trò chuyện <span aria-hidden="true">*</span></label>
            <textarea id="bookingAvailability" name="availability" rows="2" maxlength="300" placeholder="Ví dụ: chiều thứ Ba hoặc sáng thứ Bảy" required></textarea>
            <p class="booking-help">Quỳnh Trang sẽ trao đổi để xác nhận lịch phù hợp với bạn.</p>
          </div>
        </div>
        <label class="booking-consent">
          <input type="checkbox" name="consent" required>
          <span>Tôi đồng ý để Quỳnh Trang liên hệ theo thông tin đã cung cấp về yêu cầu đặt lịch này.</span>
        </label>
        <div class="booking-actions">
          <button type="submit" class="btn btn-primary" id="bookingSubmitBtn">Gửi yêu cầu đặt lịch →</button>
        </div>
        <section class="booking-next" id="bookingNextSteps" aria-labelledby="bookingNextTitle" hidden>
          <h3 id="bookingNextTitle" tabindex="-1">Bước cuối: nhắn qua Zalo</h3>
          <p class="booking-next-note" id="bookingEmailStatusNote">Email đã được gửi tự động. Zalo chưa hỗ trợ gửi thẳng nên nội dung đã được sao chép — chỉ cần dán và bấm Gửi.</p>
          <div class="booking-step" id="bookingEmailFallbackStep" hidden>
            <span class="booking-step-number" aria-hidden="true">1</span>
            <div>
              <h4>Gửi email (thủ công)</h4>
              <p>Gửi email tự động không thành công. Mở bản nháp đã điền sẵn, kiểm tra rồi bấm Gửi trong ứng dụng email.</p>
              <div class="booking-step-actions">
                <a id="bookingEmailLink" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Mở Gmail →</a>
                <a id="bookingMailLink" class="booking-text-link">Dùng ứng dụng email khác</a>
              </div>
            </div>
          </div>
          <div class="booking-step">
            <span class="booking-step-number" aria-hidden="true">2</span>
            <div>
              <h4>Nhắn qua Zalo</h4>
              <p>Zalo vừa được mở ở tab mới, nội dung đã có sẵn trong bộ nhớ tạm — dán vào khung chat rồi bấm Gửi.</p>
              <div class="booking-step-actions">
                <button type="button" id="bookingCopy" class="btn btn-outline">Sao chép lại nội dung</button>
                <a href="https://zalo.me/0904170485" target="_blank" rel="noopener noreferrer" class="booking-text-link">Mở Zalo →</a>
              </div>
            </div>
          </div>
          <details class="booking-preview-wrap">
            <summary>Xem nội dung yêu cầu để sao chép thủ công</summary>
            <textarea id="bookingPreview" readonly aria-label="Nội dung yêu cầu đặt lịch"></textarea>
          </details>
          <p class="booking-status" id="bookingStatus" role="status" aria-live="polite"></p>
        </section>
      </form>
    </div>
  `;
  document.body.appendChild(dialog);

  const form = dialog.querySelector('form');
  const status = dialog.querySelector('#bookingStatus');
  const nextSteps = dialog.querySelector('#bookingNextSteps');
  const preview = dialog.querySelector('#bookingPreview');
  const emailLink = dialog.querySelector('#bookingEmailLink');
  const mailLink = dialog.querySelector('#bookingMailLink');
  const copyButton = dialog.querySelector('#bookingCopy');
  const submitBtn = dialog.querySelector('#bookingSubmitBtn');
  const emailStatusNote = dialog.querySelector('#bookingEmailStatusNote');
  const emailFallbackStep = dialog.querySelector('#bookingEmailFallbackStep');
  let opener = null;

  async function copyToClipboard(text) {
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      return false;
    }
  }

  const translate = text => window.qtI18n?.translate(text) || text;

  function openBooking(trigger = null) {
    opener = trigger?.closest('.sidebar') ? document.getElementById('menuToggle') : trigger;
    dialog.showModal();
    document.body.classList.add('booking-open');
    dialog.querySelector('#bookingName').focus();
  }

  document.addEventListener('click', event => {
    const trigger = event.target.closest('[data-booking]');
    if (!trigger) return;
    event.preventDefault();
    openBooking(trigger);
  });

  dialog.querySelector('.booking-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('booking-open');
    opener?.focus();
  });

  const invalidatePreparedRequest = () => {
    nextSteps.hidden = true;
    status.textContent = '';
  };
  form.addEventListener('input', invalidatePreparedRequest);
  form.addEventListener('change', invalidatePreparedRequest);

  form.addEventListener('submit', async event => {
    event.preventDefault();

    const data = new FormData(form);
    const value = name => String(data.get(name) || '').trim();
    const interestLabels = {
      health: 'Sức khỏe và vóc dáng',
      business: 'Cơ hội kinh doanh',
      other: 'Nội dung khác',
    };
    const interestLabel = interestLabels[value('interest')] || value('interest');
    const message = [
      'YÊU CẦU ĐẶT LỊCH TƯ VẤN',
      '',
      `Họ và tên: ${value('name')}`,
      `Email: ${value('email')}`,
      `Số điện thoại / Zalo: ${value('phone')}`,
      `Nội dung muốn trao đổi: ${interestLabel}`,
      `Biết đến Quỳnh Trang qua: ${value('source') || 'Không cung cấp'}`,
      `Điều muốn chia sẻ: ${value('message') || 'Không cung cấp'}`,
      `Thời gian thuận tiện: ${value('availability')}`,
    ].join('\n');
    const subject = `Yêu cầu đặt lịch tư vấn - ${value('name')}`;
    const emailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent('vuquynhtrang@coreplus.vn')}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    const mailtoUrl = `mailto:vuquynhtrang@coreplus.vn?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    emailLink.href = emailUrl;
    mailLink.href = mailtoUrl;
    preview.value = message;

    submitBtn.disabled = true;
    submitBtn.textContent = 'Đang gửi...';

    let emailSent = false;
    try {
      if (!window.emailjs || EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
        throw new Error('EmailJS chưa được cấu hình');
      }
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: value('name'),
        from_email: value('email'),
        phone: value('phone'),
        interest: interestLabel,
        source: value('source') || 'Không cung cấp',
        message: value('message') || 'Không cung cấp',
        availability: value('availability'),
      });
      emailSent = true;
    } catch (err) {
      console.error('EmailJS send error', err);
      emailSent = false;
    }

    const copied = await copyToClipboard(message);
    window.open('https://zalo.me/0904170485', '_blank', 'noopener,noreferrer');

    emailFallbackStep.hidden = emailSent;
    if (emailSent) {
      emailStatusNote.textContent = translate(copied
        ? 'Email đã được gửi tự động. Zalo vừa mở ở tab mới, nội dung đã copy sẵn — dán và bấm Gửi.'
        : 'Email đã được gửi tự động. Zalo vừa mở ở tab mới — bấm "Sao chép lại nội dung" rồi dán vào khung chat.');
    } else {
      emailStatusNote.textContent = translate(copied
        ? 'Gửi email tự động chưa thành công, hãy gửi thủ công ở bước 1. Zalo vừa mở ở tab mới, nội dung đã copy sẵn.'
        : 'Gửi email tự động chưa thành công, hãy gửi thủ công ở bước 1. Zalo vừa mở ở tab mới — bấm "Sao chép lại nội dung" rồi dán.');
    }

    nextSteps.hidden = false;
    status.textContent = '';
    submitBtn.disabled = false;
    submitBtn.textContent = 'Gửi yêu cầu đặt lịch →';
    dialog.querySelector('#bookingNextTitle').focus();
  });

  copyButton.addEventListener('click', async () => {
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(preview.value);
      status.textContent = translate('Đã sao chép nội dung. Hãy mở Zalo, dán và bấm Gửi.');
    } catch {
      dialog.querySelector('.booking-preview-wrap').open = true;
      preview.focus();
      preview.select();
      status.textContent = translate('Không thể sao chép tự động. Nội dung đã được chọn; hãy sao chép thủ công rồi dán vào Zalo.');
    }
  });

  if (window.location.hash === '#booking') openBooking();
})();