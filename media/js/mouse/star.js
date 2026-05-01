(function() {
  const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9'];
  
  document.addEventListener('click', function(e) {
    const starCount = 8; // 每次点击生成的星星数量
    
    for (let i = 0; i < starCount; i++) {
      createStar(e.clientX, e.clientY);
    }
  });
  
  function createStar(x, y) {
    const star = document.createElement('div');
    star.className = 'star';
    
    // 随机大小
    const size = Math.random() * 10 + 5;
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    
    // 随机颜色
    star.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    
    // 随机位置
    star.style.left = x + 'px';
    star.style.top = y + 'px';
    
    // 随机角度
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 50 + 20;
    
    // 计算最终位置
    const endX = x + Math.cos(angle) * distance;
    const endY = y + Math.sin(angle) * distance;
    
    // 添加到页面
    document.body.appendChild(star);
    
    // 动画效果
    star.style.transition = 'all 0.6s ease-out';
    
    // 触发动画
    setTimeout(() => {
      star.style.transform = `translate(${endX - x}px, ${endY - y}px) scale(0)`;
      star.style.opacity = '0';
    }, 10);
    
    // 动画结束后移除元素
    setTimeout(() => {
      if (star.parentNode) {
        star.parentNode.removeChild(star);
      }
    }, 600);
  }
})();