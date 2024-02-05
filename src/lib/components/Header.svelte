<script>
	import Icon from '@iconify/svelte';
	import { PUBLIC_SITE_NAME } from '$env/static/public';

	const links = [
		{
			name: 'Profile',
			path: '/profile',
			icon: {
				inactive: 'bx:user',
				active: 'bxs:user'
			}
		},
		{
			name: 'Settings',
			path: '/settings',
			icon: {
				inactive: 'basil:settings-outline',
				active: 'basil:settings'
			}
		}
	];
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div
	class="bg-base-100 text-base-content sticky top-0 z-30 h-16 w-full justify-center backdrop-blur transition-shadow duration-100 [transform:translate3d(0,0,0)] shadow-sm"
>
	<div class="navbar w-full">
		<div class="flex flex-1"></div>
		<div class="flex-0">
			<div class="dropdown dropdown-end">
				<div tabindex="0" role="button" class="btn btn-ghost btn-circle">
					<div class="indicator">
						<Icon icon="ph:shopping-cart" class="h-5 w-5" />
						<span class="badge badge-sm indicator-item">8</span>
					</div>
				</div>
				<div
					tabindex="0"
					class="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-200 shadow"
				>
					<div class="card-body">
						<span class="font-bold text-lg">8 Items</span>
						<span class="text-info">Subtotal: $999</span>
						<span class="card-actions">
							<button class="btn btn-primary btn-block">View cart</button>
						</span>
					</div>
				</div>
			</div>
			<div class="dropdown dropdown-end">
				<div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
					<div class="w-10 rounded-full">
						<img
							src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
							alt="Tailwind CSS Navbar component"
						/>
					</div>
				</div>
				<ul
					tabindex="0"
					class="menu menu-sm dropdown-content mt-3 z-[1] shadow bg-base-100 rounded-box w-52"
				>
					<li>
						<a class="justify-between" href="/profile">
							Profile <span class="badge">New</span>
						</a>
					</li>
					<li><a href="/setting">Settings</a></li>
					<li><a href="/logout">Logout</a></li>
				</ul>
			</div>
		</div>
	</div>
</div>
