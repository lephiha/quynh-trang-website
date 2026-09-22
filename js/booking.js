(() => {
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
          <button type="submit" class="btn btn-primary">Chuẩn bị yêu cầu đặt lịch →</button>
        </div>
        <section class="booking-next" id="bookingNextSteps" aria-labelledby="bookingNextTitle" hidden>
          <h3 id="bookingNextTitle" tabindex="-1">Hoàn tất yêu cầu qua email và Zalo</h3>
          <p class="booking-next-note">Thông tin mới được chuẩn bị, chưa tự gửi đi. Hãy hoàn tất cả hai bước dưới đây.</p>
          <div class="booking-step">
            <span class="booking-step-number" aria-hidden="true">1</span>
            <div>
              <h4>Gửi email</h4>
              <p>Mở bản nháp đã điền sẵn, kiểm tra rồi bấm Gửi trong ứng dụng email.</p>
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
              <p>Sao chép nội dung, mở Zalo của Quỳnh Trang, dán vào cuộc trò chuyện rồi bấm Gửi.</p>
              <div class="booking-step-actions">
                <button type="button" id="bookingCopy" class="btn btn-outline">Sao chép nội dung</button>
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
  let opener = null;

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

  form.addEventListener('submit', event => {
    event.preventDefault();

    const data = new FormData(form);
    const value = name => String(data.get(name) || '').trim();
    const interestLabels = {
      health: 'Sức khỏe và vóc dáng',
      business: 'Cơ hội kinh doanh',
      other: 'Nội dung khác',
    };
    const message = [
      'YÊU CẦU ĐẶT LỊCH TƯ VẤN',
      '',
      `Họ và tên: ${value('name')}`,
      `Email: ${value('email')}`,
      `Số điện thoại / Zalo: ${value('phone')}`,
      `Nội dung muốn trao đổi: ${interestLabels[value('interest')] || value('interest')}`,
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
    nextSteps.hidden = false;
    status.textContent = translate('Nội dung đã sẵn sàng. Hãy gửi email và tin nhắn Zalo ở hai bước bên dưới.');
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
